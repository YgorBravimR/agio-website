"use client"

import Link from "next/link"

interface INavigateButtonProps {
  id: string
  title: string
  mobile?: boolean
  customOnClick?: () => void
}

const scrollToSection = (id: string) => {
  const element = document.getElementById(id)

  if (element) {
    const topPos = element.getBoundingClientRect().top + window.pageYOffset
    const offset = topPos - (window.innerHeight / 2 - element.clientHeight / 2)

    window.scrollTo({
      top: offset,
      behavior: "smooth",
    })
  }
}

export function NavigateButton({ id, title, mobile, customOnClick }: INavigateButtonProps) {
  return (
    <button
      className={mobile ? "w-full py-2 text-center text-xl bg-leafGreenColorLight text-whiteColor font-semibold tracking-wider" : ""}
      onClick={() => {
        !mobile && scrollToSection(id)
        customOnClick && customOnClick()
      }}
    >
      {mobile ? <Link href={"#" + id}>{title}</Link> : title}
    </button>
  )
}
