import { NextResponse } from 'next/server'

export const runtime = 'nodejs'

type FormDataPayload = Record<string, unknown>

type SubmitBody = {
  formType?: unknown
  data?: FormDataPayload
}

const GOOGLE_APPS_SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbzM2H9rwMS-mGswPnwicaG9eU0zc2juvfQK9uqiWdReldx5RpNaG7AGBCRZlokR9lyw/exec'

function asCleanString(value: unknown) {
  return typeof value === 'string' ? value.trim() : ''
}

async function readScriptResponse(response: Response) {
  const text = await response.text().catch(() => '')

  if (!text) {
    return null
  }

  try {
    return JSON.parse(text)
  } catch {
    return { message: text }
  }
}

function validateRequiredFields(formType: string, data: Record<string, string>) {
  if (formType === 'Contact Message') {
    return data.name && data.email && data.mobile && data.service && data.subject
  }

  if (formType === 'Franchise Enquiry') {
    return (
      data.name &&
      data.phone &&
      data.email &&
      data.city &&
      data.state &&
      data.locality &&
      data.propertyStatus &&
      data.investmentBudget &&
      data.timeline &&
      data.consent
    )
  }

  return data.name && data.phone && data.branch && data.time
}

export async function POST(request: Request) {
  let body: SubmitBody

  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ message: 'Invalid JSON body.' }, { status: 400 })
  }

  const formType = asCleanString(body.formType) || 'Free Trial'
  const data = body.data || {}
  const cleanData = Object.fromEntries(
    Object.entries(data).map(([key, value]) => [key, asCleanString(value)])
  ) as Record<string, string>

  if (!validateRequiredFields(formType, cleanData)) {
    return NextResponse.json(
      { message: formType === 'Contact Message'
        ? 'Please fill in name, email, mobile, service, and subject.'
        : formType === 'Franchise Enquiry'
          ? 'Please fill in name, phone, email, city, state, locality, property status, investment budget, timeline, and consent.'
        : 'Please fill in name, phone, branch, and time slot.' },
      { status: 400 }
    )
  }

  const submittedAt = new Date().toISOString()
  const payload = {
    submittedAt,
    timestamp: submittedAt,
    formType,
    ...cleanData,
  }

  try {
    const scriptResponse = await fetch(GOOGLE_APPS_SCRIPT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
      cache: 'no-store',
    })

    const result = await readScriptResponse(scriptResponse)

    if (!scriptResponse.ok || result?.success === false) {
      return NextResponse.json(
        { message: result?.message || 'Failed to submit form to Google Sheets.', result },
        { status: 502 }
      )
    }

    return NextResponse.json({ ok: true, result })
  } catch (error) {
    console.error('Google Apps Script submission failed:', error)

    return NextResponse.json(
      { message: 'Failed to submit form to Google Sheets.' },
      { status: 500 }
    )
  }
}
