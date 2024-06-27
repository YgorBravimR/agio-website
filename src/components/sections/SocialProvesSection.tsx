import { socialProvesSectionData } from "@/content/manager"
import useScreenSize from "@/hooks/useScreenSize"
import Image from "next/image"
import { useMemo } from "react"
import "swiper/css"
import "swiper/css/pagination"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import { SocialProofCard } from "../SocialProofCard"

export function SocialProvesSection() {
  const screenWidth = useScreenSize()?.width
  const isMediumScreen = useMemo(() => screenWidth < 1280, [screenWidth])
  const isSmallScreen = useMemo(() => screenWidth < 768, [screenWidth])

  return (
    <section className="w-[100vw] bg-gradient-to-tl from-[#39a39b] to-leafGreenColorDark via-leafGreenColorLight md:px-8 max-w-screen-xl">
      <div className="flex items-center justify-center h-[10vh]">
        <p className="text-2xl font-bold text-lightTextColor">{socialProvesSectionData.title}</p>
      </div>
      <Swiper
        slidesPerView={isSmallScreen ? 1 : 3}
        spaceBetween={isSmallScreen ? 30 : 30}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        loop={true}
        autoplay={{
          delay: !isMediumScreen ? 7500 : 3000,
          disableOnInteraction: false,
        }}
        speed={!isMediumScreen ? 1250 : 2000}
        style={{
          "paddingRight": 50,
          "paddingLeft": 50,
          //@ts-ignore
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        modules={[Autoplay, Pagination, Navigation]}
      >
        {socialProvesSectionData.cards.map((card, i) => (
          <SwiperSlide key={i + card.company}>
            <div className="flex flex-col justify-between items-center text-center h-[70vh] md:h-[80vh] mx-8 md:mx-6 p-4 bg-[#00000020] rounded-tl-[45px]">
              <Image
                src={card.image}
                alt=""
                height={200}
                width={200}
                className="w-3/5 lg:w-full max-h-[30vh] lg:mx-[50vh] aspect-square object-cover rounded-tl-[20px]"
              />
              <p className="text-base md:text-sm lg:text-lg">{card.description}</p>
              <div className="font-semibold">
                <p>{card.company}</p>
                <p className="text-slate-300">{card.userName}</p>
              </div>
            </div>
            <div className="h-[6vh]" />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}
