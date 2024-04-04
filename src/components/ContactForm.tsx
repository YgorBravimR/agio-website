'use client';
import axios from "axios";
import { useState } from "react";
import { z } from "zod";

export function ContactForm() {
  const [nameValue, setNameValue] = useState<string>('');
  const [emailValue, setEmailValue] = useState<string>('');
  const [messageValue, setMessageValue] = useState<string>('');

  function clearStates() {
    setNameValue('');
    setEmailValue('');
    setMessageValue('');
  }

  async function handleClickSendButton() {
    try {
      const schema = z.object({
        name: z.string().min(1),
        email: z.string().email(),
        message: z.string().min(1),
      })

      const { name, email, message } = schema.parse({
        name: nameValue,
        email: emailValue,
        message: messageValue
      });


      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/messages`, {
        name,
        email,
        message
      })

      alert(`Thankss ${name}, your message was send successfully!`)
    } catch (error) {
      console.log(error)
      alert(`Sorry ${name}, error sending your message!`)
    } finally {
      clearStates()
    }
  }

  return (
    <div className="flex items-center justify-center gap-6 w-full flex-col lg:flex-row text-blackColor">
      <div className="flex flex-col gap-4 w-full">
        <input
          className="w-full border border-gray-300 rounded-md p-2 bg-inputBg"
          type="text"
          value={nameValue}
          onChange={(e) => setNameValue(e.target.value)}
          placeholder="Name"
        />
        <input
          className="w-full border border-gray-300 rounded-md p-2 bg-inputBg"
          type="email"
          value={emailValue}
          onChange={(e) => setEmailValue(e.target.value)}
          placeholder="E-mail"
        />
        <textarea
          className="w-full border border-gray-300 rounded-md p-2 bg-inputBg resize-none"
          value={messageValue}
          onChange={(e) => setMessageValue(e.target.value)}
          placeholder="Message"
          rows={5}
        />
      </div>
      <button
        className="text-whiteColor dark:text-whiteColor border-blackColor dark:border-whiteColor bg-mainColor font-bold py-2 px-4 rounded-sm border whitespace-nowrap"
        onClick={() => handleClickSendButton()}
      >
        Send Message
      </button>
    </div>
  )
}
