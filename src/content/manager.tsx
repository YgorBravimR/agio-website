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
  title: "Da abertura do seu CNPJ até a gestão contábil e financeira do seu negócio.",
  buttonText: "Fale conosco",
  description:
    "Temos diversos planos personalizados para a necessidade da sua empresa... Lorem ipsum dolor sit amet, consectetur adipiscingelit. Nulla rhoncus iaculis mollis. Fusce egestas tincidunt mi vitae tempus. Fusce aliqu et luctus leo, imperdiet eleifend ex dapibus et. Sed lorem nibh, dignissim vel eleifend feugiat, cursus vel dui. Integer eu nisl eleifend, auctor dolor non, tincidunt felis. Quisque lobortis sollic itudin enim, vitae iaculis elit dignissim id. Proin a lorem ligula. Vestibulum tincidunt justo q",
}

export const socialProvesSectionData = {
  title: "O que nossos clientes dizem",
  cards: [
    {
      description:
        "Texto de prova social Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rhoncus iacu mollis. egestas tincidunt mi vitae tempus. Fusce aliquet leo, imperdiet eleifend ex dapibus et. Sed lorem nibh, cus iacu mollis. awdssaccad egestas doiu lor tincidunt mi vitae tempus. Fusc",
      company: "Fulana de tal",
      image: "https://source.unsplash.com/300x200/?office",
      userName: "Empresa da Silva Sauro ME",
    },
    {
      description:
        "Texto de prova social Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rhoncus iacu mollis. egnd ex dapibus et. Sed lorem nibh, cus iacu mollis. awdssaccad egestas doiu lor tincidunt mi vitae tempus. Fusc",
      company: "Fulana de tal",
      image: "https://source.unsplash.com/300x200/?technology",
      userName: "Empresa da Silva Sauro ME",
    },
    {
      description:
        "Texto de prova social Loreor sit amet Fusce aliquet leo, imperdiet eleibus et. Sed bh, cus iacu mollis. awdssaccad egestas doiu i vitae tempusc",
      company: "Fulana de tal",
      image: "https://source.unsplash.com/300x200/?work",
      userName: "Empresa da Silva Sauro ME",
    },
    {
      description:
        "Texto de prova social Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rhoncus iacu mollis. egestas tincidunt mi vitae tempus. Fusce aliquet leo, imperdiet eleifend ex dapibus et. Sed lorem nibh, cus iacu mollis. awdssaccad egestas doiu lor tincidunt mi vitae tempus. Fusc",
      company: "Fulana de tal",
      image: "https://source.unsplash.com/300x200/?office",
      userName: "Empresa da Silva Sauro ME",
    },
    {
      description:
        "Texto de prova social Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rhoncus iacu mollis. egnd ex dapibus et. Sed lorem nibh, cus iacu mollis. awdssaccad egestas doiu lor tincidunt mi vitae tempus. Fusc",
      company: "Fulana de tal",
      image: "https://source.unsplash.com/300x200/?technology",
      userName: "Empresa da Silva Sauro ME",
    },
    {
      description:
        "Texto de prova social Loreor sit amet Fusce aliquet leo, imperdiet eleibus et. Sed bh, cus iacu mollis. awdssaccad egestas doiu i vitae tempusc",
      company: "Fulana de tal",
      image: "https://source.unsplash.com/300x200/?work",
      userName: "Empresa da Silva Sauro ME",
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
      description: "(27) 99999-9999",
    },
  ],
}

export const footerSectionData = {
  workingTimeText: "Seg a Sex: 08:00 às 18:00",
  icons: [
    {
      goingToUrl: "https://www.instagram.com/user/",
      sourceUrl: "./instagram.png",
      alternativeText: "Instagram",
    },
    {
      goingToUrl: "https://www.linkedin.com/in/user/",
      sourceUrl: "./linkedin.png",
      alternativeText: "Linkedin",
    },
    {
      goingToUrl: "https://www.youtube.com/@agiocontabilidade",
      sourceUrl: "./youtube.png",
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

export const whatsAppNumber = "27992462186"
