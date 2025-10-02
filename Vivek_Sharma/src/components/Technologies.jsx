import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiBootstrap } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiMysql } from "react-icons/si"; 
import { FaGithub } from "react-icons/fa";
import { SiJsonwebtokens } from "react-icons/si"; // JWT icon (if available)
import { SiNetlify } from "react-icons/si"; // Netlify icon (if available)
import { motion } from "framer-motion";

const iconVaiants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        {/* Mongo DB icon  */}
        <motion.div
          variants={iconVaiants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiMongodb className="text-7xl text-cyan-400" />
        </motion.div>

        {/* ExpressJs icon  */}
        <motion.div
          variants={iconVaiants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiExpress className="text-7xl" />
        </motion.div>

        {/* react js  */}
        <motion.div
          variants={iconVaiants(5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiReactjsLine className="text-7xl text-green-500" />
        </motion.div>

        {/* next js icon  */}
        <motion.div
          variants={iconVaiants(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <TbBrandNextjs className="text-7xl text-red-400" />
        </motion.div>
        
        {/* next js icon  */}
        <motion.div
          variants={iconVaiants(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiBootstrap className="text-7xl text-red-400" />
        </motion.div>

        {/* Tailwind icon  */}
        <motion.div
          variants={iconVaiants(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiTailwindcss className="text-7xl text-red-400" />
        </motion.div>

        {/* Js icon  */}
        <motion.div
          variants={iconVaiants(6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaNodeJs className="text-7xl text-green-500" />
        </motion.div>

        {/* my sql */}
        <motion.div
          variants={iconVaiants(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiMysql className="text-7xl text-sky-700" />
        </motion.div>

        {/* github  */}
        <motion.div
          variants={iconVaiants(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaGithub className="text-7xl text-sky-700" />
        </motion.div>

        {/* JWT  */}
        <motion.div
          variants={iconVaiants(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiJsonwebtokens className="text-7xl text-sky-700" />
        </motion.div>
        
        {/* Netlify  */}
        <motion.div
          variants={iconVaiants(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiNetlify className="text-7xl text-sky-700" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
