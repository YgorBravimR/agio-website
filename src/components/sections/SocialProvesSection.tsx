import { socialProvesSectionData } from "@/content/manager"
import useScreenSize from "@/hooks/useScreenSize"
import Image from "next/image"
import { useMemo } from "react"
import "swiper/css"
import "swiper/css/pagination"
import { Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import { SocialProofCard } from "../SocialProofCard"

export function SocialProvesSection() {
  const screenWidth = useScreenSize()?.width
  const isMediumScreen = useMemo(() => screenWidth < 1280, [screenWidth])
  const isSmallScreen = useMemo(() => screenWidth < 768, [screenWidth])

  return isMediumScreen ? (
    <section className="w-[100vw] bg-leafGreenColor">
      <div className="flex items-center justify-center h-[10vh]">
        <p className="text-2xl font-bold text-lightTextColor">{socialProvesSectionData.title}</p>
      </div>
      <Swiper
        slidesPerView={isSmallScreen ? 1 : 2}
        spaceBetween={isSmallScreen ? 30 : 10}
        pagination={{
          clickable: true,
        }}
        loop={true}
        style={{
          "backgroundColor": "#1d4441", //@ts-ignore
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        modules={[Pagination, Navigation]}
      >
        {socialProvesSectionData.cards.map((card, i) => (
          <SwiperSlide key={i + card.company}>
            <div className="flex flex-col justify-between items-center text-center h-[82vh] mx-8 p-4 bg-[#00000020] rounded-tl-[45px]">
              <Image src={card.image} alt="" height={200} width={200} className="w-3/5 aspect-square object-cover rounded-tl-[20px]" />
              <p className="text-base">{card.description}</p>
              <div className="font-semibold">
                <p>{card.company}</p>
                <p className="text-slate-300">{card.userName}</p>
              </div>
            </div>
            <div className="h-[8vh]" />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  ) : (
    <section id="social-proves" className="w-full flex flex-col gap-8 p-2 py-yScreen bg-mainColor items-center justify-center">
      <p className="text-4xl font-bold text-lightTextColor">{socialProvesSectionData.title}</p>
      <div className="grid grid-cols-3 gap-8 w-2/3">
        {socialProvesSectionData.cards.map((card, i) => (
          <SocialProofCard
            company={card.company}
            key={i + card.company}
            description={card.description}
            image={card.image}
            userName={card.userName}
          />
        ))}
      </div>
    </section>
  )
}
