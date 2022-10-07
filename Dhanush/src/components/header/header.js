import { NavLink } from "react-router-dom";
import classes from "./header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import CodeSharpIcon from "@mui/icons-material/CodeSharp";

const NavBar = () => {
  return (
    <div className={classes.container}>
      <div className={classes.wraper}>
        <div className={classes.left}>
          <div
            className={classes.name}
            data-aos="fade-down"
            data-aos-delay="50"
            data-aos-duration="1000"
          >
            {/* <a href="/" style={{ color: "#3500d3" }}>

              <CodeSharpIcon sx={{ fontSize: "50px" }} />
            </a> */}
            {/* <h2>Dhanush .</h2> */}
            <div className={classes.imgdiv}>
              <img
                src="https://cdn-icons-png.flaticon.com/512/711/711284.png"
                style={{ color: "wheat", backgroundColor: "wheat" }}
                alt="icon"
              />
            </div>
          </div>
        </div>
        <div className={classes.right}>
          <div
            className={classes.link}
            data-aos="fade-down"
            data-aos-delay="100"
            data-aos-duration="1000"
          >
            <NavLink to="/" style={{ color: "wheat" }}>
              <a class="nav-link" href="#" style={{ color: "wheat" }}>
                Home
              </a>
            </NavLink>
          </div>
          <div
            className={classes.link}
            data-aos="fade-down"
            data-aos-delay="100"
            data-aos-duration="1000"
          >
            <NavLink to="/projects">
              <a class="nav-link" href="" style={{ color: "wheat" }}>
                Projects
              </a>
            </NavLink>
          </div>

          <div
            className={classes.link}
            data-aos="fade-down"
            data-aos-delay="50"
            data-aos-duration="1000"
          >
            <NavLink to="/contact">
              <a class="nav-link" style={{ color: "wheat" }}>
                Contact
              </a>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
