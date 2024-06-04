"use client"
import { Footer } from "@/components/Footer"
import { Header } from "@/components/Header"
import { IconButton } from "@/components/IconButton"
import {
  AboutSection,
  ContactSection,
  HomeSection,
  MissionSection,
  ServicesSection,
  SocialProvesSection,
  whatsAppLink,
} from "@/components/sections/_index"

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between w-full text-xl bg-mainBgColor overflow-x-hidden">
        <HomeSection />
        <ServicesSection />
        <AboutSection />
        <MissionSection />
        <SocialProvesSection />
        <ContactSection />
      </main>
      <IconButton
        href={whatsAppLink}
        src="./whatsApp.png"
        alt="WhatsApp"
        className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 fixed bottom-5 right-4 md:right-7 lg:right-10 z-[999]"
        link
      />
      <Footer />
    </>
  )
}
