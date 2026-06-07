import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, message } = body

    if (!name || !email || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 })
    }

    const apiKey = process.env.RESEND_API_KEY

    if (apiKey) {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          from: "Contact Form <onboarding@resend.dev>",
          to: ["adityagupta200807@gmail.com"],
          subject: `New Contact from ${name}`,
          html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong></p><p>${message}</p>`,
        }),
      })

      if (!res.ok) {
        console.error("Failed to send email via Resend")
      }
    } else {
      console.log("Contact form submission:", { name, email, message })
    }

    return NextResponse.json({ success: true, message: "Message sent successfully!" })
  } catch {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
