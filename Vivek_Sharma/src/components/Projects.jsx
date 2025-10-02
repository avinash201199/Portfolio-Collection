import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h2>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4"
            >
              <img
                src={project.image}
                width={150}
                height={150}
                alt={project.title}
                className="mb-6 rounded"
              />
              <div style={{ display: "flex", gap: "2rem" }}>
                {" "}
                {/* Adjust gap as needed */}
                <a
                  href={project.GitUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontSize: "2rem" }} // Adjust size as needed
                >
                  <FaGithub />
                </a>
                <a
                  href={project.websiteUrl} // Change this to your website URL
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontSize: "2rem" }} // Adjust size as needed
                >
                  <FaGlobe />
                </a>
              </div>
            </motion.div>

            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 font-semibold">{project.title}</h6>
              <p className="mb-4 text-neutral-400">{project.description}</p>
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
