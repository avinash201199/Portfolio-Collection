import htmlicon from "../../assets/icons/htmlicon.svg";
import cssicon from "../../assets/icons/cssicon.svg";
import javascripticon from "../../assets/icons/javascripticon.svg";
import boostrapicon from "../../assets/icons/boostrapicon.svg"
import typescripticon from "../../assets/icons/typescripticon.svg";
import reacticon from "../../assets/icons/reacticon.svg";
import nextjsicon from "../../assets/icons/nextjsicon.svg";
import nodejsicon from "../../assets/icons/nodejsicon.svg";
import tailwindcssicon from "../../assets/icons/tailwindicon.svg";
import mongodbicon from "../../assets/icons/mongoicon.svg";
import vuejsicon from "../../assets/icons/vueicon.svg";
import expressicon from "../../assets/icons/expressicon.svg";
import axiosicon from "../../assets/icons/axiosicon.svg";
import nextjsiconwhite from "../../assets/icons/nextjsiconwhite.svg";
import expressiconwhite from "../../assets/icons/expressiconwhite.svg";
import { GoHome, GoPerson, GoMail, GoStack, GoProject } from "react-icons/go";
import { FiGithub, FiLink, FiLinkedin, FiMail } from "react-icons/fi";
import Imprint from "../../components/Imprint";
import Privacy from "../../components/Privacy";
import sportsstadiumicon from "../../assets/icons/sportsstadium.jpeg";
import discordapiicon from "../../assets/icons/discordapiicon.png";
import notionapiicon from "../../assets/icons/notionapiicon.jpg"
import slackapiicon from "../../assets/icons/slackapiicon.png"
import cpulsicon from "../../assets/icons/c++icon.png"
import pythonicon from "../../assets/icons/pythonicon.png"
import rubyicon from "../../assets/icons/rubyicon.png"
import zemprofilesicon from "../../assets/icons/zemprofiles.png"
import discordjsicon from "../../assets/icons/discordjsicon.png"
import expressicon2 from "../../assets/icons/expressicon.png"
import jsonicon from "../../assets/icons/jsonicon.png"
import portfoliotemplateicon from "../../assets/icons/portfoliotemplateicon.png"
import medalicon from "../../assets/icons/medalicon.png"
import aboutmeicon from "../../assets/icons/aboutmeicon.png"
import hobbiesicon from "../../assets/icons/hobbiesicon.png"
import blogsicon from "../../assets/icons/blogsicon.png"
import hemangicon2 from "../../assets/img/Hemang2.jpg"
//  import profilepicture from "../../assets/img/Zemerik.png"


export const headerIntroData = {
  title: {
    de: "Hi, ich bin Hemang",
    en: "Hi, I'm Hemang",
  },
  subtitle: "A Passionate Developer",
  description: {
    de: "",
    en: "",
  },
  buttons: [
    {
      name: "Contact",
      label: {
        de: "Kontaktiere mich",
        en: "Contact me",
      },
      icon: FiMail,
      color: "main-btn",
    },
    {
      name: "Projects",
      label: {
        de: "Meine Projekte",
        en: "My Projects",
      },
      icon: FiGithub,
      color: "secondary-btn",
    },
  ],
  profilepicture: hemangicon2,
} as const;

export const projectsData = [
  {
    title: "Sports Stadium",
    description:
      "Ein Allzweck-NodeJS-Discord-Bot, der mit MongoDB und der Discord-API mit einem Boostrap-Dashboard erstellt wurde",
    description_EN:
      "An all purpose NodeJS Discord bot built using MongoDB and Discord's API with a boostrap dashboard",
    technologies: [
      { name: "Html", icon: htmlicon },
      { name: "CSS", icon: cssicon },
      { name: "JavaScript", icon: javascripticon },
      { name: "Boostrap", icon: boostrapicon},        
      { name: "MongoDB", icon: mongodbicon},
      { name: "Axios", icon: axiosicon},
      { name: "Discord.js", icon: discordjsicon},
      { name: "Express", icon: expressicon2},
      { name: "Node.js", icon: nodejsicon},
      { name: "React", icon: reacticon},
      { name: "JSON", icon: jsonicon}
      ],
      image: sportsstadiumicon,
      deploymenturl: "https://zemerik.is-a.dev/Sports-Stadium",
      githuburl: "https://github.com/Zemerik/Sports-Stadium",
      githubicon: FiGithub,
      deploymenticon: FiLink,
      colors: {
        main: "main-btn",
        second: "secondary-btn",
        icon: "white",
        projectcolor: "#70B9BE",
      },
    },  
  {
    title: "ZemProfiles",
    description:
      "Entdecken Sie Entwickler und treten Sie mit ihnen in Kontakt",
    description_EN:
      "Discover & Connect with Developers",
      technologies: [
        { name: "JavaScript", icon: javascripticon },
        { name: "Typescript", icon: typescripticon},
        { name: "ReactJS", icon: reacticon},
        { name: "CSS", icon: cssicon}, 
        { name: "HTML", icon: htmlicon}
      ],
      image: zemprofilesicon,
      deploymenturl: "https://zemprofiles.vercel.app",
      githuburl:
        "https://github.com/Zemerik/ZemProfiles",
      githubicon: FiGithub,
      deploymenticon: FiLink,
      colors: {
        main: "main-btn",
        second: "secondary-btn",
        icon: "white",
        projectcolor: "#FFD5BD",
      },
    },
  {
    title: "Portfolio Template",
    description:
      "Die vorherige Version meines Portfolios wurde ausschließlich in HTML, CSS und Javascript erstellt",
    description_EN:
      "The previous version of my Portfolio made purely in HTML, CSS and Javascript",
      technologies: [
        { name: "Html", icon: htmlicon },
        { name: "CSS", icon: cssicon },
        { name: "JavaScript", icon: javascripticon },
      ],
      image: portfoliotemplateicon,
      deploymenturl: "https://zemerik.is-a.dev/Portfolio-Template",
      githuburl: "https://github.com/Zemerik/Portfolio-Template",
      githubicon: FiGithub,
      deploymenticon: FiLink,
      colors: {
        main: "main-btn",
        second: "secondary-btn",
        icon: "white",
        projectcolor: "#E3964A",
      },
    },
] as const;

export const liveTickerData = {
  content: {
    de: "Weitere Projekte auf Github",
    en: "More Projects on Github",
  },
} as const;

export const skillsDataWeb = [
  {
    skillsTitle: "WebDevelopment",
    skills: [
      {
        title: "HTML",
        hash: "#html",
        icon: htmlicon,
        color: "#F1662A",
      },
      {
        title: "CSS",
        hash: "#CSS",
        icon: cssicon,
        color: "#1572B6",
      },
      {
        title: "JavaScript",
        hash: "#JavaScript",
        icon: javascripticon,
        color: "#F7DF1E",
      },
      {
        title: "TypeScript",
        hash: "#TypeScript",
        icon: typescripticon,
        color: "#007ACC",
      },
      {
        title: "React",
        hash: "#React",
        icon: reacticon,
        color: "#61DAFB",
      },
      {
        title: "Next.js",
        hash: "#Next.js",
        icon: [nextjsicon, nextjsiconwhite],
        color: ["#000000", "#FFFFFF"],
      },
      {
        title: "Node.js",
        hash: "#Node.js",
        icon: nodejsicon,
        color: "#339933",
      },
      {
        title: "Tailwind",
        hash: "#Tailwind",
        icon: tailwindcssicon,
        color: "#38B2AC",
      },
      {
        title: "MongoDB",
        hash: "#MongoDB",
        icon: mongodbicon,
        color: "#449C45",
      },
      {
        title: "Vue.js",
        hash: "#Vue.js",
        icon: vuejsicon,
        color: "#4FC08D",
      },
      {
        title: "Express",
        hash: "#Express",
        icon: [expressicon, expressiconwhite],
        color: ["#000000", "#FFFFFF"],
      },
      {
        title: "Boostrap",
        hash: "#Boostrap",
        icon: boostrapicon,
        color: "#CC6699",
      },
    ],
  },
] as const;

export const skillsDataDesign = [
  {
    skillsTitle: "Backend",
    skills: [
      { title: "C++", hash: "#C++", icon: cpulsicon, color: "#F24E1E" },
      {
        title: "Ruby",
        hash: "#Ruby",
        icon: rubyicon,
        color: "#FF61F6",
      },
      { title: "Python", hash: "#Python", icon: pythonicon, color: "#00C4CC" },
    ],
  },
] as const;

export const skillsDataCMS = [
  {
    skillsTitle: "API",
    skills: [
      {
        title: "Discord API",
        hash: "#Discord API",
        icon: discordapiicon,
        color: "#21759B",
      },
      {
        title: "Notion API",
        hash: "#Notion API",
        icon: notionapiicon,
        color: "#7AB55C",
      },
      {
        title: "Slack API",
        hash: "#Slack API",
        icon: slackapiicon,
        color: "#4353FF",
      },
    ],
  },
] as const;

export const navLinks = [
  { de: "Home", en: "Home", hash: "#home", icon: GoHome },
  { de: "Skills", en: "Skills", hash: "#skills", icon: GoStack },
  { de: "Projekte", en: "Projects", hash: "#projects", icon: GoProject },
  { de: "Über mich", en: "About me", hash: "#about-me", icon: GoPerson },
  { de: "Kontakt", en: "Contact", hash: "#contact", icon: GoMail },
] as const;

export const FooterLinks = [
  { de: "Impressum", en: "Imprint", hash: "#imprint", data: <Imprint /> },
  { de: "Datenschutz", en: "Privacy", hash: "#privacy", data: <Privacy /> },
] as const;

export const sideBarRightMail = {
  link: "mailto:myemail@com",
  text: "myemail@com",
} as const;

export const sideBarLeftSocials = [
  {
    link: "https://www.linkedin.com/in/zemerik/",
    icon: FiLinkedin,
    altimgname: "linkedin",
  },
  {
    link: "https://github.com/Zemerik",
    icon: FiGithub,
    altimgname: "github",
  },
  {
    link: "mailto:zemeriky@gmail.com",
    icon: FiMail,
    altimgname: "mail",
  },
] as const;

export const quotesData = [
  {
    de: '"Es ist überhaupt nicht wichtig, es beim ersten Mal richtig zu machen. Es ist entscheidend, es beim letzten Mal richtig zu machen."',
    en: `#Building-in-Public`,
    author: "",
  },
  {
    de: '"Das Web ist wie eine Leinwand und der Code ist die Farbe. Erschaffe dein Meisterwerk."',
    en: `"The web is like a canvas, and code is the paint. Create your masterpiece."`,
  },
] as const;

export const aboutMeData = {
  title: "Über mich",
  title_EN: "About me",
  description: "Ein paar Codeschnippsel über mich",
  description_EN: "A few code snippets about me",
  paragraphs_DE: [
    {
      title: "Über mich",
      description:
        "Als 14-jähriger Gymnasiast treibt mich die unerschütterliche Leidenschaft an, eine Karriere als Front-End-Softwareentwickler anzustreben.",
      icon: aboutmeicon,
    },
    {
      title: "Hobbys",
      description:
        "Neben dem Programmieren schaue ich gerne Cricket und setze meine 3D-Fantasie mithilfe der Unreal Engine in die Realität um.",
      icon: hobbiesicon,
    },
    {
      title: "200 Follower auf X (Twitter)",
      description:
        "Es ist ein bedeutender Meilenstein für mich und ich bin allen dankbar, die mich unterstützt und mitgemacht haben.",
      icon: medalicon,
    },
    {
      title: "Blogs",
      description:
      "Ich schreibe häufig Blogs auf dev.to und hashnode und teile meine Gedanken und Erfahrungen mit meinen Lesern. Durch das Erstellen von Inhalten kann ich mich kreativ ausdrücken und mit einem breiteren Publikum interagieren.",
      icon : blogsicon,
    }
  ],
  paragraphs_EN: [
    {
      title: "About Me",
      description:
        "As a 14-year-old high school student, I am driven by an unwavering passion for pursuing a career as a front-end software developer.",
      icon: aboutmeicon,
    },
    {
      title: "Hobbies",
      description:
        "Besides coding, I enjoy watching cricket and bringing my 3D Imagination to reality using Unreal Engine.",
      icon: hobbiesicon,
    },
    {
      title: "200 Followers on X (Twitter)",
      description:
      "It's a significant milestone for me, and I'm grateful for everyone who has supported and followed along.",
      icon: medalicon,
    },
    {
      title: "Blogs",
      description:
      "I frequently write blogs on dev.to and Hashnode, sharing my thoughts and experiences with my readers. Crafting content allows me to express myself creatively and engage with a wider audience.",
      icon : blogsicon,
    }
  ],
};

export const contactData = {
  title: {
    de: "Kontakt",
    en: "Contact",
  },
  description: {
    de: "Schreib mir eine Nachricht und ich melde mich bei dir.",
    en: "Write me a message and I will get back to you.",
  },
  inputfields: [
    {
      name: "name",
      placeholder: {
        de: "Dein Name",
        en: "Your Name",
      },
      type: "text",
      validation: {
        de: "Bitte gebe deinen Namen ein",
        en: "Please fill in your name",
      },
      pattern: "{2}",
    },
    {
      name: "email",
      placeholder: {
        de: "Deine E-Mail Adresse",
        en: "Your E-Mail",
      },
      type: "email",
      validation: {
        de: "Bitte gebe deine Email ein",
        en: "Please fill in your email",
      },
      pattern: "[@]{4}",
    },
    {
      name: "subject",
      placeholder: {
        de: "Deine Betreff",
        en: "Your Subject",
      },
      type: "text",
      validation: {
        de: "Bitte gebe einen Betreff ein",
        en: "Please fill in your subject",
      },
      pattern: "{10}",
    },
  ],
  textarea: {
    placeholder: {
      de: "Deine Nachricht",
      en: "Your Message",
    },
    name: "message",
    rows: 10,
    validation: {
      de: "Bitte gebe deine Nachricht ein",
      en: "Please fill in your message",
    },
    pattern: "{10}",
  },
  button: {
    value: {
      de: "Absenden",
      en: "Send",
    },
  },
  icon: FiMail,
  iconcolor: "#FFFFFF",
  colors: {
    main: "main-btn",
    second: "secondary-btn",
    icon: "white",
  },
  privacyOptIn: {
    checkbox: {
      de: "Ich stimme zu, dass Zemerik meine personenbezogenen Daten (Name und E-Mail-Adresse) verwenden darf, um mit mir Kontakt aufzunehmen.",
      en: "I agree that Zemerik may use my personal data (name and e-mail address) to contact me.",
    },
    description: {
      de: "Durch Übermittlung dieser Anfrage bestätigen Sie, dass Sie die Datenschutzerklärung gelesen haben",
      en: "By submitting this request, you acknowledge that you have read the Private Policy",
    },
  },
} as const;

export const toastMessages = {
  loadingProject: {
    de: "🦄 Die Live Demo wird gleich geöffnet. Server werden gestartet...",
    en: "🦄 The live demo will open shortly. Starting servers...",
  },
  successEmailSent: {
    de: "🦄 Vielen Dank für deine Email. Ich werde mich schnellstmöglich bei dir melden",
    en: "🦄 Thank you for your email. I will get back to you as soon as possible",
  },
  failedEmailSent: {
    de: "🦄 Leider hat der Versand deiner Email nicht geklappt. Bitte versuche es später noch einmal",
    en: "🦄 Unfortunately the sending of your email did not work. Please try again later or email on zemerkikY@gmail.com",
  },
  failedValidationName: {
    de: "Bitte gebe deinen Namen ein",
    en: "Please fill in your name",
  },
} as const;

export const buttonLabels = {
  language: {
    de: "DE",
    en: "EN",
  },
} as const;

export const directionStyles: Record<string, React.CSSProperties> = {
  "outer-right-to-inner-left": {
    marginRight: "4rem",
  },
  "outer-left-to-inner-right": {
    marginLeft: "4rem",
    transform: "scaleX(-1)",
  },
  "inner-right-to-middle": {
    width: "100%",
    transform: "scaleY(1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  "inner-left-to-middle": {
    width: "100%",
    transform: "scaleX(-1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  "middle-to-inner-right": {
    width: "100%",
    transform: "scale(1,-1)",
  },
  "middle-to-inner-left": {
    width: "100%",
    transform: "scale(-1,-1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  middle: {
    width: "100%",
    transform: "scaleX(-1)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
};

export const heightStyles: Record<string, { heights: [string, string] }> = {
  small: {
    heights: ["25rem", "15rem"],
  },
  middle: {
    heights: ["35rem", "25rem"],
  },
  large: {
    heights: ["45rem", "35rem"],
  },
  extraLarge: {
    heights: ["55rem", "45rem"],
  },
};

export const spaceStyles: Record<string, React.CSSProperties> = {
  "outer-right-to-inner-left": {
    marginTop: "-6rem",
    width: "100%",
  },
  "outer-left-to-inner-right": {
    marginTop: "-6rem",
    width: "100%",
  },
  "inner-right-to-middle": {
    marginTop: "-20rem",
    width: "50%",
    zIndex: "-10",
  },
  "inner-left-to-middle": {
    marginTop: "-10rem",
    width: "50%",
    zIndex: "-10",
  },
  "middle-to-inner-right": {
    width: "75%",
  },
  "middle-to-inner-left": {
    marginTop: "-2.5rem",
    width: "50%",
  },
  middle: {
    marginTop: "-2.5rem",
    width: "0%",
    display: "none",
  },
};

export const widthStyles: Record<string, { widths: [string, string] }> = {
  "outer-right-to-inner-left": {
    widths: ["74.45%", "74.45%"],
  },
  "outer-left-to-inner-right": {
    widths: ["75%", "75%"],
  },
  "inner-right-to-middle": {
    widths: ["50.1%", "49%"],
  },
  "inner-left-to-middle": {
    widths: ["50.1%", "49%"],
  },
  "middle-to-inner-right": {
    widths: ["33.4%", "50.03%"],
  },
  "middle-to-inner-left": {
    widths: ["50.1%", "49%"],
  },
  middle: {
    widths: ["0%", "0%"],
  },
};
