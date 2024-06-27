import { StaticImport } from "next/dist/shared/lib/get-img-props"
import Image from "next/image"
import { useMemo } from "react"

interface Props {
  href: string
  src: string | StaticImport
  alt: string
  className?: string
  link?: boolean
}

export function IconButton({ href, src, alt, className, link }: Props) {
  const defaultClassName = useMemo(() => "w-7 h-7 md:w-9 md:h-9 lg:w-10 lg:h-10", [])

  return (
    <a href={href} target={link ? "_blank" : undefined}>
      <Image width={120} height={120} src={src} alt={alt} className={className || defaultClassName} />
    </a>
  )
}
