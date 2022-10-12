import emoji from "react-easy-emoji";
import MUNNAR from "./assets/images/vibgyor.jpg";
import CUSAT from "./assets/images/cusat.jpg";
import VERZEO from "./assets/images/verzeo.png";
import Hack_Club from "./assets/images/Hack_Club_cucek.png";
import TinkerHub from "./assets/images/TinkerHub.png";
import CTracker from "./assets/images/ctracker.jpg";
import Logo_Generator from "./assets/images/logo_generator.png";
import portfolio from "./assets/images/portfolio.png";
import Cert1 from './assets/images/blogathon.jpg';
import Cert2 from './assets/images/code4munnar.jpg';
import Cert3 from './assets/images/devfest.jpg';
import Cert4 from './assets/images/domectf.jpg';
import Cert5 from './assets/images/hackcamp.jpg';
import Cert6 from './assets/images/internship.jpg';
import Cert7 from './assets/images/localhackday.jpg';
import Cert8 from './assets/images/localhackdaybuild.jpg';
import Cert9 from './assets/images/buildfromhome.jpg';
import Cert10 from './assets/images/hackthemountains.png'




const illustration = {
  animated: true 
};

const greeting = {
  username: "Suvarnesh",
  title: "Hi all, I'm Suvarnesh",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Django / Flutter and some other cool libraries and frameworks and I'm a Cybersecurity enthusiast."
  ),
  resumeLink:
    "https://drive.google.com/file/d/11ggU9dEQAEv-d23PUpXjy0gOEwBO9yRG/view?usp=sharing",
  displayGreeting: true 
};


const socialMediaLinks = {
  github: "https://github.com/suvarneshkm",
  linkedin: "https://www.linkedin.com/in/suvarnesh-km/",
  gmail: "suvarnesh1729@gmail.com",
  twitter: "https://twitter.com/suvarneshkm",
  facebook: "https://www.facebook.com/suvarneshkm",
  medium: "https://medium.com/@suvarnesh",
  instagram: "https://www.instagram.com/_suvarnesh.rdg_/",

  display: true 
};


const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji("⚡ Web Development - A Freelance Web Developer"),
    emoji("⚡ Android Development - A Freelance Android Developer"),
    emoji("⚡ Ethical Hacking - Bug Bounty Hunting and some OSINT works "),
    emoji("⚡ Python Development - Interested in Automation")
  ],

  display: true
};


const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Cochin University of Science and Technology",
      logo: CUSAT,
      subHeader: "Bachelor of Technology in Electrical and Electronics",
      duration: "2018 - present",
    },
  ]
};


const workExperiences = {
  describe: "PLACES I WORKED TO GAIN SOME SKILLS",
  display: true,
  experience: [
    {
      role: "Backend Developer",
      company: "MUNNAR VIBGYOR TOURISM'S HELLOMUNNAR APP",
      companylogo: MUNNAR,
      date: "Jan 2021",
      desc: "Woked as the Backend developer in hellomunnar.in Pogressive Web Application Development.",
      descBullets: [
        "Worked with NestJS"
      ]
    },
    {
      role: "Internet of Things Intern",
      company: "Verzeo Intern",
      companylogo: VERZEO,
      date: "Feb 2020 – Mar 2020",
      desc: "Verzeo is an AI-Based online learning platform offering students a holistic learning experience, help them become Industry ready.",
      descBullets: [
        "Learned more about Internet of Things",
        "Build a project using Internet of Things"
      ]
    },
    {
      role: "Tech Lead",
      company: "Hack Club CUCEK",
      companylogo: Hack_Club,
      date: "2019 - 2021",
      desc: "Hack Club is a nonprofit network of high school coding clubs and makers around the world",
      descBullets: [
        "Conducting Learning programs",
        "Organizing events with the team",
        "Web Developer"
      ]
    },
    {
      role: "Tech Lead",
      company: "TinkerHub CUCEK",
      companylogo: TinkerHub,
      date: "2019 - 2021",
      desc: "Community of tinkerers, makers, policy geeks & students and are working towards mapping and empowering people who share a passion to innovate",
      descBullets: [
        "Conducting Learning programs",
        "Organizing events with the team",
        "Web Developer"
      ]
    }
  ]
};


const openSource = {
  showGithubProfile: "true",
  display: true 
};


const bigProjects = {
  title: "Projects",
  subtitle: "THESE ARE SOME OF MY PROJECT'S, BUILD DURING MY CAREER",
  projects: [
    {
      image: CTracker,
      projectName: "C-Tracker",
      projectDesc: "Track your foot and Confirm your footprints",
      footerLink: [
        {
          name: "GitHub Repo",
          url: "https://github.com/akhil-tj/Ctracker"
        },
        {
          name: "Download Link",
          url: "https://drive.google.com/file/d/1AKiJjP-qoJQP1FG9tdlceQLlRSXX3bH_/view"
        }
      ]
    },
    {
      image: MUNNAR,
      projectName: "Hello Munnar",
      projectDesc: "Hello Munnar guides you through every nook and corner of VIBGYOR tourism",
      footerLink: [
        {
          name: "GitHub Repo",
          url: "https://github.com/Kites-Foundation/hello-munnar-backend"
        },
        {
          name: "Visit Website",
          url: "https://hellomunnar.in/"
        }
      ]
    },
    {
      image: Logo_Generator,
      projectName: "Hack Club Logo Generator",
      projectDesc: "This is a logo generator for Hack Club Campus Chapters",
      footerLink: [
        {
          name: "GitHub Repo",
          url: "https://github.com/SuvarneshKM/logo-generator"
        },
        {
          name: "Visit Website",
          url: "https://suvarneshkm.github.io/logo-generator/"
        }
      ]
    },
    {
      image: portfolio,
      projectName: "My Portfolio Websites ",
      projectDesc: "MY Portfolio Websites Build using React Js",
      footerLink: [
        {
          name: "GitHub Repo",
          url: "https://github.com/SuvarneshKM/my-portfolio"
        },
        {
          name: "Visit Website",
          url: "https://suvarneshkm.github.io/"
        }
      ]
    },
  ],
  display: true 
};


const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      image: Cert1,
      name: 'blogathon'
    },
    {
      image: Cert2,
      name: 'code4munnar'
    },
    {
      image: Cert3,
      name: 'devfest'
    },
    {
      image: Cert4,
      name: 'domectf'
    },
    {
      image: Cert5,
      name: 'hackcamp'
    },
    {
      image: Cert6,
      name: 'internship'
    },
    {
      image: Cert7,
      name: 'localhackday'
    },
    {
      image: Cert8,
      name: 'localhackdaybuild'
    },
    {
      image: Cert9,
      name: 'buildfromhome'
    },
    {
      image: Cert10,
      name: 'hackthemountains'
    },

  ],
  display: true 
};



const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "DISCUSS A PROJECT OR JUST WANT TO SAY HI? MY INBOX IS OPEN FOR ALL.",
  email_address: "suvarnesh1729@gmail.com"
};


export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  contactInfo
};
