import Image from "next/image"

interface Props {
  description: string
  company: string
  image: string
  userName: string
}

export function SocialProveCard({ description, company, image, userName }: Props) {
  return (
    <div className="w-full h-full flex flex-col justify-between items-center bg-[#a9e1dc] border border-mainColor rounded-2xl text-center">
      <Image src={image} alt="" height={400} width={200} className="w-full aspect-square object-cover rounded-t-2xl" />
      <p className="p-2">{description}</p>
      <div className="p-2 font-semibold truncate">
        <p>{company}</p>
        <p>{userName}</p>
      </div>
    </div>
  )
}
