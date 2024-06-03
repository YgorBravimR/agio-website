"use client"
import { CompanyInfoCard } from "@/components/CompanyInfoCard"
import { ContactForm } from "@/components/ContactForm"
import { Footer } from "@/components/Footer"
import { GoogleMaps } from "@/components/Gmap"
import { Header } from "@/components/Header"
import { IconButton } from "@/components/IconButton"
import { SocialProveCard } from "@/components/SocialProveCard"
import { Button } from "@/components/ui/Button"
import {
  aboutSectionData,
  companyInfoData,
  contactSectionData,
  homeSectionData,
  socialProvesSectionData,
  whatsAppNumber,
} from "@/content/manager"
import Image from "next/image"

export default function Home() {
  const whatsAppLink = `https://wa.me/${whatsAppNumber}`

  const whatsAppRedirect = () => window.open(whatsAppLink, "_blank")

  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between w-full text-xl bg-mainBgColor">
        <section
          id="home"
          className="w-full h-full flex flex-col px-xScreen py-yScreen items-center justify-center gap-8 bg-[url('/signingPicture.jpg')] bg-cover bg-center bg-no-repeat"
        >
          <h2 className="text-center text-lightTextColor text-5xl mx-56">{homeSectionData.title} </h2>
          <p className="text-center text-detailTextColor text-3xl mx-80">{homeSectionData.subtitle} </p>
          <div className="flex flex-row w-full gap-8 items-center justify-center">
            <Button className="uppercase w-[312px]" variant={"sky"} onClick={whatsAppRedirect}>
              abrir cnpj
            </Button>
            <Button className="uppercase w-[312px]" variant={"sky"} onClick={whatsAppRedirect}>
              trocar de contador
            </Button>
          </div>
        </section>
        <section id="services" className="w-full h-full grid grid-cols-3 px-xScreen py-yScreen items-center justify-center gap-8">
          {companyInfoData.map((item, i) => (
            <CompanyInfoCard key={i + item.title} title={item.title} description={item.description} icon={item.icon} />
          ))}
        </section>
        <section
          id="about"
          className="h-full flex px-xScreen items-end justify-center rounded-tr-[150px] bg-gradient-to-tr from-mainColor to-[#39a39b]"
        >
          <div className="h-full w-[35%]">
            <Image
              src={aboutSectionData.image.sourceUrl}
              width={aboutSectionData.image.width}
              height={aboutSectionData.image.height}
              alt={aboutSectionData.image.alternativeText}
            />
          </div>
          <div className="flex flex-col items-center justify-center gap-8 w-[65%] my-8">
            <p className="text-center text-lightTextColor text-4xl uppercase">{aboutSectionData.title}</p>
            <p className="text-center text-lightTextColor text-xl mx-20">{aboutSectionData.description}</p>
            <Button variant="lime" className="px-8 uppercase" onClick={whatsAppRedirect}>
              {aboutSectionData.buttonText}
            </Button>
          </div>
        </section>
        <section
          id="mission"
          className="w-full flex items-center flex-col justify-center gap-8 px-xScreen py-yScreen max-h-[80vh] text-5xl bg-custom-gradient"
        >
          <div className="p-4 w-[70%] self-start">
            <p className="font-bold text-4xl mb-2 text-leafGreenColor">Missão</p>
            <p className="text-3xl text-justify">
              Ajudar os empreendedores a compreenderem o seu negócio, auxiliando na tomada de decisões com proximidade, praticidade e
              eficiência, para pequenas, médias e grandes empresas.
            </p>
          </div>
          <div className="p-4 w-[70%] self-center">
            <p className="font-bold text-4xl mb-2 text-leafGreenColor">Visão</p>
            <p className="text-3xl text-justify">
              Ser referência no mercado de contabilidade e perícia capixaba, buscando melhoria contínua com o apoio de novas tecnologias.
            </p>
          </div>
          <div className="p-4 w-[70%] self-end">
            <p className="font-bold text-4xl mb-2 text-leafGreenColor">Valores</p>
            <p className="text-3xl text-justify">Transparência, respeito e atendimento humanizado, são os valores que nós prezamos.</p>
          </div>
        </section>
        <section id="social-proves" className="w-full flex flex-col gap-8 p-2 py-yScreen bg-mainColor items-center justify-center">
          <p className="text-4xl font-bold text-lightTextColor">{socialProvesSectionData.title}</p>
          <div className="grid grid-cols-3 gap-8 w-2/3">
            {socialProvesSectionData.cards.map((card, i) => (
              <SocialProveCard
                company={card.company}
                key={i + card.company}
                description={card.description}
                image={card.image}
                userName={card.userName}
              />
            ))}
          </div>
        </section>
        <section
          id="contact"
          className="w-full h-full grid grid-cols-2 px-xScreen py-yScreen items-center justify-center gap-8 bg-[url('/buildingsPicture.jpg')] bg-cover bg-center bg-no-repeat"
        >
          <ContactForm />
          <div className="h-full flex flex-col gap-4 items-center justify-center">
            <div className="w-full flex justify-between items-center">
              <Image
                src={contactSectionData.image.sourceUrl}
                alt={contactSectionData.image.alternativeText}
                width={contactSectionData.image.width}
                height={contactSectionData.image.height}
              />
              <div className="flex flex-col gap-2">
                {contactSectionData.companyInfo.map((item, i) => (
                  <div key={i + item.description} className="flex items-center gap-4 text-lightTextColor">
                    {item.icon}
                    <span>{item.description}</span>
                  </div>
                ))}
              </div>
            </div>
            <GoogleMaps />
          </div>
        </section>
      </main>
      <IconButton href={whatsAppLink} src="./whatsApp.png" alt="WhatsApp" className="w-16 h-16 fixed bottom-5 right-10" link />
      <Footer />
    </>
  )
}
