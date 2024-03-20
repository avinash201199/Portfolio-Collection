import React from "react";
import { FiGithub, FiMail, FiLinkedin, FiDownload } from "react-icons/fi";
import { motion } from "framer-motion";

export default function Title() {
  const letter = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 1,
        staggerChildren: 0.04,
      },
    },
  };

  const line1 = "Hi I am Jitu Nayak";
  const line2 = "Full stack Developer";
  const line3 = "based in Banglore, India 🇨🇮🇳";

  return (
    <div className="flex flex-row justify-between px-10 py-20">
      <div className="flex flex-col justify-center  font-mono">
        <motion.h3
          className="py-20"
          variants={sentence}
          initial="hidden"
          animate="visible"
        >
          <div className="my-1 text-2xl font-medium">
            {line1.split("").map((char, index) => {
              return (
                <motion.span key={char + "-" + index} variants={letter}>
                  {char}
                </motion.span>
              );
            })}
          </div>
          <div className="my-1 font-serif text-3xl font-bold sm:text-4xl md:text-6xl xl:text-7xl">
            {line2.split("").map((char, index) => {
              return (
                <motion.span key={char + "-" + index} variants={letter}>
                  {char}
                </motion.span>
              );
            })}
          </div>
          <div className="my-1 font-serif text-3xl">
            {line3.split("").map((char, index) => {
              return (
                <motion.span key={char + "-" + index} variants={letter}>
                  {char}
                </motion.span>
              );
            })}
          </div>
        </motion.h3>

        {/* <span className="my-10 text-2xl">
          Hi, I am a Fullstack Software Developer
        </span>
        <span className="text-6xl">Er.Jitu Nayak</span>
        <span className="py-4 text-base">based in Banglore, INDIA</span> */}
        <button
          className="mt-4 flex w-fit flex-row items-center  justify-center rounded-sm bg-yellow-400 py-2 px-6  font-sans font-semibold text-zinc-900 hover:bg-white"
          onClick={() => alert("Not yet added")}
        >
          <FiDownload className="mr-2 h-5 w-5" /> Download My Resume
        </button>
      </div>
      <div className="space-y-2">
        <a
          href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=jitunayak715@gmail.com&tf=1"
          target="_blank"
          rel="noreferrer"
        >
          <div className="my-3 flex w-fit items-center">
            <FiMail className="mr-2 h-5 w-5" /> jitunayak715@gmail.com
          </div>
        </a>
        <a href="https://github.com/jitunayak" target="_blank" rel="noreferrer">
          <div className="my-3 flex w-fit items-center">
            <FiGithub className="mr-2 h-5 w-5" />
            github.com/jitunayak
          </div>
        </a>
        <a
          href="https://www.linkedin.com/in/jitu-nayak/"
          target="_blank"
          rel="noreferrer"
        >
          <div className="my-3 flex w-fit items-center">
            <FiLinkedin className="mr-2 h-5 w-5" />
            Linkedin
          </div>
        </a>
      </div>
    </div>
  );
}
