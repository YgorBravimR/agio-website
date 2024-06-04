"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "./Button"
import emailjs from "emailjs-com"

export function ContactForm({ rows = 8 }: { rows?: number }) {
  const service_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string
  const email_template_ID = process.env.NEXT_PUBLIC_EMAILJS_EMAIL_TEMPLATE_ID as string
  const user_ID = process.env.NEXT_PUBLIC_EMAILJS_USER_ID as string

  const formSchema = z.object({
    name: z.string().min(1, "Required"),
    email: z.string().email("Invalid email address").min(1, "Required"),
    message: z.string().min(1, "Required"),
  })

  type FormSchema = z.infer<typeof formSchema>

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
  })

  async function handleClickSendButton(data: FormSchema) {
    const { name, email, message } = data

    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
    }

    emailjs.send(service_ID, email_template_ID, templateParams, user_ID).then(
      (response) => {
        alert("Message sent successfully!")
        reset()
      },
      (err) => {
        console.error("FAILED...", err)
        alert("Failed to send the message, please try again")
      }
    )
  }

  return (
    <form
      className="flex flex-col items-center gap-4 w-full md:w-3/5 lg:w-full text-sm md:text:lg lg:text-2xl"
      onSubmit={handleSubmit(handleClickSendButton)}
    >
      <p className="text-whiteColor font-bold tracking-wider text-xl -mb-3 lg:hidden">Deixe-nos uma mensagem</p>
      <input
        className={`w-full border rounded-md p-1 lg:p-2 bg-inputBg ${errors.name ? "border-red-500" : "border-gray-300"}`}
        type="text"
        placeholder="Seu nome"
        {...register("name")}
      />
      <input
        className={`w-full border rounded-md p-1 lg:p-2 bg-inputBg ${errors.email ? "border-red-500" : "border-gray-300"}`}
        type="email"
        placeholder="Seu melhor email"
        {...register("email")}
      />
      <textarea
        className={`w-full border rounded-md p-1 lg:p-2 bg-inputBg resize-none ${errors.message ? "border-red-500" : "border-gray-300"}`}
        placeholder="Escreva aqui sua mensagem..."
        rows={rows}
        {...register("message")}
      />
      <Button type="submit" variant="ocean" className="uppercase">
        Enviar mensagem
      </Button>
    </form>
  )
}
