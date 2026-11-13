import assert from 'node:assert/strict';
import { pathToFileURL } from 'node:url';
import { createRequire } from 'node:module';
const base = 'C:/Invictus_Projects/invictus-admin-panel/invictus_lead_backend/';
const req = createRequire(base + 'package.json');
const { Op } = req('sequelize');
const load = path => import(pathToFileURL(base + path));
const { default: db } = await load('src/database/index.js');
const { phoenixFitnessListSchema } = await load('src/middlewares/validation/phoenixFitnessValidation.js');
const { listPhoenixFitnessLeads, getPhoenixFitnessSummary, exportPhoenixFitnessLeadReport } = await load('src/modules/phoenixFitness/phoenixFitness.service.js');
const original = { findAndCountAll: db.PhoenixFitness.findAndCountAll, count: db.PhoenixFitness.count, findOne: db.PhoenixFitness.findOne, findAll: db.PhoenixFitness.findAll };
let queries = [];
const capture = value => { queries.push(value.where); };
db.PhoenixFitness.findAndCountAll = async q => { capture(q); return { rows: [], count: 0 }; };
db.PhoenixFitness.count = async q => { capture(q); return 0; };
db.PhoenixFitness.findOne = async q => { capture(q); return null; };
db.PhoenixFitness.findAll = async q => { capture(q); return []; };
const tenant = { id: 7, clientKey: 'phoenix_fitness', getScope: filters => ({ ...filters, client_id: 7 }) };
try {
  assert.ok(phoenixFitnessListSchema.validate({lead_source: 'invalid'}).error);
  for (const source of ['landing_page', 'website']) {
    const { value, error } = phoenixFitnessListSchema.validate({ lead_source: source, search: 'Test' });
    assert.ifError(error);
    queries = [];
    await listPhoenixFitnessLeads(value, tenant);
    await getPhoenixFitnessSummary(value, tenant);
    await exportPhoenixFitnessLeadReport({ ...value, format: 'csv' }, tenant);
    assert.ok(queries.length >= 6);
    for (const where of queries) {
      assert.equal(where.client_id, 7);
      assert.ok(where[Op.or], 'Search must remain combined with source filter');
      if (source === 'website') assert.equal(where.source_provider, 'phoenix_website');
      else {
        const sourceClause = where[Op.and][0][Op.or];
        assert.equal(sourceClause[0].source_provider[Op.is], null, 'Historical NULL source stays in landing tab');
        assert.equal(sourceClause[1].source_provider[Op.ne], 'phoenix_website');
      }
    }
  }
  console.log('Source validation, legacy lead inclusion, tenant isolation, list, summary and CSV source filtering passed (mocked database).');
} finally { Object.assign(db.PhoenixFitness, original); }

