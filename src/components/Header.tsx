"use client"
import { navbarItems } from "@/utils/InformationData"
import { NavigateButton } from "./NavigateButton"
import { useState } from "react"
// import { MenuIcon } from "@/assets/icons/icons"
import { useTheme } from "next-themes"
import { MobileNavigateButton } from "./mobile/MobileNavigateButton"
import Image from "next/image"

export function Header() {
  const [isNavbarOpen, setIsNavbarOpen] = useState<boolean>(false)
  const { resolvedTheme } = useTheme()
  return (
    <>
      <header className="flex items-center justify-between bg-mainColor text-lightTextColor text-xl px-12 py-2 ">
        <div className="h-full w-full">
          <Image
            src={"/agioLogo.svg"}
            alt="Logo da empresa"
            width={182}
            height={40}
          />
        </div>
        <div className="flex gap-6">
          <nav className="hidden md:flex md:gap-6 md: items-center truncate text-mainText uppercase">
            {navbarItems.map((item, i) => (
              <NavigateButton
                key={item.title + i}
                href={item.href}
                title={item.title}
              />
            ))}
          </nav>
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
        </div>
      </header>
      {isNavbarOpen && (
        <nav className="flex flex-col items-center w-full border border-blackColor dark:border-whiteColor md:hidden">
          {navbarItems.map((item, i) => (
            <MobileNavigateButton
              key={item.title + i}
              href={item.href}
              title={item.title}
            />
          ))}
        </nav>
      )}
    </>
  )
}
