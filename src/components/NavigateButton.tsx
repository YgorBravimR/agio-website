import Link from "next/link";

interface INavigateButtonProps {
  href: string;
  title: string
}

export function NavigateButton({ href, title }: INavigateButtonProps) {
  return (
    <Link href={href}>
      {title}
    </Link>
  )
}
