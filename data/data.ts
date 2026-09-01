export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Card1",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Card2Stack",
    description: "Card2",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Card3",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Card4Description",
    description: "Card4",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Card5",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const languages = [
  {
    title: "American english",
    icon: "/usa.svg",
    onclick: () => console.log("alo1"),
  },
  {
    title: "Português brasileiro",
    icon: "/bra.svg",
    onclick: () => console.log("alo2"),
  },
];

export const projects = [
  {
    id: 1,
    title: "Ycodify",
    des: "Plataforma de no-code",
    img: "/ycodify.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/remix.svg", "/plus.svg"],
    link: "https://www.ycodify.com/landing.html",
    linkReducer: "ycodify.com",
  },
  {
    id: 2,
    title: "Comigo",
    des: "Aplicativo de rastreamento veicular",
    img: "/go.png",
    iconLists: [
      "/expo.svg",
      "/tail.svg",
      "/ts.svg",
      "/docker.svg",
      "/re.svg",
      "/plus.svg",
    ],
    link: "https://play.google.com/store/apps/details?id=com.semprecomigo.comigoapp&hl=pt_BR",
    linkReducer: "play.google.com",
  },
  {
    id: 3,
    title: "Teste Jungle Gaming",
    des: "Teste técnico para Jungle Gaming",
    img: "/jungle.png",
    iconLists: ["/tail.svg", "/ts.svg", "/docker.svg", "/re.svg", "/plus.svg"],
    link: "https://github.com/rafx01/teste-jungle",
    linkReducer: "github.com",
  },
  {
    id: 4,
    title: "Lauto Cargo",
    des: "Aplicativo 'Dosojin' para motoristas",
    img: "/dosojin.png",
    iconLists: ["/dart.svg", "/flutter.svg"],
    linkReducer: "Dosojin",
    privateRepo: true,
  },
  {
    id: 5,
    title: "Tribo Airsoft",
    des: "Sistema de jogos de airsoft e mais",
    img: "/tribo.png",
    iconLists: ["/tail.svg", "/ts.svg", "/re.svg", "/claude.svg", "/plus.svg"],
    link: "https://triboairsoft.com/",
    linkReducer: "triboairsoft.com",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Desenvolvedor frontend",
    desc: "Refatorei e criei componentes, fiz a parte de internacionalização e outros.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Desenvolvedor mobile ",
    desc: "Mantive e melhorei um app de rastreamento veicular, utilizando Expo e React Native",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Ecossistema de desenvolvimento",
    desc: "Fiz parte de todo o ecossistema do aplicativo, desde organização de backlog e sprints, passando por devops e testes, até o deploy.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Integrações externas",
    desc: "Fiz integrações com gateways de pagamento, APIs de geolocalização e  outros.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/rafx01",
  },
  {
    id: 2,
    img: "/link.svg",
    link: "www.linkedin.com/in/raphael-furini",
  },
];
