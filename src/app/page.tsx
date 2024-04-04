import { AcountingIcon, BankIcon, DolarPaperIcon, MoneyEngineIcon } from "@/assets"
import { CompanyInfoCard } from "@/components/CompanyInfoCard"
import { ContactForm } from "@/components/ContactForm"
import { Footer } from "@/components/Footer"
import { Header } from "@/components/Header"
import { SocialProveCard } from "@/components/SocialProveCard"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between w-full text-xl bg-mainBgColor">
        <section
          id="home"
          className="w-full h-full flex flex-col px-xScreen py-yScreen items-center justify-center gap-8 bg-[url('/signingPicture.jpg')] bg-cover bg-center bg-no-repeat"
        >
          <h2 className="text-center text-lightTextColor text-5xl">Sua contabilidade com maior eficiência, praticidade e qualidade!</h2>
          <p className="text-center text-detailTextColor text-3xl mx-20">
            Simplificamos e desburocratizamos os seus processos para você focar 100% no seu negócio.
          </p>
          <div className="flex flex-row w-full gap-8 items-center justify-center">
            <Button className="uppercase w-[312px]" variant={"sky"}>
              abrir cnpj
            </Button>
            <Button className="uppercase w-[312px]" variant={"sky"}>
              trocar de contador
            </Button>
          </div>
        </section>
        <section id="#our-services" className="w-full h-full grid grid-cols-2 px-xScreen py-yScreen items-center justify-center gap-8">
          <CompanyInfoCard
            icon={<BankIcon width={72} height={72} fill="#1d4441" />}
            title="Abertura de empresa"
            description="Um texto aqui representando o que diz no titulo do card. Lorem ipsunat tecum dominus"
          />
          <CompanyInfoCard
            icon={<MoneyEngineIcon width={72} height={72} fill="#1d4441" />}
            title="Regularização de débitos"
            description="Um texto aqui representando o que diz no titulo do card. Lorem ipsunat tecum dominus"
          />
          <CompanyInfoCard
            icon={<DolarPaperIcon width={72} height={72} fill="#1d4441" />}
            title="Contabilidade completa"
            description="Um texto aqui representando o que diz no titulo do card. Lorem ipsunat tecum dominus"
          />
          <CompanyInfoCard
            icon={<AcountingIcon width={72} height={72} fill="#1d4441" />}
            title="Perícias e cálculos judiciais"
            description="Um texto aqui representando o que diz no titulo do card. Lorem ipsunat tecum dominus"
          />
        </section>
        <section className="w-full h-full flex flex-col px-xScreen py-yScreen items-center justify-center gap-8 bg-gradient-to-tr from-mainColor to-[#39a39b]">
          <p className="text-center text-lightTextColor text-4xl">
            DA ABERTURA DO SEU CNPJ ATÉ A GESTÃO CONTÁBIL E FINANCEIRA DO SEU NEGÓCIO.
          </p>
          <p className="text-center text-lightTextColor text-xl mx-20">
            Temos diversos planos personalizados para a necessidade da sua empresa... Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Nulla rhoncus iaculis mollis. Fusce egestas tincidunt mi vitae tempus. Fusce aliqu et luctus leo, imperdiet eleifend ex
            dapibus et. Sed lorem nibh, dignissim vel eleifend feugiat, cursus vel dui. Integer eu nisl eleifend, auctor dolor non,
            tincidunt felis. Quisque lobortis sollic itudin enim, vitae iaculis elit dignissim id. Proin a lorem ligula. Vestibulum
            tincidunt justo q
          </p>
          <Button variant="lime" className="px-8 uppercase">
            Escolha seu plano
          </Button>
        </section>
        <section className="w-full grid grid-cols-4 px-xScreen py-yScreen items-center justify-center gap-8">
          <SocialProveCard
            description="Texto de prova social Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Nulla rhoncus iacu mollis. egestas tincidunt mi vitae tempus.
            Fusce aliquet leo, imperdiet eleifend ex dapibus et. Sed lorem nibh, cus
            iacu mollis. awdssaccad egestas doiu lor tincidunt mi vitae tempus. Fusc"
            company="Fulana de tal"
            image="https://source.unsplash.com/random"
            userName="Empresa da Silva Sauro ME"
          />
          <SocialProveCard
            description="Texto de prova social Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Nulla rhoncus iacu mollis. egnd ex dapibus et. Sed lorem nibh, cus
            iacu mollis. awdssaccad egestas doiu lor tincidunt mi vitae tempus. Fusc"
            company="Fulana de tal"
            image="https://source.unsplash.com/random"
            userName="Empresa da Silva Sauro ME"
          />
          <SocialProveCard
            description="Texto de prova social Loreor sit amet
            Fusce aliquet leo, imperdiet eleibus et. Sed bh, cus
            iacu mollis. awdssaccad egestas doiu i vitae tempusc"
            company="Fulana de tal"
            image="https://source.unsplash.com/random"
            userName="Empresa da Silva Sauro ME"
          />
          <SocialProveCard
            description="Texto de prova social Loreor sit amet
            Fusce aliquet leo, imperdiet eleibus et. Sed bh, cus
            iacu mollis. awdssaccad egestas doiu i vitae tempusc"
            company="Fulana de tal"
            image="https://source.unsplash.com/random"
            userName="Empresa da Silva Sauro ME"
          />
        </section>
        <section className="w-full h-full grid grid-cols-2 px-xScreen py-yScreen items-center justify-center gap-8 bg-[url('/buildingsPicture.jpg')] bg-cover bg-center bg-no-repeat">
          <ContactForm />
          <div className="h-full flex flex-col gap-4 items-center justify-center">
            <Image src="./agioLogo.svg" alt="" width={200} height={100} />
            <div className="w-full h-full bg-lightGrayColor bg-[url('/mapsImage.png')] bg-cover bg-center bg-no-repeat" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
