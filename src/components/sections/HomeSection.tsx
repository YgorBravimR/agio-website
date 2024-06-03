import { homeSectionData } from "@/content/manager"
import { Button } from "../ui/Button"
import { paddingScreenSizes, whatsAppRedirect } from "./_index"

export function HomeSection() {
  return (
    <section
      id="home"
      className={`flex flex-col items-center justify-center gap-4 md:gap-8 bg-[url('/signingPicture.jpg')] bg-cover bg-center bg-no-repeat w-full h-full ${paddingScreenSizes}`}
    >
      <h2 className="text-center text-lightTextColor text-2xl md:text-3xl lg:text-5xl lg:mx-56">{homeSectionData.title} </h2>
      <p className="text-center text-detailTextColor text-xl md:text-2xl lg:text-3xl mx-10 md:mx-20 lg:mx-80">{homeSectionData.subtitle}</p>
      <div className="flex flex-col md:flex-row w-full gap-2 md:gap-8 items-center justify-center">
        <Button className="uppercase w-[312px]" variant={"sky"} onClick={whatsAppRedirect}>
          {homeSectionData.buttonOneText}
        </Button>
        <Button className="uppercase w-[312px]" variant={"sky"} onClick={whatsAppRedirect}>
          {homeSectionData.buttonTwoText}
        </Button>
      </div>
    </section>
  )
}
