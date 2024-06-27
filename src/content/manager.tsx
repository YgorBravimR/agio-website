import {
  AcountingIcon,
  BankIcon,
  DolarPaperIcon,
  LocationIcon,
  MailIcon,
  MoneyEngineIcon,
  MoneyManagementIcon,
  SmartphoneIcon,
  UserIcon,
} from "@/assets"
import instagramImg from "@/assets/images/instagram.png"
import linkedinImg from "@/assets/images/linkedin.png"
import youtubeImg from "@/assets/images/youtube.png"
import { formatPhoneNumber } from "@/lib/utils"

export const whatsAppNumber = "27999041303"
export const agioEmail = "ygorbravimr@gmail.com"

export const navbarItems = [
  {
    title: "Início",
    goingToUrl: "home",
  },
  {
    title: "Nossa atuação",
    goingToUrl: "services",
  },
  {
    title: "Quem somos",
    goingToUrl: "about",
  },
  {
    title: "Nossa missão",
    goingToUrl: "mission",
  },
  {
    title: "Fale conosco",
    goingToUrl: "contact",
  },
]

export const headerSectionData = {
  logo: {
    width: 200,
    mainColor: "#1d4441",
    detailColor: "#009db6",
  },
  address: "Rua Getúlio Vargas, 223 - Glória",
  mail: "contato@agiocontabilidade.com.br",
}

export const homeSectionData = {
  title: "Sua contabilidade com maior eficiência, praticidade e qualidade!",
  subtitle: "Simplificamos e desburocratizamos os seus processos para você focar 100% no seu negócio.",
  buttonOneText: "Abrir CNPJ",
  buttonTwoText: "Trocar de contador",
}

export const companyInfoData = [
  {
    title: "Abertura de empresa",
    description:
      "Abrir uma empresa pode ser um desafio, mas estamos aqui para simplificar o processo! Nossa equipe de especialistas em contabilidade cuidará de toda a burocracia, garantindo uma abertura rápida e sem complicações. Fale conosco e dê o primeiro passo rumo ao sucesso!",
    icon: <BankIcon width={72} height={72} fill="#1d4441" />,
    buttonText: "Saiba mais",
  },
  {
    title: "Regularização de débitos",
    description:
      "Regularize seus débitos com a ajuda de nossos especialistas em contabilidade. Analisamos suas pendências e traçamos a melhor estratégia para quitar suas dívidas, garantindo sua tranquilidade financeira. Entre em contato e recupere o controle do seu negócio!",
    icon: <MoneyEngineIcon width={72} height={72} fill="#1d4441" />,
    buttonText: "Saiba mais",
  },
  {
    title: "Contabilidade completa",
    description:
      "Deixe a contabilidade da sua empresa em mãos de especialistas. Oferecemos serviços completos, desde a gestão financeira até o planejamento tributário, para garantir a saúde do seu negócio. Fale conosco e veja como podemos ajudar a sua empresa a crescer com segurança!",
    icon: <DolarPaperIcon width={72} height={72} fill="#1d4441" />,
    buttonText: "Saiba mais",
  },
  {
    title: "Perícias e cálculos judiciais",
    description:
      "Precisando de perícias e cálculos judiciais? Nossa equipe especializada oferece soluções precisas e confiáveis para auxiliar em processos judiciais e administrativos. Conte conosco para garantir a exatidão e a credibilidade necessárias. Entre em contato hoje mesmo!",
    icon: <AcountingIcon width={72} height={72} fill="#1d4441" />,
    buttonText: "Saiba mais",
  },
  {
    title: "Gestão financeira e processos",
    description:
      "Transforme a gestão financeira e de processos da sua empresa com nossos serviços especializados. Otimizamos recursos, melhoramos a eficiência e impulsionamos seu crescimento. Deixe que nossos profissionais cuidem das finanças e processos, enquanto você foca no seu negócio!",
    icon: <UserIcon width={72} height={72} fill="#1d4441" />,
    buttonText: "Saiba mais",
  },
  {
    title: "Atendimento à pessoas físicas",
    description:
      "Precisando de ajuda com sua contabilidade pessoal? Oferecemos atendimento especializado para pessoas físicas, incluindo declaração de imposto de renda, planejamento financeiro e regularização de débitos. Conte com a nossa expertise para manter suas finanças em dia!",
    icon: <MoneyManagementIcon width={72} height={72} fill="#1d4441" />,
    buttonText: "Saiba mais",
  },
]

export const aboutSectionData = {
  image: {
    sourceUrl: "/image2.png",
    alternativeText: "Woman posing on a suit.",
    height: 400,
    width: 400,
  },
  title: "Porque nos contratar?",
  cards: [
    {
      title: "Atendimento humanizado",
      description:
        "Contamos com um time preparado para solucionar e entender as suas demandas com atendimento totalmente humanizado, rápido e objetivo.",
    },
    {
      title: "Atuação Nacional",
      description:
        "Atendemos empresas em todo o Brasil, nos maisdiversos segmentos de atividade observando ascaracterísticas da sua região.",
    },
    {
      title: "Experiência Comprovada",
      description:
        "Atuamos no ramo do serviço, comércio e indústria e já emitimos mais de MIL laudos para empresas das mais diversas áreas de atuação",
    },
  ],
}

export const socialProvesSectionData = {
  title: "O que nossos clientes dizem",
  cards: [
    {
      description:
        "Eu contratei a Àgio em um momento que eu tinha acabado de ser enganada por um contador que em vez de pagar os impostos, ficava com o dinheiro. Então o que tenho a dizer é que a seriedade e profissionalismo da Àgio resolveu tudo que eu precisava e hoje tenho confiança no meu contador.",
      company: "Liliam Lima",
      image: "/liliamLima.jpg",
      userName: "LILIAM LIMA ME - Empresa de TI",
    },
    {
      description:
        "Tive contato com algumas empresas de contabilidade e até hoje a que conseguiu atender a minha demanda de forma eficiente foi a Àgio Contabilidade. Muito obrigado a todos os envolvidos pelo íncrível suporte sempre prestado.",
      company: "Denílton Andrada",
      image: "/deniltonAndrade.jpg",
      userName: "DENILTON ANDRADE LTDA - Empresa de TI",
    },
    {
      description: "Excelente serviço de contabilidade, rápida resolução e atendimento.",
      company: "Samanta Caroline",
      image: "/fisioterapia.webp",
      userName: "Fisioterapeuta",
    },
  ],
}

export const contactSectionData = {
  image: {
    sourceUrl: "/agioLogo.svg",
    alternativeText: "Company's logo",
  },
  companyInfo: [
    {
      icon: <LocationIcon width={32} height={32} fill="#009db6" />,
      description: "Rua Getúlio Vargas, 223 - Glória",
    },
    {
      icon: <MailIcon width={32} height={32} fill="#009db6" />,
      description: "contato@agiocontabilidade.com.br",
    },
    {
      icon: <SmartphoneIcon width={32} height={32} fill="#009db6" />,
      description: formatPhoneNumber(whatsAppNumber),
    },
  ],
}

export const footerSectionData = {
  workingTimeText: "Seg a Sex: 08:00 às 18:00",
  icons: [
    {
      goingToUrl: "https://www.instagram.com/contabilidadeagio/",
      sourceUrl: instagramImg,
      alternativeText: "Instagram",
    },
    {
      goingToUrl: "https://www.linkedin.com/company/%C3%A1gio-contabilidade-e-per%C3%ADcia/",
      sourceUrl: linkedinImg,
      alternativeText: "Linkedin",
    },
    {
      goingToUrl: "https://www.youtube.com/@agiocontabilidade",
      sourceUrl: youtubeImg,
      alternativeText: "Youtube",
    },
  ],
}

export const missionSectionData = {
  mission: {
    title: "Missão",
    description:
      "Ajudar os empreendedores a compreenderem o seu negócio, auxiliando na tomada de decisões com proximidade, praticidade e eficiência, para pequenas, médias e grandes empresas.",
  },
  vision: {
    title: "Visão",
    description:
      "Ser referência no mercado de contabilidade e perícia capixaba, buscando melhoria contínua com o apoio de novas tecnologias.",
  },
  values: {
    title: "Valores",
    description: "Transparência, respeito e atendimento humanizado, são os valores que nós prezamos.",
  },
}
