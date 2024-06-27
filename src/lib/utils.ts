import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatPhoneNumber(number: string) {
  let formattedNumber = `(${number.slice(0, 2)}) ${number.slice(2, 7)}-${number.slice(7, 11)}`

  return formattedNumber
}
