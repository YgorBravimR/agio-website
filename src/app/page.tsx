import { Footer } from "@/components/Footer"
import { Header } from "@/components/Header"

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between px-24 py-12 w-full gap-24 text-xl text-blackColor dark:text-whiteColor">
        <section
          id="home"
          className="w-full flex flex-col md:flex-row  items-center justify-center gap-6"
        ></section>
      </main>
      <Footer />
    </>
  )
}
