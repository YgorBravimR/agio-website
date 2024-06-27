import EmailTemplate from "@/components/emails/EmailTemplate"
import { NextRequest } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_KEY)

interface IEmailBody {
  from: string
  name: string
  message: string
}

export async function POST(req: NextRequest) {
  try {
    if (!process.env.NEXT_PUBLIC_RESEND_EMAIL_FROM || !process.env.NEXT_PUBLIC_RESEND_EMAIL_TO) {
      throw new Error("Missing environment variables")
    }

    const { from, name, message } = (await req.json()) as IEmailBody

    const { data, error } = await resend.emails.send({
      from: `${name} <${process.env.NEXT_PUBLIC_RESEND_EMAIL_FROM}>`,
      to: process.env.NEXT_PUBLIC_RESEND_EMAIL_TO,
      subject: `Nova mensagem recebida de ${name} através do site.`,
      react: EmailTemplate({ name, message, from }),
      reply_to: from,
    })

    if (error) {
      return Response.json({ error }, { status: 500 })
    }

    return Response.json({ data })
  } catch (error) {
    return Response.json({ error }, { status: 500 })
  }
}
