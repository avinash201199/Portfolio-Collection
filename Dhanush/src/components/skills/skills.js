import React, { Fragment } from "react";
import classes from "./skills.module.css";
import Bottom from "../Bottom/bottom";
const Skills = () => {
  return (
    <Fragment>
      <div className={classes.line}>
        {/* <p className="border"/> */}
        <span className={classes.divider}></span>
      </div>

      <section className={classes.section}>
        <div className={classes.container}>
          <div className={classes.text}>
            <h1>My Skills</h1>
          </div>
          <div className={classes.image}>
            <div data-aos-duration="1000" data-aos="zoom-in">
              <img
                src="https://cdn1.iconfinder.com/data/icons/logotypes/32/badge-html-5-512.png"
                alt="Html"
              ></img>
            </div>
            <div data-aos-duration="1000" data-aos="zoom-in">
              <img
                src="https://cdn1.iconfinder.com/data/icons/logotypes/32/badge-css-3-1024.png"
                alt="Css"
              ></img>
            </div>
            <div data-aos-duration="1000" data-aos="zoom-in">
              <img
                src="https://cdn2.iconfinder.com/data/icons/designer-skills/128/code-programming-javascript-software-develop-command-language-512.png"
                alt="javascript"
              ></img>
            </div>
            <div data-aos-duration="1000" data-aos="zoom-in">
              <img
                src="https://cdn0.iconfinder.com/data/icons/logos-brands-in-colors/128/react_color-512.png"
                alt="React"
              ></img>
            </div>
            <div data-aos-duration="1000" data-aos="zoom-in">
              <img
                src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCAyMjYgMjI2Ij48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBmb250LWZhbWlseT0ibm9uZSIgZm9udC13ZWlnaHQ9Im5vbmUiIGZvbnQtc2l6ZT0ibm9uZSIgdGV4dC1hbmNob3I9Im5vbmUiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNMCwyMjZ2LTIyNmgyMjZ2MjI2eiIgZmlsbD0ibm9uZSI+PC9wYXRoPjxnIGZpbGw9IiNlY2YwZjEiPjxwYXRoIGQ9Ik01MS42NDEsODEuMzZsMjkuMDA0ODQsNDkuNzJsMjkuMDAwMzIsLTQ5Ljcyek0xMDkuNjUwNjgsNzIuMzJsLTI5LjAwNDg0LC00OS43MmwtMjkuMDA0ODQsNDkuNzJ6TTEyNS4zODkzMiw3Mi4zMmg1OC4wMDk2OGwtMjkuMDA0ODQsLTQ5LjcyNDUyek04OC40NzksMTguMDhsMjkuMDQxLDQ5Ljc4MzI4bDI5LjAzNjQ4LC00OS43ODMyOHpNMTc0LjM1OSwxNDQuNjRsLTI5LjAwNDg0LC00OS43MmwtMjkuMDAwMzIsNDkuNzJ6TTExNi4zNDkzMiwxNTMuNjhsMjkuMDA0ODQsNDkuNzJsMjkuMDA0ODQsLTQ5Ljcyek0xMDAuNjEwNjgsMTUzLjY4aC01OC4wMDk2OGwyOS4wMDQ4NCw0OS43MnpNMTM3LjUyMSwyMDcuOTJsLTI5LjA0MSwtNDkuNzgzMjhsLTI5LjAzNjQ4LDQ5Ljc4MzI4eiI+PC9wYXRoPjwvZz48L2c+PC9zdmc+" 
                alt="Solidity"
              ></img>
            </div>
            <div data-aos-duration="1000" data-aos="zoom-in">
              <img
                src="https://cdn4.iconfinder.com/data/icons/logos-3/456/nodejs-new-pantone-black-512.png"
                alt="nodejs"
              ></img>
            </div>
            <div data-aos-duration="1000" data-aos="zoom-in">
              <img
                src="https://cdn4.iconfinder.com/data/icons/logos-3/512/mongodb-2-512.png"
                alt="mongodb"
              ></img>
            </div>
            <div data-aos-duration="1000" data-aos="zoom-in">
              <img
                src="https://cdn3.iconfinder.com/data/icons/social-media-2169/24/social_media_social_media_logo_git-512.png"
                alt="git"
              ></img>
            </div>
            <div data-aos-duration="1000" data-aos="zoom-in">
              <img
                src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/181_Java_logo_logos-512.png"
                alt="java"
              ></img>
            </div>
            <div data-aos-duration="1000" data-aos="zoom-in">
              <img
                src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/267_Python_logo-512.png"
                alt="python"
              ></img>
            </div>
          </div>
        </div>
        <Bottom />
      </section>
     
    </Fragment>
  );
};

export default Skills;
