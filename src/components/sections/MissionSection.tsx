import { missionSectionData } from "@/content/manager"
import useScreenSize from "@/hooks/useScreenSize"
import { useMemo } from "react"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import { Navigation, Pagination, Parallax } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import { paddingScreenSizes } from "./_index"

export function MissionSection() {
  const screenWidth = useScreenSize()?.width
  const isMediumScreen = useMemo(() => screenWidth < 1280, [screenWidth])

  return (
    <>
      {isMediumScreen ? (
        <section id="mission" className="w-full h-[85vh] max-w-screen-xl">
          <Swiper
            style={{
              "height": "100%",
              //@ts-ignore
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "#fff",
            }}
            speed={600}
            parallax={true}
            navigation={true}
            modules={[Parallax, Pagination, Navigation]}
          >
            <div
              slot="container-start"
              className="absolute left-0 top-0 w-[130%] h-full bg-cover bg-center bg-[url('/buildingsPicture.jpg')]"
              data-swiper-parallax="-23%"
            />
            <SwiperSlide style={{ height: "100%" }}>
              <div className="flex flex-col gap-4 justify-between items-center py-24 text-center h-full ">
                <p className="font-bold text-3xl tracking-wider text-skyBlueColor">{missionSectionData.mission.title}</p>
                <p className="text-xl tracking-wide w-[60%] text-lightGrayColor">{missionSectionData.mission.description}</p>
                <div />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col gap-4 justify-between items-center py-24 text-center h-full ">
                <p className="font-bold text-3xl tracking-wider text-skyBlueColor">{missionSectionData.vision.title}</p>
                <p className="text-xl tracking-wide w-[60%] text-lightGrayColor">{missionSectionData.vision.description}</p>
                <div />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col gap-4 justify-between items-center py-24 text-center h-full ">
                <p className="font-bold text-3xl tracking-wider text-skyBlueColor">{missionSectionData.values.title}</p>
                <p className="text-xl tracking-wide w-[60%] text-lightGrayColor">{missionSectionData.values.description}</p>
                <div />
              </div>
            </SwiperSlide>
          </Swiper>
        </section>
      ) : (
        <section
          id="mission"
          className={`w-full flex items-center flex-col justify-center gap-8 lg:text-5xl bg-cover bg-center bg-[url('/buildingsPicture.jpg')] ${paddingScreenSizes} max-w-screen-xl`}
        >
          <div className="p-4 md:w-[70%] md:self-start bg-[#00000020] rounded-2xl">
            <p className="font-bold text-4xl mb-2 text-skyBlueColor">{missionSectionData.mission.title}</p>
            <p className="text-3xl text-justify text-lightGrayColor">{missionSectionData.mission.description}</p>
          </div>
          <div className="p-4 md:w-[70%] md:self-center bg-[#00000020] rounded-2xl">
            <p className="font-bold text-4xl mb-2 text-skyBlueColor">{missionSectionData.vision.title}</p>
            <p className="text-3xl text-justify text-lightGrayColor">{missionSectionData.vision.description}</p>
          </div>
          <div className="p-4 md:w-[70%] md:self-end bg-[#00000020] rounded-2xl">
            <p className="font-bold text-4xl mb-2 text-skyBlueColor">{missionSectionData.values.title}</p>
            <p className="text-3xl text-justify text-lightGrayColor">{missionSectionData.values.description}</p>
          </div>
        </section>
      )}
    </>
  )
}
