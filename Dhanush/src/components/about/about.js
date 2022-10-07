import React, { Fragment } from "react";
import classes from "./about.module.css";
import Skills from "../skills/skills";

import AOS from "aos";
import "aos/dist/aos.css";
import Coder_img from "../Assests/Coder_img.jpg";

AOS.init();
const About = () => {
  return (
    <Fragment>
      <section id="#about" className={classes.container}>
        <div className={classes.container_inside}>
          <div className={classes.line}>
            <span className={classes.divider}></span>
          </div>
          <div className={classes.title}>
            <h1>About Me</h1>
          </div>
          <div className={classes.content}>
            <div
              className={classes.detail}
              data-aos="fade-right"
              data-aos-delay="100"
              data-aos-duration="1000"
            >
              <h1>Dhanush</h1>
              <p>
                Hi all,i am dhanush student at vellore institute of technology Aspiring
                Software Engineer,Always loves to build things and explore
                latest technologies present i am Exploring Web3
              </p>
            </div>
            <div
              className={classes.image}
              data-aos="fade-left"
              data-aos-delay="100"
              data-aos-duration="1000"
            >
              <img src={Coder_img} alt="dhanush"></img>
            </div>
          </div>
        </div>
      </section>

      <Skills />
    </Fragment>
  );
};

export default About;
