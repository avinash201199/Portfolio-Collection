import React, { Fragment } from "react";
import classes from "./details.module.css";
import About from "../about/about";

import Typed from "typed.js";
import DownloadIcon from "@mui/icons-material/Download";
import { useEffect, useRef } from "react";
import Dhanush_Resume from "../Assests/Dhanush_Resume.pdf"

import { Button } from "react-bootstrap";

const Details = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Dhanush", "a web developer", "exploring web3"], // Strings to display
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <Fragment>
      <section className={classes.main_section}>
        <div className={classes.detail}>
          <div className={classes.text_div}>
            <h1 className={classes.big_text}>
              I'm <span style={{ color: "#FAFA33" }} ref={el}></span>{" "}
            </h1>

            <p>
            I'm glad you're here! Check out my portfolio You Will Find All My Details And Work,Have Fun!
       
            </p>
            <Button
              style={{
                backgroundColor: "wheat",
                color: "yellow",
                cursor: "pointer",
              }}
              size="sm"
            >
              <DownloadIcon style={{ color: "black" }} />
              <a
                href={Dhanush_Resume}
                style={{ textDecoration: "none", color: "black" }}
                download
              >
                Resume
              </a>
            </Button>
          </div>
          <div
            className={classes.image}
            data-aos="fade-left"
            data-aos-delay="100"
            data-aos-duration="1000"
          >
            <img
              src="https://images.unsplash.com/photo-1545665277-5937489579f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
              alt="dhanush"
            />
          </div>
        </div>
      </section>

      <About />
    </Fragment>
  );
};

export default Details;
