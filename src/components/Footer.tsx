import { navbarItems } from "@/utils/InformationData"
import Image from "next/image"
import { NavigateButton } from "./NavigateButton"
import { IconButton } from "./IconButton"

export function Footer() {
  return (
    <footer className="flex flex-col items-center gap-4 bg-mainColor text-whiteColor px-12 py-6 border-t-[12px] border-t-secondaryColor">
      <div className="flex gap-16 items-center justify-center">
        <div className="flex flex-col gap-2 text-center items-center justify-center text-2xl">
          <Image src="./agioLogo.svg" alt="" width={200} height={100} />
          <span className="text-center md:text-left">Hoário de funcionamento</span>
          <span>Seg a Sex: 08:00 às 18:00</span>
        </div>
        <div className="flex flex-col gap-1 text-center">
          <span className="text-3xl">Navegação</span>
          {navbarItems.map((item, i) => (
            <span className="text-xl" key={item.href + i}>
              <NavigateButton title={item.title} href={item.href} />
            </span>
          ))}
        </div>
      </div>
      <div className="h-[2px] w-4/5 bg-oceanBlueColor" />
      <div className="flex gap-4 items-center justify-end w-[85%]">
        <IconButton href="" src="./instagram.png" alt="Instagram" />
        <IconButton href="" src="./linkedin.png" alt="Linkedin" />
        <IconButton href="" src="./whatsApp.png" alt="WhatsApp" className="w-20 h-20 ml-8" />
      </div>
    </footer>
  )
}
