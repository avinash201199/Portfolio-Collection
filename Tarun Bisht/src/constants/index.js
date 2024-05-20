import { spark, letsgrow } from "../assets/images";
import {
    biofuel,
    bootstrap,
    c,
    chatgpt,
    css,
    crypto,
    event,
    express,
    firebase,
    git,
    github,
    google,
    html,
    java,
    javascript,
    jquery,
    linkedin,
    linux,
    mail,
    mongodb,
    mui,
    mysql,
    netlify,
    nextjs,
    nodejs,
    php,
    react,
    redux,
    tailwindcss,
    typescript,
    visual,
    weather,
    voting
} from "../assets/icons";

export const skills = [
    {
        imageUrl: c,
        name: "C++",
        type: ":Language",
    },
    {
        imageUrl: java,
        name: "Java",
        type: ":Language",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: bootstrap,
        name: "Bootstrap",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: jquery,
        name: "Jquery",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: php,
        name: "PHP",
        type: "Backend",
    },
    {
        imageUrl: firebase,
        name: "Firebase",
        type: "Backend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: mysql,
        name: "MySQL",
        type: "Database",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: netlify,
        name: "Netlify",
        type: "Hosting Platform",
    },
    {
        imageUrl: google,
        name: "Google Cloud",
        type: "Cloud Service",
    },
    {
        imageUrl: visual,
        name: "Visual Studio Code",
        type: "IDE",
    },
    {
        imageUrl: linux,
        name: "Linux",
        type: "Operating System",
    },
];

export const experiences = [
    {
        title: "Full Stack Developer",
        company_name: "Spark Foundation",
        icon: spark,
        iconBg: "#a2d2ff",
        date: "March 2023 - Aug 2023",
        points: [
            "Led the development of a web application using MERN (MongoDB, Express.js, React, Node.js) stack, focusing on both frontend and backend functionality.",
            "Implemented RESTful APIs and database schemas using Node.js and MongoDB, ensuring efficient data management and seamless communication between client and server",
            "Designed and developed responsive and dynamic user interfaces with React, utilizing state management libraries like Redux for complex application state handling.",
            "Conducted rigorous testing of frontend and backend components, employing unit testing frameworks like Jest and Mocha, and integration testing with tools like Postman.",
            "Collaborated with cross-functional teams to prioritize feature development, streamline deployment processes, and deliver high-quality software products within tight deadlines",
        ],
    },
    {
        title: "React Developer",
        company_name: "Let's Grow More",
        icon: letsgrow,
        iconBg: "#b7e4c7",
        date: "Oct 2022 - Dec 2022",
        points: [
            "Developed and implemented frontend features for two React-based projects, focusing on improving user interaction and overall user experience.",
            "Collaborated closely with backend developers to integrate RESTful APIs into React components, ensuring seamless data retrieval and display.",
            "Conducted thorough unit testing using Jest and Enzyme, achieving 95% test coverage and identifying and fixing critical bugs prior to deployment.",
            "Contributed to codebase optimization efforts by implementing lazy loading techniques, reducing initial page load times by 30% and enhancing overall application performance.",
        ],
    },
    // {
    //     title: "Campus Ambassador",
    //     company_name: "Internshala",
    //     icon: shopify,
    //     iconBg: "#b7e4c7",
    //     date: "Jan 2022 - Jan 2023",
    //     points: [
    //         "Developing and maintaining web applications using React.js and other related technologies.",
    //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         "Implementing responsive design and ensuring cross-browser compatibility.",
    //         "Participating in code reviews and providing constructive feedback to other developers.",
    //     ],
    // },
    // {
    //     title: "Full stack Developer",
    //     company_name: "Meta",
    //     icon: meta,
    //     iconBg: "#a2d2ff",
    //     date: "Jan 2023 - Present",
    //     points: [
    //         "Developing and maintaining web applications using React.js and other related technologies.",
    //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         "Implementing responsive design and ensuring cross-browser compatibility.",
    //         "Participating in code reviews and providing constructive feedback to other developers.",
    //     ],
    // },
];

export const socialLinks = [
    {
        name: 'Mail',
        iconUrl: mail,
        link: 'mailto:bishttarun2002@gmail.com',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/tarunbisht-24',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/tarunbisht24/',
    }
];

export const projects = [
    {
        iconUrl: event,
        theme: 'btn-back-red',
        name: 'Evently',
        description: 'Devised an event organization web app similar to Eventbrite with NextJS, React and Mongoose for robust backend operations, ensuring scalability and reliability of the application.',
        link: 'https://github.com/tarunbisht-24/evently',
    },
    {
        iconUrl: chatgpt,
        theme: 'btn-back-yellow',
        name: 'CHATGPT 2.0',
        description: 'Developed a better version of ChatGPT which gives accurate results of user query with the help of Open AI API’s using React for frontend.',
        link: 'https://github.com/tarunbisht-24/chatgpt-enhanced',
    },
    {
        iconUrl: crypto,
        theme: 'btn-back-blue',
        name: 'Walleth',
        description: 'Launched a Web 3.0 Application that allows users to send transactions through the Blockchain using React and Solidity.',
        link: 'https://github.com/tarunbisht-24/walleth',
    },
    {
        iconUrl: biofuel,
        theme: 'btn-back-green',
        name: 'BioStack',
        description: 'Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.',
        link: 'https://github.com/tarunbisht-24/biostack',
    },
    {
        iconUrl: voting,
        theme: 'btn-back-pink',
        name: 'Online Voting System',
        description: 'Developed a secure online voting system using React and Node.js, ensuring the integrity and confidentiality of the voting process.',
        link: 'https://github.com/tarunbisht-24/Online-Voting-System',
    },
    {
        iconUrl: weather,
        theme: 'btn-back-black',
        name: 'Weather App',
        description: 'Created a weather app that provides real-time weather updates using React and OpenWeatherMap API.',
        link: 'https://github.com/tarunbisht-24/Weather-App',
    },
];