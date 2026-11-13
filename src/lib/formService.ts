export type FormPayload = Record<string, string | number | boolean | null | undefined>

// Reuse the request UUID when the visitor retries an unchanged, ambiguous submission.
let pendingSubmission: { signature: string; requestId: string } | null = null

export async function submitForm(formType: string, data: FormPayload) {
  const signature = JSON.stringify({ formType, data })
  if (pendingSubmission?.signature !== signature) pendingSubmission = { signature, requestId: crypto.randomUUID() }
  const submission = pendingSubmission
  const response = await fetch('/api/forms/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ formType, data, requestId: submission.requestId }),
  })

  const result = await response.json().catch(() => null)

  if (!response.ok || result?.ok !== true) {
    throw new Error(result?.message || 'Failed to submit form')
  }

  if (pendingSubmission === submission) pendingSubmission = null
  return result
}