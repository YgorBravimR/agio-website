"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "./ui/button"

export function ContactForm() {
  const formSchema = z.object({
    name: z.string().min(1, "Required"),
    email: z.string().email("Invalid email address").min(1, "Required"),
    message: z.string().min(1, "Required"),
  })

  type FormSchema = z.infer<typeof formSchema>

  const { register, handleSubmit } = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
  })

  async function handleClickSendButton(data: FormSchema) {
    console.log(data)
  }

  return (
    <form className="flex flex-col items-center gap-4 w-full text-2xl" onSubmit={handleSubmit(handleClickSendButton)}>
      <input className="w-full border border-gray-300 rounded-md p-2 bg-inputBg" type="text" placeholder="Name" {...register("name")} />
      <input className="w-full border border-gray-300 rounded-md p-2 bg-inputBg" type="email" placeholder="E-mail" {...register("email")} />
      <textarea
        className="w-full border border-gray-300 rounded-md p-2 bg-inputBg resize-none"
        placeholder="Message"
        rows={8}
        {...register("message")}
      />
      <Button type="submit" variant="ocean" className="uppercase">
        Enviar mensagem
      </Button>
    </form>
  )
}
