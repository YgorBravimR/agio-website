import { whatsAppNumber } from "@/content/manager"
import "../../styles/swiperStyles.css"
import { AboutSection } from "./AboutSection"
import { ContactSection } from "./ContactSection"
import { HomeSection } from "./HomeSection"
import { MissionSection } from "./MissionSection"
import { ServicesSection } from "./ServicesSection"
import { SocialProvesSection } from "./SocialProvesSection"

export const paddingScreenSizes = "px-xScreenSm md:px-xScreenMd lg:px-xScreen py-yScreenSm md:py-yScreenMd lg:py-yScreen"
export const whatsAppLink = `https://wa.me/${whatsAppNumber}`
export const whatsAppRedirect = () => window.open(whatsAppLink, "_blank")

export { AboutSection, ContactSection, HomeSection, MissionSection, ServicesSection, SocialProvesSection }
