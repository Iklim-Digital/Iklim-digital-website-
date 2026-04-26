import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY)
  const { name, email, company, service, message } = await req.json()

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 })
  }

  const serviceLabel = service
    ? service
        .replace(/-/g, ' ')
        .replace(/\b\w/g, (c: string) => c.toUpperCase())
    : 'Not specified'

  const { error } = await resend.emails.send({
    from: 'IklimDigital Contact <onboarding@resend.dev>',
    to: 'iklimdigital@gmail.com',
    replyTo: email,
    subject: `New enquiry from ${name}`,
    html: `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto;color:#111">
        <h2 style="margin-bottom:4px">New Contact Form Submission</h2>
        <hr style="border:none;border-top:1px solid #e5e7eb;margin:12px 0"/>
        <table style="width:100%;border-collapse:collapse">
          <tr><td style="padding:8px 0;color:#6b7280;width:140px">Name</td><td style="padding:8px 0;font-weight:600">${name}</td></tr>
          <tr><td style="padding:8px 0;color:#6b7280">Email</td><td style="padding:8px 0"><a href="mailto:${email}">${email}</a></td></tr>
          <tr><td style="padding:8px 0;color:#6b7280">Company</td><td style="padding:8px 0">${company || '—'}</td></tr>
          <tr><td style="padding:8px 0;color:#6b7280">Service</td><td style="padding:8px 0">${serviceLabel}</td></tr>
        </table>
        <hr style="border:none;border-top:1px solid #e5e7eb;margin:12px 0"/>
        <p style="color:#6b7280;margin-bottom:6px">Message</p>
        <p style="white-space:pre-wrap;margin:0">${message}</p>
      </div>
    `,
  })

  if (error) {
    console.error('Resend error:', error)
    return NextResponse.json({ error: 'Failed to send message.' }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}
