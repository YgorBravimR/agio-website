import { companyInfoData } from "@/content/manager"
import { CompanyInfoCard } from "../CompanyInfoCard"
import { paddingScreenSizes } from "./_index"

export function ServicesSection() {
  return (
    <section
      id="services"
      className={`w-full h-full grid md:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-4 md:gap-8 ${paddingScreenSizes}`}
    >
      {companyInfoData.map((item, i) => (
        <CompanyInfoCard key={i + item.title} title={item.title} description={item.description} icon={item.icon} />
      ))}
    </section>
  )
}
