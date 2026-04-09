import { Resend } from 'resend'

export async function sendWaitlistEmail({ to, name }: { to: string; name?: string | null }) {
  const key = process.env.RESEND_API_KEY
  if (!key) {
    // Skip sending in environments without an API key (e.g., local dev/build)
    console.warn('RESEND_API_KEY not set — skipping email')
    return
  }

  const resend = new Resend(key)
  const html = `<p>Hi ${name || ''},</p><p>Thanks for joining the OneFoundr waitlist — we’ll be in touch soon.</p>`
  return resend.emails.send({
    from: 'no-reply@onefoundr.com',
    to,
    subject: 'Welcome to OneFoundr',
    html,
  })
}
