import React, { useEffect, useRef } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Mypic from "./assets/images/mypic.jpg";
import Typed from "typed.js";
import { motion } from 'framer-motion';
import "./font.css";
import "./Home.css";

import Button from 'react-bootstrap/Button';

export default function Home() {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(".typed", {
      strings: [
        "UI Designer",
        "Web Developer",
        "IoT Enthusiast",
        "Microprocessor Aficionado",
      ],
      typeSpeed: 50,
      loop: true,
      loopCount: Infinity,
    });

    typedRef.current = typed;

    return () => {
      typedRef.current.destroy();
    };
  }, []);

  const handleEmailClick = () => {
    window.open('mailto:pratikmali242005@gmail.com', '_blank');
  };

  const handleLinkedInClick = () => {
    window.open('https://www.linkedin.com/in/pratikmali24/', '_blank');
  };

  const handleGitHubClick = () => {
    window.open('https://github.com/Pratik2401', '_blank');
  };

  const handleLeetCodeClick = () => {
    window.open('https://leetcode.com/u/pratikmali242005/', '_blank');
  };

  return (
    <Container className="d-flex align-items-center homebody" id="home">
      <Row className="justify-content-center margin_body">
        <Col md={6} className="text-light margin_info">
          <motion.p
            className="intro fs-1"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Hi, It's <span className="home_name">Pratik</span>
          </motion.p>
          <motion.p
            className="field fs-2"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            I'm a <span className="typed"></span>
          </motion.p>
          <motion.p
            className="info fs-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            Delving into AI & Data Science, I channel my passion into
            captivating website development. My portfolio highlights dynamic,
            responsive designs that showcase innovation. Exploring AI, IoT, and
            microprocessors, I blend creativity with technical skill to craft
            compelling digital experiences.
          </motion.p>

          <div className="links d-flex" >
            <motion.div className="link email justify-content-center" onClick={handleEmailClick}  whileHover={{ scale: 1.1, rotate: 10 }}
              transition={{ duration: 0.3 }}>
            <motion.svg
             initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }} width="25px" height="25px" viewBox="0 -2.5 20 20" xmlns="http://www.w3.org/2000/svg">
<g id="SVGRepo_bgCarrier"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <title>email [#1572]</title> <desc>Created with Sketch.</desc>{" "}
                  <defs> </defs>{" "}
                  <g
                    id="Page-1"
                    stroke="none"
                    strokeWidth="1"
                    fillRule="evenodd"
                  >
                    {" "}
                    <g
                      id="Dribbble-Light-Preview"
                      transform="translate(-340.000000, -922.000000)"
                    >
                      {" "}
                      <g
                        id="icons"
                        transform="translate(56.000000, 160.000000)"
                      >
                        {" "}
                        <path
                          d="M294,774.474 L284,765.649 L284,777 L304,777 L304,765.649 L294,774.474 Z M294.001,771.812 L284,762.981 L284,762 L304,762 L304,762.981 L294.001,771.812 Z"
                          id="email-[#1572]"
                        >
                          {" "}
                        </path>{" "}
                      </g>{" "}
                    </g>{" "}
                  </g>{" "}
                </g>
</motion.svg>
            </motion.div>
            <motion.div className="link linkedin justify-content-center" onClick={handleLinkedInClick}  whileHover={{ scale: 1.1, rotate: 10 }}
              transition={{ duration: 0.3 }}>
            <motion.svg
             initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }} width="25px" height="25px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
  <path d="M28.778 1.004h-25.56c-1.199 0-2.172 0.964-2.186 2.159v25.672c0.014 1.196 0.987 2.161 2.186 2.161h25.555c1.2 0 2.175-0.963 2.194-2.159v-25.67c-0.019-1.197-0.994-2.161-2.195-2.161zM9.9 26.562h-4.454v-14.311h4.454zM7.674 10.293c-1.425 0-2.579-1.155-2.579-2.579s1.155-2.579 2.579-2.579c1.424 0 2.579 1.154 2.579 2.578 0 1.423-1.154 2.577-2.577 2.577zM26.556 26.562h-4.441v-6.959c0-1.66-0.034-3.795-2.314-3.795-2.316 0-2.669 1.806-2.669 3.673v7.082h-4.441v-14.311h4.266v1.951h0.058c0.828-1.395 2.326-2.315 4.039-2.315 0.061 0 0.121 0.001 0.181 0.003 4.5 0 5.332 2.962 5.332 6.817v7.855z"></path>
</motion.svg>
            </motion.div>
            <motion.div className="link github justify-content-center" onClick={handleGitHubClick}  whileHover={{ scale: 1.1, rotate: 10 }}
              transition={{ duration: 0.3 }}>
            <motion.svg
             initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }} width="25px" height="25px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <title>github [#142]</title>
                  <defs> </defs>{" "}
                  <g id="Page-1" strokeWidth="1" fillRule="evenodd">
                    {" "}
                    <g
                      id="Dribbble-Light-Preview"
                      transform="translate(-140.000000, -7559.000000)"
                    >
                      {" "}
                      <g
                        id="icons"
                        transform="translate(56.000000, 160.000000)"
                      >
                        {" "}
                        <path
                          d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399"
                          id="github-[#142]"
                        >
                          {" "}
                        </path>{" "}
                      </g>{" "}
                    </g>{" "}
                  </g>{" "}
                </g>
</motion.svg>
            </motion.div>
            <motion.div className="link leetcode justify-content-center" onClick={handleLeetCodeClick}  whileHover={{ scale: 1.1, rotate: 10 }}
              transition={{ duration: 0.3 }}>
            <motion.svg
             initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                width="25px"
                height="25px"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM8.53 13.47C8.82 13.76 8.82 14.24 8.53 14.53C8.38 14.68 8.19 14.75 8 14.75C7.81 14.75 7.62 14.68 7.47 14.53L5.47 12.53C5.18 12.24 5.18 11.76 5.47 11.47L7.47 9.47C7.76 9.18 8.24 9.18 8.53 9.47C8.82 9.76 8.82 10.24 8.53 10.53L7.06 12L8.53 13.47ZM13.69 9.96L11.69 14.63C11.57 14.91 11.29 15.08 11 15.08C10.9 15.08 10.8 15.06 10.71 15.02C10.33 14.86 10.15 14.42 10.32 14.03L12.32 9.36C12.48 8.98 12.92 8.8 13.3 8.97C13.68 9.14 13.85 9.58 13.69 9.96ZM18.53 12.53L16.53 14.53C16.38 14.68 16.19 14.75 16 14.75C15.81 14.75 15.62 14.68 15.47 14.53C15.18 14.24 15.18 13.76 15.47 13.47L16.94 12L15.47 10.53C15.18 10.24 15.18 9.76 15.47 9.47C15.76 9.18 16.24 9.18 16.53 9.47L18.53 11.47C18.82 11.76 18.82 12.24 18.53 12.53Z"></path>
              </motion.svg>
            </motion.div>
          </div>
          <motion.div
            className="cv-btn-wrapper"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.5 }}
          >
            <Button
              variant="primary"
              href="./my_cv/My_CV.pdf"
              download="Pratik_Mali-CV"
              target="_blank"
              className='cv_btn'
            >
              <strong>Download CV</strong>
            </Button>
          </motion.div>
        </Col>
        <Col md={6} className="text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <Image
              src={Mypic}
              alt="Pratik"
              className="img-fluid rounded-circle"
            />
          </motion.div>
        </Col>
      </Row>
    </Container>
  );
}
