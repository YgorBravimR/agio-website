import { aboutSectionData } from "@/content/manager"
import Image from "next/image"
import { Button } from "../Button"
import { paddingScreenSizes, whatsAppRedirect } from "./_index"

export function AboutSection() {
  return (
    <section
      id="about"
      className={`h-full flex items-end justify-center rounded-tr-[75px] md:rounded-tr-[150px] bg-gradient-to-tr from-mainColor to-[#39a39b] ${paddingScreenSizes} lg:pb-0`}
    >
      <div className="h-full w-[35%] hidden lg:block">
        <Image
          src={aboutSectionData.image.sourceUrl}
          width={aboutSectionData.image.width}
          height={aboutSectionData.image.height}
          alt={aboutSectionData.image.alternativeText}
        />
      </div>
      <div className="flex flex-col items-center justify-center gap-4 md:gap-8 lg:w-[65%] my-4 md:my-6 lg:my-8 lg:py-yScreen">
        <p className="text-center text-lightTextColor text-2xl md:text-3xl lg:text-4xl uppercase">{aboutSectionData.title}</p>
        <p className="text-center text-lightTextColor text-lg lg:text-xl mx-8 md:mx-14 lg:mx-20">{aboutSectionData.description}</p>
        <Button variant="lime" className="px-6 py-4 uppercase" onClick={whatsAppRedirect}>
          {aboutSectionData.buttonText}
        </Button>
      </div>
    </section>
  )
}
