import { contactSectionData } from "@/content/manager"
import useScreenSize from "@/hooks/useScreenSize"
import Image from "next/image"
import { useMemo } from "react"
import "swiper/css"
import "swiper/css/pagination"
import { ContactForm } from "../ContactForm"
import { GoogleMaps } from "../Gmap"
import { paddingScreenSizes } from "./_index"

export function ContactSection() {
  const screenWidth = useScreenSize()?.width
  const isMediumScreen = useMemo(() => screenWidth < 1280, [screenWidth])

  return (
    <section
      id="contact"
      className={`w-full h-full flex flex-col-reverse lg:flex-col items-center justify-center gap-8 bg-[url('/buildingsPicture.jpg')] bg-cover bg-center bg-no-repeat ${paddingScreenSizes}`}
    >
      <div className="w-full hidden lg:flex gap-2 justify-center">
        <Image src={contactSectionData.image.sourceUrl} alt={contactSectionData.image.alternativeText} width={300} height={150} />
        <div className="flex flex-col gap-2 mb-0">
          {contactSectionData.companyInfo.map((item, i) => (
            <div key={i + item.description} className="flex items-center gap-4 text-lightTextColor">
              {item.icon}
              <span className="text-2xl">{item.description}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full flex lg:grid lg:grid-cols-2 gap-12 items-center justify-center">
        <ContactForm rows={isMediumScreen ? 4 : 6} />
        <div className="w-full h-full hidden lg:block pb-16">
          <GoogleMaps />
        </div>
      </div>
      <div className="w-full h-full flex flex-col md:flex-row lg:hidden gap-4 items-center justify-center">
        <div className="w-full md:w-fit lg:w-full flex flex-col lg:flex-row md:justify-center lg:justify-between items-center">
          <Image
            src={contactSectionData.image.sourceUrl}
            alt={contactSectionData.image.alternativeText}
            width={200}
            height={100}
            className="w-[160px] h-[80px] md:w-[200px] md:h-[100px] lg:hidden"
          />
          <div className="w-full h-[25vh] md:hidden pb-4">
            <GoogleMaps />
          </div>
          <div className="flex flex-col gap-2 -mb-4 lg:mb-0 lg:hidden">
            {contactSectionData.companyInfo.map((item, i) => (
              <div
                key={i + item.description}
                className="flex items-center gap-2 md:gap-3 lg:gap-4 text-lightTextColor scale-75 lg:scale-100"
              >
                {item.icon}
                <span className="text-lg md:text-xl lg:text-2xl">{item.description}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full h-[40vh] lg:h-full hidden md:block">
          <GoogleMaps />
        </div>
      </div>
    </section>
  )
}
