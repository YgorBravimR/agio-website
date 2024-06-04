import { Button } from "./Button"
import { whatsAppRedirect } from "./sections/_index"

interface ICompanyInfoCardProps {
  title: string
  description: string
  icon: JSX.Element
  buttonText: string
  mobile?: boolean
}

export function CompanyInfoCard({ title, description, icon, mobile, buttonText }: ICompanyInfoCardProps) {
  return mobile ? (
    <div className="flex items-start justify-start px-8">
      <div className="scale-50">{icon}</div>
      <div>
        <p className="text-lg font-semibold  text-slateColor">{title}</p>
        <p className="text-sm">{description}</p>
        {buttonText && (
          <Button
            variant="ocean"
            className="rounded-lg border border-grayColor text-lightGrayColor"
            size={"sm"}
            onClick={() => whatsAppRedirect()}
          >
            {buttonText}
          </Button>
        )}
      </div>
    </div>
  ) : (
    <div className="w-full h-full flex flex-col items-center gap-2 px-2 py-2 md:px-3 md:py-3 lg:px-4 lg:py-4 rounded-3xl bg-whiteColor border border-mainColor text-darkTextColor text-center lg:hover:bg-[#1d444102] lg:hover:scale-105 lg:transition lg:duration-500 lg:select-none">
      <div className="flex items-center justify-center scale-75 md:scale-[0.875] lg:scale-100">{icon}</div>
      <p className="text-2xl lg:text-[28px] font-semibold  text-slateColor">{title}</p>
      <p className="md:text-lg text-xl">{description}</p>
    </div>
  )
}
