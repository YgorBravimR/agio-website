import { Button, Html } from "@react-email/components"
import * as React from "react"

interface EmailTemplateProps {
  name: string
  message: string
  from: string
}

export default function EmailTemplate({ name, message, from }: EmailTemplateProps) {
  return (
    <Html>
      <p>
        <strong>Nome:</strong> {name}
      </p>
      <p>
        <strong>Email:</strong> {from}
      </p>
      <p>
        <strong>Mensagem:</strong> {message}
      </p>
    </Html>
  )
}
