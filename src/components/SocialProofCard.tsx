import Image from "next/image"

interface Props {
  description: string
  company: string
  image: string
  userName: string
}

export function SocialProofCard({ description, company, image, userName }: Props) {
  return (
    <div className="px-2 py-2 w-full h-full flex flex-col justify-between items-center bg-[#00000020] border border-mainColor rounded-2xl text-center text-lightTextColor hover:rounded-tl-[160px] transition-all duration-1000">
      <Image src={image} alt="" height={300} width={300} className="w-full aspect-square object-cover rounded-tl-[160px]" />
      <p className="p-2 text-base">{description}</p>
      <div className="p-2 font-semibold">
        <p>{company}</p>
        <p className="text-slate-300">{userName}</p>
      </div>
    </div>
  )
}
