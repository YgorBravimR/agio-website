import { companyInfoData } from "@/content/manager"
import { CompanyInfoCard } from "../CompanyInfoCard"
import { paddingScreenSizes } from "./_index"
import useScreenSize from "@/hooks/useScreenSize"
import { useMemo } from "react"

export function ServicesSection() {
  const screenWidth = useScreenSize()?.width
  const isSmallScreen = useMemo(() => screenWidth < 520, [screenWidth])

  return (
    <section
      id="services"
      className={`w-full h-full grid md:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-8 max-w-screen-xl ${paddingScreenSizes}`}
    >
      {companyInfoData.map((item, i) => (
        <CompanyInfoCard
          key={i + item.title}
          title={item.title}
          description={item.description}
          icon={item.icon}
          mobile={isSmallScreen}
          buttonText={item.buttonText}
        />
      ))}
    </section>
  )
}
