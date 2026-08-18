export type FormPayload = Record<string, string | number | boolean | null | undefined>

export async function submitForm(formType: string, data: FormPayload) {
  const response = await fetch('/api/forms/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ formType, data }),
  })

  const result = await response.json().catch(() => null)

  if (!response.ok) {
    throw new Error(result?.message || 'Failed to submit form')
  }

  return result
}