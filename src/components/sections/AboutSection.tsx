import { aboutSectionData } from "@/content/manager"
import { AboutCard } from "../AboutCard"
import { paddingScreenSizes } from "./_index"

export function AboutSection() {
  return (
    <section
      id="about"
      className={`h-full flex items-end justify-center rounded-tr-[75px] md:rounded-tr-[150px] bg-gradient-to-bl from-[#39a39b] to-leafGreenColorDark via-leafGreenColorLight" ${paddingScreenSizes} lg:pb-0 max-w-screen-xl`}
    >
      <div className="flex flex-col items-center justify-center lg:w-[65%] my-4 md:my-6 lg:my-8 lg:py-yScreen rounded-xl">
        <div className="bg-leafGreenColor text-lightTextColor w-full flex items-center justify-center text-4xl py-7 rounded-t-xl">
          {aboutSectionData.title}
        </div>
        <div className="bg-lightGrayColor flex flex-col gap-6 p-6 rounded-b-xl">
          {aboutSectionData.cards.map((card, index) => (
            <AboutCard description={card.description} title={card.title} key={`about-${card.title}-${index}`} />
          ))}
        </div>
      </div>
    </section>
  )
}
