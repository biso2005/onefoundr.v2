import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json()

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required.' },
        { status: 400 }
      )
    }

    const resend = new Resend(process.env.RESEND_API_KEY!)

    await resend.emails.send({
      from: 'OneFoundr Contact <hello@onefoundr.com>',
      to: 'hello@onefoundr.com',
      reply_to: email,
      subject: `New message from ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 480px; margin: 0 auto; padding: 40px 20px; background: #0D0D0D; color: #FFFFFF;">
          <h2 style="color: #F5A623; margin-bottom: 24px;">New Contact Message</h2>
          <p style="color: #A0A0A0; margin-bottom: 8px;"><strong style="color: #FFFFFF;">Name:</strong> ${name}</p>
          <p style="color: #A0A0A0; margin-bottom: 8px;"><strong style="color: #FFFFFF;">Email:</strong> ${email}</p>
          <p style="color: #A0A0A0; margin-bottom: 16px;"><strong style="color: #FFFFFF;">Message:</strong></p>
          <p style="color: #FFFFFF; line-height: 1.6; padding: 16px; background: #111111; border-radius: 8px;">${message}</p>
        </div>
      `,
    })

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (err) {
    console.error(err)
    return NextResponse.json(
      { error: 'Internal server error.' },
      { status: 500 }
    )
  }
}
