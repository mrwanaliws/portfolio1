import nodemailer from 'nodemailer'
import { NextResponse } from 'next/server'

type Body = {
  name?: string
  email?: string
  message?: string
}

export async function POST(request: Request) {
  try {
    const body: Body = await request.json()
    const { name, email, message } = body
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT) : 587,
      secure: process.env.SMTP_SECURE === 'true',
      auth: process.env.SMTP_USER && process.env.SMTP_PASS ? {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      } : undefined
    })

    const to = process.env.CONTACT_TO || process.env.SMTP_USER
    const info = await transporter.sendMail({
      from: `${name} <${email}>`,
      to,
      subject: `Portfolio contact from ${name}`,
      text: message,
      html: `<p>${message}</p><p>From: ${name} &lt;${email}&gt;</p>`
    })

    return NextResponse.json({ ok: true, info })
  } catch (err) {
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
