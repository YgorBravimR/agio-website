interface ICompanyInfoCardProps {
  title: string
  description: string
  icon: JSX.Element
}

export function CompanyInfoCard({ title, description, icon }: ICompanyInfoCardProps) {
  return (
    <div className="w-full h-full flex flex-col items-center gap-2 px-4 py-4 rounded-3xl bg-whiteColor border border-mainColor text-darkTextColor text-center hover:bg-[#1d444102] hover:scale-105 transition duration-500 select-none">
      <div className="flex items-center h-28 w-28 justify-center">{icon}</div>
      <h3 className="text-[28px] font-semibold  text-slateColor">{title}</h3>
      <p className="text-xl">{description}</p>
    </div>
  )
}
