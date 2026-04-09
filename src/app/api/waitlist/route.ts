import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import { Resend } from 'resend'

export async function POST(req: NextRequest) {
  try {
    const { email, stage } = await req.json()

    if (!email || !stage) {
      return NextResponse.json(
        { error: 'Email and stage are required.' },
        { status: 400 }
      )
    }

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

    if (!supabaseUrl || !supabaseAnonKey) {
      console.error('Missing Supabase env vars')
      return NextResponse.json({ error: 'Server misconfigured' }, { status: 500 })
    }

    const supabase = createClient(supabaseUrl, supabaseAnonKey)

    // Save to Supabase
    const { error: dbError } = await supabase
      .from('waitlist')
      .insert([{ email, stage, created_at: new Date().toISOString() }])

    if (dbError) {
      if (dbError.code === '23505') {
        return NextResponse.json(
          { error: 'You are already on the waitlist.' },
          { status: 409 }
        )
      }
      throw dbError
    }

    // Send confirmation email if API key provided
    const resendKey = process.env.RESEND_API_KEY
    if (resendKey) {
      const resend = new Resend(resendKey)
      await resend.emails.send({
        from: 'OneFoundr <hello@onefoundr.com>',
        to: email,
        subject: "You're on the OneFoundr waitlist 🎉",
        html: `
        <div style="font-family: sans-serif; max-width: 480px; margin: 0 auto; padding: 40px 20px; background: #0D0D0D; color: #FFFFFF;">
          <h1 style="font-size: 24px; font-weight: 700; margin-bottom: 16px;">
            You're in. 🎉
          </h1>
          <p style="color: #A0A0A0; line-height: 1.6; margin-bottom: 24px;">
            Welcome to OneFoundr. You're one of the founders who gets it — 
            building something real, doing it solo, and refusing to do it in isolation.
          </p>
          <p style="color: #A0A0A0; line-height: 1.6; margin-bottom: 24px;">
            We're building fast. You'll hear from us when we're ready to let the first 
            cohort in. Founding members get priority access and locked-in pricing.
          </p>
          <p style="color: #F5A623; font-weight: 600;">
            — The OneFoundr Team
          </p>
        </div>
      `,
      })
    } else {
      console.warn('RESEND_API_KEY not set; skipping confirmation email')
    }

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (err) {
    console.error(err)
    return NextResponse.json(
      { error: 'Internal server error.' },
      { status: 500 }
    )
  }
}
