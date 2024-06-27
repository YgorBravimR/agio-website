import { Button } from "./Button"

interface Props {
  title: string
  description: string
  buttonText?: string
}

export function AboutCard({ title, description, buttonText = "Fale conosco" }: Props) {
  return (
    <div className="w-full bg-white p-6 grid grid-cols-1 md:grid-cols-6 text-center justify-center items-center border-2 border-leafGreenColor gap-6">
      <div className="bg-limeColor text-leafGreenColor uppercase whitespace-break-spaces font-bold px-4 py-2 rounded-sm lg:hover:scale-105 lg:transition lg:duration-500 lg:select-none md:col-span-2">
        <p>{title}</p>
      </div>
      <div className="md:col-span-4">
        <p>{description}</p>
      </div>
      <div className="w-full md:hidden">
        <Button variant="default" className="w-fit">
          {buttonText}
        </Button>
      </div>
    </div>
  )
}
