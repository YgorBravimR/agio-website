"use client"
import { LocationIcon } from "@/assets/icons/location"
import { MailIcon } from "@/assets/icons/mail"
import { headerSectionData, navbarItems } from "@/content/manager"
import { HamburgerMenuIcon } from "@radix-ui/react-icons"
import { useState } from "react"
import { NavigateButton } from "./NavigateButton"
import { AgioLogo } from "./ui/AgioLogo"

export function Header() {
  const [isNavbarOpen, setIsNavbarOpen] = useState<boolean>(false)

  return (
    <>
      <header className="flex flex-row md:flex-col lg:flex-row md:items-center lg:items-end sm:justify-between md:justify-start gap-4 bg-mainBgColor text-darkTextColor text-xl px-8 lg:px-40 py-4 relative">
        <div className="md:flex md:gap-8">
          <AgioLogo
            props={{ width: headerSectionData.logo.width }}
            mainColor={headerSectionData.logo.mainColor}
            detailColor={headerSectionData.logo.detailColor}
          />
          <div className="sm:hidden md:flex md:flex-col lg:flex-row lg:absolute md:items-start lg:items-center md:justify-center lg:justify-between md:gap-2 lg:gap-8 bg-mainColor text-lightTextColor text-sm top-4 right-40 px-8 py-2 rounded-tr-2xl rounded-bl-2xl">
            <div className="flex gap-2 items-center">
              <LocationIcon width={24} height={24} fill="#009db6" />
              <span>{headerSectionData.address}</span>
            </div>
            <div className="flex gap-2 items-center">
              <MailIcon width={24} height={24} fill="#009db6" />
              <span>{headerSectionData.mail}</span>
            </div>
          </div>
        </div>
        <nav className="hidden md:flex flex-col md:flex-row gap-6 truncate text-mainText uppercase font-bold">
          {navbarItems.map((item, i) => (
            <NavigateButton key={item.title + i} id={item.goingToUrl} title={item.title} />
          ))}
        </nav>
        <button onClick={() => setIsNavbarOpen(!isNavbarOpen)} className="radius-full p-2 md:hidden">
          <HamburgerMenuIcon height={30} width={30} />
        </button>
      </header>
      <nav
        className={`flex flex-col items-center w-full md:hidden transition-all duration-300 ease-in-out overflow-hidden ${isNavbarOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"}`}
      >
        {navbarItems.map((item, i) => (
          <NavigateButton
            key={item.title + i}
            id={item.goingToUrl}
            title={item.title}
            mobile
            customOnClick={() => setIsNavbarOpen(false)}
          />
        ))}
      </nav>
    </>
  )
}
