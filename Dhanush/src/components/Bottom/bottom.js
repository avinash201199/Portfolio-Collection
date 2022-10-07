import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from '@mui/icons-material/Facebook';
import classes from "./Bottom.module.css";
// import { } from "@fortawesome/free-solid-svg-icons"

// // GrTwitter
// import {FontAwesomeIcon} from "@fortawesome/fontawesome-free";
// import { FontAwesomeIcon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Bottom = () => {
  const date = new Date();
  console.log(date.getFullYear);

  return (
    <footer className={classes.sticky_footer}>
      <div className={classes.connect}>
        <div className={classes.links}>
          <div data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="50">
            <a href="https://www.linkedin.com/in/dhanush-vellasiri-9a495021b/">
              <LinkedInIcon style={{ fontSize: "40px" }} />
            </a>
          </div>
          <div data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="50">
            <a href="https://github.com/Dhanush-2605">
              <GitHubIcon style={{ fontSize: "40px" }} />
            </a>
          </div>
          <div data-aos="zoom-in" data-aos-delay="50" data-aos-duration="1000">
            <a href="https://www.instagram.com/dhanush.vellasiri/">
              <InstagramIcon style={{ fontSize: "40px" }} />
            </a>
          </div>
          <div data-aos="zoom-in" data-aos-delay="50" data-aos-duration="1000">
            <a href="https://www.facebook.com/profile.php?id=100072975470828">
              <FacebookIcon style={{ fontSize: "40px" }} />
            </a>
          </div>
        </div>
        <p>&copy;Dhanush {date.getFullYear()}</p>
      </div>
    </footer>
  );
};
export default Bottom;
