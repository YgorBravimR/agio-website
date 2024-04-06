import { useMemo } from "react"

interface Props {
  href: string
  src: string
  alt: string
  className?: string
}

export function IconButton({ href, src, alt, className }: Props) {
  const defaultClassName = useMemo(() => "w-10 h-10", [])

  return (
    <a href={href}>
      <img src={src} alt={alt} className={className || defaultClassName} />
    </a>
  )
}
