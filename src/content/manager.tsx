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
}

export const companyInfoData = [
  {
    title: "Abertura de empresa",
    description: "Um texto aqui representando o que diz no titulo do card. Lorem ipsunat tecum dominus",
    icon: <BankIcon width={72} height={72} fill="#1d4441" />,
  },
  {
    title: "Regularização de débitos",
    description: "Um texto aqui representando o que diz no titulo do card. Lorem ipsunat tecum dominus",
    icon: <MoneyEngineIcon width={72} height={72} fill="#1d4441" />,
  },
  {
    title: "Contabilidade completa",
    description: "Um texto aqui representando o que diz no titulo do card. Lorem ipsunat tecum dominus",
    icon: <DolarPaperIcon width={72} height={72} fill="#1d4441" />,
  },
  {
    title: "Perícias e cálculos judiciais",
    description: "Perícias, laudos, impugnações e assistências técnicas trabalhistas,cíveis e contábeis.",
    icon: <AcountingIcon width={72} height={72} fill="#1d4441" />,
  },
  {
    title: "Gestão financeira e processos",
    description: "Fazemos toda a estruturação financeira e de processos da sua empresa.",
    icon: <UserIcon width={72} height={72} fill="#1d4441" />,
  },
  {
    title: "Atendimento à pessoas físicas",
    description: "Cuidamos da sua pessoa física, imposto de renda e carnê leão.",
    icon: <MoneyManagementIcon width={72} height={72} fill="#1d4441" />,
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
  title: "O que dizem alguns de nossos clientes",
  cards: [
    {
      description:
        "Texto de prova social Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rhoncus iacu mollis. egestas tincidunt mi vitae tempus. Fusce aliquet leo, imperdiet eleifend ex dapibus et. Sed lorem nibh, cus iacu mollis. awdssaccad egestas doiu lor tincidunt mi vitae tempus. Fusc",
      company: "Fulana de tal",
      image: "https://source.unsplash.com/random",
      userName: "Empresa da Silva Sauro ME",
    },
    {
      description:
        "Texto de prova social Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rhoncus iacu mollis. egnd ex dapibus et. Sed lorem nibh, cus iacu mollis. awdssaccad egestas doiu lor tincidunt mi vitae tempus. Fusc",
      company: "Fulana de tal",
      image: "https://source.unsplash.com/random",
      userName: "Empresa da Silva Sauro ME",
    },
    {
      description:
        "Texto de prova social Loreor sit amet Fusce aliquet leo, imperdiet eleibus et. Sed bh, cus iacu mollis. awdssaccad egestas doiu i vitae tempusc",
      company: "Fulana de tal",
      image: "https://source.unsplash.com/random",
      userName: "Empresa da Silva Sauro ME",
    },
  ],
}

export const contactSectionData = {
  image: {
    sourceUrl: "/agioLogo.svg",
    alternativeText: "Company's logo",
    height: 100,
    width: 200,
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
  ],
}

export const missionSectionData = {
  mission: {
    title: "Nossa missão",
    description: " ",
  },
}

export const whatsAppNumber = "27999541160"

export const service_ID = "service_u3ksi6p"
export const email_template_ID = "template_hvdjrwn"
export const user_ID = "Cj20wOuh49KzVVg57"
