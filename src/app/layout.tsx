import type { Metadata } from "next"
import { Work_Sans } from "next/font/google"
import "../styles/globals.css"
import { Providers } from "./providers"

const workSans = Work_Sans({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Ágio | Contabilidade e Perícia",
  description: "Ágio | Contabilidade e Perícia",
  // openGraph: {
  //   title: 'Ágio | Contabilidade e Perícia',
  //   description: 'Sua contabilidade com maior eficiência, praticidade e qualidade!',
  //   images: [
  //     {
  //       url: 'logoAGIO.png',
  //       alt: 'Logo da empresa, escrita dizendo ágio contabilidade e perícia',
  //     },
  //   ],
  // },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <Providers>
          <body className={workSans.className} style={{ position: "relative" }}>
            {children}
          </body>
        </Providers>
      </html>
    </>
  )
}
