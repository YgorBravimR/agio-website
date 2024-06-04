"use client"
import Image from "next/image"
import { NavigateButton } from "./NavigateButton"
import { IconButton } from "./IconButton"
import { footerSectionData, navbarItems } from "@/content/manager"

export function Footer() {
  return (
    <footer className="flex flex-col items-center gap-4 bg-mainColor text-whiteColor px-12 py-6 border-t-[12px] border-t-secondaryColor">
      <div className="flex flex-col md:flex-row gap-4 md:gap-16 items-center justify-center">
        <div className="flex flex-col gap-2 text-center items-center justify-center text-2xl">
          <Image src="./agioLogo.svg" alt="" width={200} height={100} className="w-[160px] h-[80p] md:w-[200px] md:h-[100p]" />
          <span className="text-lg lg:text-3xl text-center">Horário de funcionamento</span>
          <span className="text-base lg:text-2xl">{footerSectionData.workingTimeText}</span>
        </div>
        <div className="hidden md:flex flex-col gap-1 text-center">
          {navbarItems.map((item, i) => (
            <span className="text-xl" key={item.goingToUrl + i}>
              <NavigateButton title={item.title} id={item.goingToUrl} />
            </span>
          ))}
        </div>
      </div>
      <div className="hidden md:block h-[2px] w-3/4 md:w-4/5 bg-oceanBlueColor  max-w-body" />
      <div className="flex gap-4 items-center justify-center md:justify-end w-3/4 md:w-4/5 max-w-body">
        {footerSectionData.icons.map((item, i) => (
          <IconButton key={i + item.goingToUrl} href={item.goingToUrl} src={item.sourceUrl} alt={item.alternativeText} link />
        ))}
      </div>
    </footer>
  )
}
