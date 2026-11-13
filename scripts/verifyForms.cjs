const fs = require('node:fs');
const assert = require('node:assert/strict');
const { createRequire } = require('node:module');
const root = require('node:path').resolve(__dirname, '..') + '/';
const req = createRequire(root + 'package.json');
const ts = req('typescript');
function load(name) { const compiled=ts.transpileModule(fs.readFileSync(root+name,'utf8'),{compilerOptions:{target:ts.ScriptTarget.ES2022,module:ts.ModuleKind.CommonJS}}).outputText; const exports={}; new Function('exports','require',compiled)(exports,req); return exports; }
(async()=>{
  const oldFetch=globalThis.fetch;
  const oldUrl=process.env.PHOENIX_LEADS_API_URL;
  const oldKey=process.env.PHOENIX_LEADS_CLIENT_KEY;
  const oldConsole=console.error;
  console.error=()=>{};
  try {
    const {submitForm}=load('src/lib/formService.ts');
    const ids=[];
    globalThis.fetch=async(_url,options)=>{ids.push(JSON.parse(options.body).requestId); if(ids.length===1)throw new Error('Ambiguous connection'); return Response.json({ok:true,id:1});};
    const data={name:'Test',phone:'9876543210',branch:'Hope Farm',time:'Morning'};
    await assert.rejects(submitForm('Free Trial',data));
    await submitForm('Free Trial',data);
    await submitForm('Free Trial',data);
    assert.equal(ids[0],ids[1]); assert.notEqual(ids[1],ids[2]);
    const {POST}=load('src/app/api/forms/submit/route.ts');
    const request=(body)=>new Request('http://localhost/api/forms/submit',{method:'POST',headers:{'Content-Type':'application/json'},body});
    assert.equal((await POST(request('{'))).status,400);
    assert.equal((await POST(request('null'))).status,400);
    delete process.env.PHOENIX_LEADS_API_URL; delete process.env.PHOENIX_LEADS_CLIENT_KEY;
    assert.equal((await POST(request('{}'))).status,503);
    process.env.PHOENIX_LEADS_API_URL='https://backend.example.test/register'; process.env.PHOENIX_LEADS_CLIENT_KEY='phoenix_fitness';
    const body=JSON.stringify({formType:'Free Trial',data,requestId:ids[0],injected:'discarded'});
    globalThis.fetch=async(url,options)=>{
      assert.equal(url,process.env.PHOENIX_LEADS_API_URL);
      assert.equal(options.headers['X-Client-Key'],'phoenix_fitness');
      assert.equal(JSON.parse(options.body).injected,undefined);
      assert.equal(JSON.parse(options.body).requestId,ids[0]);
      return Response.json({success:true,id:12,secret:'never return this'});
    };
    const success=await POST(request(body)); assert.equal(success.status,200); assert.deepEqual(await success.json(),{ok:true,id:12});
    for(const [upstream,expected] of [[400,400],[401,502],[500,502]]) {
      globalThis.fetch=async()=>Response.json({success:false,message:'do not expose backend response'}, {status:upstream});
      const res=await POST(request(body)); assert.equal(res.status,expected); assert.equal((await res.text()).includes('do not expose'),false);
    }
    globalThis.fetch=async()=>{throw new Error('secret endpoint');};
    assert.equal((await POST(request(body))).status,502);
    console.log('Phoenix browser retry UUID and Next.js proxy success/error checks passed (mocked remote services).');
  } finally {
    globalThis.fetch=oldFetch;console.error=oldConsole;
    if(oldUrl===undefined)delete process.env.PHOENIX_LEADS_API_URL;else process.env.PHOENIX_LEADS_API_URL=oldUrl;
    if(oldKey===undefined)delete process.env.PHOENIX_LEADS_CLIENT_KEY;else process.env.PHOENIX_LEADS_CLIENT_KEY=oldKey;
  }
})().catch(error=>{console.error(error);process.exitCode=1;});
