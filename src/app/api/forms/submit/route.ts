import { NextResponse } from 'next/server'

export const runtime = 'nodejs'

// All persistence and downstream delivery belong to the lead backend.
// Never call Sheets/Runo from the browser or return their credentials/responses.
export async function POST(request: Request) {
  let body: Record<string, unknown>
  try {
    const parsed: unknown = await request.json()
    if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) throw new Error()
    body = parsed as Record<string, unknown>
  } catch {
    return NextResponse.json({ message: 'Invalid JSON body.' }, { status: 400 })
  }
  const url = process.env.PHOENIX_LEADS_API_URL?.trim()
  const clientKey = process.env.PHOENIX_LEADS_CLIENT_KEY?.trim()
  if (!url || !clientKey) return NextResponse.json({ message: 'Enquiry service is not configured.' }, { status: 503 })
  try {
    const upstream = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'X-Client-Key': clientKey },
      body: JSON.stringify({ formType: body.formType, data: body.data, requestId: body.requestId }),
      cache: 'no-store', signal: AbortSignal.timeout(15000),
    })
    const result = await upstream.json().catch(() => null)
    if (!upstream.ok || result?.success !== true) {
      const status = upstream.status === 400 ? 400 : 502
      return NextResponse.json({ message: status === 400 ? 'Please check the enquiry fields and try again.' : 'Unable to save your enquiry. Please try again.' }, { status })
    }
    return NextResponse.json({ ok: true, id: result.id })
  } catch {
    console.error('Phoenix enquiry backend unavailable')
    return NextResponse.json({ message: 'Unable to save your enquiry. Please try again.' }, { status: 502 })
  }
}
