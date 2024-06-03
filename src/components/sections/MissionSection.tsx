import { missionSectionData } from "@/content/manager"
import { paddingScreenSizes } from "./_index"
import { Swiper, SwiperSlide } from "swiper/react"
import { Parallax, Pagination, Navigation } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import useScreenSize from "@/hooks/useScreenSize"
import { useMemo } from "react"

export function MissionSection() {
  const screenWidth = useScreenSize()?.width
  const isMediumScreen = useMemo(() => screenWidth < 1280, [screenWidth])

  return (
    <>
      {isMediumScreen ? (
        <section id="mission" className="w-full h-[85vh]">
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
              className="absolute left-0 top-0 w-[130%] h-full bg-cover bg-center bg-[url('/buildingsPicture.jpg')] "
              data-swiper-parallax="-23%"
            />
            <SwiperSlide style={{ height: "100%" }}>
              <div className="flex flex-col gap-4 justify-between items-center py-24 text-center h-full ">
                <p className="font-bold text-3xl tracking-wider">{missionSectionData.mission.title}</p>
                <p className="text-xl tracking-wide w-[60%]">{missionSectionData.mission.description}</p>
                <div />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col gap-4 justify-between items-center py-24 text-center h-full ">
                <p className="font-bold text-3xl tracking-wider">{missionSectionData.vision.title}</p>
                <p className="text-xl tracking-wide w-[60%]">{missionSectionData.vision.description}</p>
                <div />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col gap-4 justify-between items-center py-24 text-center h-full ">
                <p className="font-bold text-3xl tracking-wider">{missionSectionData.values.title}</p>
                <p className="text-xl tracking-wide w-[60%]">{missionSectionData.values.description}</p>
                <div />
              </div>
            </SwiperSlide>
          </Swiper>
        </section>
      ) : (
        <section
          id="mission"
          className={`w-full flex items-center flex-col justify-center gap-8  lg:text-5xl bg-custom-gradient ${paddingScreenSizes}`}
        >
          <div className="p-4 md:w-[70%] md:self-start">
            <p className="font-bold text-4xl mb-2 text-leafGreenColor">{missionSectionData.mission.title}</p>
            <p className="text-3xl text-justify">{missionSectionData.mission.description}</p>
          </div>
          <div className="p-4 md:w-[70%] md:self-center">
            <p className="font-bold text-4xl mb-2 text-leafGreenColor">{missionSectionData.vision.title}</p>
            <p className="text-3xl text-justify">{missionSectionData.vision.description}</p>
          </div>
          <div className="p-4 md:w-[70%] md:self-end">
            <p className="font-bold text-4xl mb-2 text-leafGreenColor">{missionSectionData.values.title}</p>
            <p className="text-3xl text-justify">{missionSectionData.values.description}</p>
          </div>
        </section>
      )}
    </>
  )
}
