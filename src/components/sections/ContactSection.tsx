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
  const isSmallScreen = useMemo(() => screenWidth < 768, [screenWidth])

  return (
    <section
      id="contact"
      className={`w-full h-full flex flex-col-reverse lg:flex-col lg:grid lg:grid-cols-2 items-center justify-center gap-8 bg-[url('/buildingsPicture.jpg')] bg-cover bg-center bg-no-repeat ${paddingScreenSizes}`}
    >
      <ContactForm rows={isSmallScreen ? 4 : isMediumScreen ? 6 : 8} />
      <div className="w-full h-[35vh] hidden md:block lg:hidden pb-4">
        <GoogleMaps />
      </div>
      <div className="w-full h-full flex flex-col gap-4 items-center justify-center">
        <div className="w-full flex flex-col md:flex-row md:justify-center lg:justify-between items-center">
          <Image
            src={contactSectionData.image.sourceUrl}
            alt={contactSectionData.image.alternativeText}
            width={contactSectionData.image.width}
            height={contactSectionData.image.height}
          />
          <div className="w-full h-[30vh] md:hidden pb-4">
            <GoogleMaps />
          </div>
          <div className="flex flex-col gap-2">
            {contactSectionData.companyInfo.map((item, i) => (
              <div key={i + item.description} className="flex items-center gap-4 text-lightTextColor">
                {item.icon}
                <span className="text-lg md:text-xl lg:text-2xl">{item.description}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full h-full hidden lg:block">
          <GoogleMaps />
        </div>
      </div>
    </section>
  )
}
