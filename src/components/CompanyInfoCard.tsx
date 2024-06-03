interface ICompanyInfoCardProps {
  title: string
  description: string
  icon: JSX.Element
}

export function CompanyInfoCard({ title, description, icon }: ICompanyInfoCardProps) {
  return (
    <div className="w-full h-full flex flex-col items-center gap-2 px-2 py-2 md:px-3 md:py-3 lg:px-4 lg:py-4 rounded-3xl bg-whiteColor border border-mainColor text-darkTextColor text-center lg:hover:bg-[#1d444102] lg:hover:scale-105 lg:transition lg:duration-500 lg:select-none">
      <div className="flex items-center justify-center scale-75 md:scale-[0.875] lg:scale-100">{icon}</div>
      <h3 className="text-2xl lg:text-[28px] font-semibold  text-slateColor">{title}</h3>
      <p className="md:text-lg text-xl">{description}</p>
    </div>
  )
}
