'use client'
import Link from "next/link";

interface IGetInTouchButtonProps {
  href: string;
}

export function GetInTouchButton({ href }: IGetInTouchButtonProps) {
  return (
    <Link href={href}>
      <button className="text-whiteColor dark:text-whiteColor border-blackColor dark:border-whiteColor bg-mainColor hover:mainColorHover font-bold py-2 px-4 rounded-sm border">
        Get in touch
      </button>
    </Link>
  )
}
