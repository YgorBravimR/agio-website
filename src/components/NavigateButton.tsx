interface INavigateButtonProps {
  id: string
  title: string
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

export function NavigateButton({ id, title }: INavigateButtonProps) {
  return <button onClick={() => scrollToSection(id)}>{title}</button>
}
