import React, { useState } from "react";
import { Code, Globe } from "lucide-react";
import { motion } from "framer-motion";

const ProjectCard = ({ icon, title, description, color, github, live }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative bg-black rounded-lg p-6 overflow-hidden group cursor-pointer shadow-lg flex flex-col justify-between w-full sm:w-80 min-h-[500px] mx-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated background overlay */}
      <div
        className={`absolute inset-0 ${color} transition-all duration-700 ease-out`}
        style={{
          clipPath: isHovered
            ? "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
            : "polygon(0 0, 100% 0, 100% 0, 0 0)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col flex-1">
        <div className="w-16 h-16 bg-gray-700 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-white/20 transition-colors duration-500">
          {icon}
        </div>

        <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>

        <p className="text-gray-300 group-hover:text-white transition-colors duration-500 mb-8 leading-relaxed flex-1">
          {description}
        </p>

        <div className="flex gap-4 mt-auto flex-wrap">
          {/* GitHub Button */}
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex items-center gap-2 px-6 py-3 bg-gray-700 text-white rounded-lg font-medium shadow-lg shadow-blue-500/50 overflow-hidden group/btn cursor-target cursor-pointer"
          >
            <span
              className={`absolute inset-0 bg-red-700 transition-all duration-700 ease-out ${color}`}
              style={{
                clipPath: isHovered
                  ? "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
                  : "polygon(0 0, 0 0, 0 100%, 0 100%)",
              }}
            />
            <Code className="w-5 h-5 relative z-10" />
            <span className="relative z-10">Source Code</span>
          </a>

          {/* Live Buttons (support multiple links) */}
          {live &&
            live.map((link, idx) => (
              <a
                key={idx}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex items-center gap-2 px-4 py-3 bg-gray-700 text-white rounded-lg font-medium shadow-lg shadow-blue-500/50 overflow-hidden group/btn cursor-target cursor-pointer"
              >
                <span
                  className={`absolute inset-0 bg-red-700 transition-all duration-700 ease-out ${color}`}
                  style={{
                    clipPath: isHovered
                      ? "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
                      : "polygon(0 0, 0 0, 0 100%, 0 100%)",
                  }}
                />
                <Globe className="w-5 h-5 relative z-10" />
                <span className="relative z-10">{link.label}</span>
              </a>
            ))}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const projects = [
    {
      icon: (
        <svg
          className="w-8 h-8 text-white"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5zm0 11.5c-1.93 0-3.5-1.57-3.5-3.5S10.07 6.5 12 6.5s3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z" />
        </svg>
      ),
      title: "LipiKolam",
      description:
        "AI-powered platform for Kolam generation with marketplace, competitions, and student communities. Won recognition in SIH for innovation. Built with React.js, Tailwind, FastAPI, and MongoDB. Integrated Cloudinary for media storage and Razorpay for secure payments.",
      color: "bg-gradient-to-b from-blue-600 to-blue-800",
      github: "https://github.com/Krushna-a/SIH-Kolam-website",
      live: [
        { label: "Live Site", url: "https://sih-kolam-website.vercel.app/" },
      ],
    },
    {
      icon: (
        <svg
          className="w-8 h-8 text-white"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-2-13h4v6h-4zm0 8h4v2h-4z" />
        </svg>
      ),
      title: "VENT - Events Platform",
      description:
        "Aggregates inter-college hackathons and events across Pune. Built with React.js frontend, Express.js backend, and MongoDB. Secure authentication with Passport.js and RESTful APIs for CRUD operations.",
      color: "bg-gradient-to-b from-purple-600 to-purple-800",
      github: "https://github.com/Krushna-a/HackVent-Backend",
      live: [
        { label: "Live Site", url: "https://hack-vent-frontend.vercel.app/" },
      ],
    },
    {
      icon: (
        <svg
          className="w-8 h-8 text-white"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5c0-1.1-.9-2-2-2zm0 14H3V5h18v12zm-5-6l-7 4V7z" />
        </svg>
      ),
      title: "Heart Disease Prediction System",
      description:
        "ML system predicting heart disease risk from clinical data with 88% accuracy. Performed EDA, data cleaning, visualization, and compared multiple ML algorithms including Logistic Regression, KNN, and Random Forest.",
      color: "bg-gradient-to-b from-red-600 to-red-800",
      github: "https://github.com/Krushna-a/Heart-disease-classification-ML",
      live: [],
    },
    {
      icon: (
        <svg
          className="w-8 h-8 text-white"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z" />
        </svg>
      ),
      title: "Airbnb Clone",
      description:
        "Full-stack MERN application inspired by Airbnb. Users can explore listings, book stays, host properties, and manage bookings. Features JWT authentication, responsive UI with Tailwind, and MongoDB integration.",
      color: "bg-gradient-to-b from-green-600 to-green-800",
      github: "https://github.com/Krushna-a/Airbnb-clone",
      live: [],
    },
    {
      icon: (
        <svg
          className="w-8 h-8 text-white"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M3 3h2l.4 2M7 13h14l-1.5 8h-13L7 13zm0 0L5 6H2M16 6h2l1 5H8l1-5h7z" />
        </svg>
      ),
      title: "Forever E-commerce",
      description: `A full-stack e-commerce platform with separate frontends for admins and users. Features include product management, secure user authentication, a seamless cart and checkout system, and a fully responsive design. Built with a modern web stack for scalable performance.\n\n


⚠️ Admin Panel Access:
ADMIN_USERNAME = krushna70
ADMIN_PASSWORD = qwerty123`,
      color: "bg-gradient-to-b from-blue-600 to-blue-800",
      github: "https://github.com/Krushna-a/forever",
      live: [
        {
          label: "User Site",
          url: "https://forever-gagirwyxa-krushna-as-projects.vercel.app/",
        },
        { label: "Admin Panel", url: "https://forever-4bo3.vercel.app/" },
      ],
    },
  ];

  return (
    <div className="min-h-screen py-16 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-lg">
            Explore my latest work and innovations
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
