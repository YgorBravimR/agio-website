"use client"
// import { useState } from "react"
import { NavigateButton } from "./NavigateButton"
// import { MenuIcon } from "@/assets/icons/icons"
import { LocationIcon } from "@/assets/icons/location"
import { MailIcon } from "@/assets/icons/mail"
import { headerSectionData, navbarItems } from "@/content/manager"
// import { useTheme } from "next-themes"
import { AgioLogo } from "./ui/AgioLogo"

export function Header() {
  // const [isNavbarOpen, setIsNavbarOpen] = useState<boolean>(false)
  // const { resolvedTheme } = useTheme()

  return (
    <>
      <header className="flex items-end justify-start gap-4 bg-mainBgColor text-darkTextColor text-xl px-40 py-4 relative">
        <AgioLogo
          props={{ width: headerSectionData.logo.width }}
          mainColor={headerSectionData.logo.mainColor}
          detailColor={headerSectionData.logo.detailColor}
        />
        <nav className="flex gap-6 truncate text-mainText uppercase font-bold">
          {navbarItems.map((item, i) => (
            <NavigateButton key={item.title + i} id={item.goingToUrl} title={item.title} />
          ))}
        </nav>
        <div className="absolute flex items-center gap-2 bg-mainColor text-lightTextColor text-sm top-4 right-40 px-8 py-2 rounded-tr-2xl rounded-bl-2xl">
          <LocationIcon width={24} height={24} fill="#009db6" />
          <span>{headerSectionData.address}</span>
          <span className="p-2">|</span>
          <MailIcon width={24} height={24} fill="#009db6" />
          <span>{headerSectionData.mail}</span>
        </div>
        {/* <button
            onClick={() => setIsNavbarOpen(!isNavbarOpen)}
            className="radius-full p-2"
          >
            <MenuIcon
              className="md:hidden"
              height={22}
              width={22}
              fill={resolvedTheme === "light" ? "#FAFAFA" : "#1e1e1e"}
            />
          </button> */}
      </header>
      {/* {isNavbarOpen && (
        <nav className="flex flex-col items-center w-full border border-blackColor dark:border-whiteColor md:hidden">
          {navbarItems.map((item, i) => (
            <MobileNavigateButton key={item.title + i} href={item.href} title={item.title} />
          ))}
        </nav>
      )} */}
    </>
  )
}
