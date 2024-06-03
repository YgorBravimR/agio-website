import { useMemo } from "react"

interface Props {
  href: string
  src: string
  alt: string
  className?: string
  link?: boolean
}

export function IconButton({ href, src, alt, className, link }: Props) {
  const defaultClassName = useMemo(() => "w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10", [])

  return (
    <a href={href} target={link ? "_blank" : undefined}>
      <img src={src} alt={alt} className={className || defaultClassName} />
    </a>
  )
}
