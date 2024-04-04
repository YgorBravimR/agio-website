interface ICompanyInfoCardProps {
  title: string
  description: string
  icon: JSX.Element
}

export function CompanyInfoCard({
  title,
  description,
  icon,
}: ICompanyInfoCardProps) {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-2 px-6 py-4 rounded-3xl bg-whiteColor border-2 border-mainColor text-darkTextColor text-center">
      <div className="flex items-center h-28 w-28 justify-center bg-secondaryColor bg-opacity-50 border border-mainColor rounded-full">
        {icon}
      </div>
      <h3 className="text-3xl font-semibold truncate">{title}</h3>
      <p className="text-xl">{description}</p>
    </div>
  )
}
