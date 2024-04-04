import Link from "next/link";

interface IMobileNavigateButtonProps {
  href: string;
  title: string
}

export function MobileNavigateButton({ href, title }: IMobileNavigateButtonProps) {
  return (
    <Link href={href} className="w-full py-2 text-center" >
      {title}
    </Link>
  )
}
