import React from "react";
import "./SoftwareSkill.scss";
import {
  SiDjango,
  SiFlutter,
  SiHtml5,
  SiCss3,
  SiStyledComponents,
  SiSass,
  SiJavascript,
  SiReact,
  SiNodeDotJs,
  SiC,
  SiCplusplus,
  SiFlask,
  SiBootstrap,
  SiPython,
  SiHeroku,
  SiFirebase,
  SiLinux
}
  from "react-icons/si";

export default function SoftwareSkill() {
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          <li className="software-skill-inline">
            <i><SiHtml5 /></i>
            <p>html-5</p>
          </li>
          <li className="software-skill-inline">
            <i><SiCss3 /></i>
            <p>css3</p>
          </li>
          <li className="software-skill-inline">
            <i><SiStyledComponents /></i>
            <p>StyledComponents</p>
          </li>
          <li className="software-skill-inline">
            <i><SiSass /></i>
            <p>sass</p>
          </li>
          <li className="software-skill-inline">
            <i><SiJavascript /></i>
            <p>JavaScript</p>
          </li>
          <li className="software-skill-inline">
            <i><SiBootstrap /></i>
            <p>Bootstrap</p>
          </li>
          <li className="software-skill-inline">
            <i><SiReact /></i>
            <p>reactjs</p>
          </li>
          <li className="software-skill-inline">
            <i><SiDjango /></i>
            <p>django</p>
          </li>
          <li className="software-skill-inline">
            <i><SiFlask /></i>
            <p>flask</p>
          </li>
          <li className="software-skill-inline">
            <i><SiNodeDotJs /></i>
            <p>nodejs</p>
          </li>
          <li className="software-skill-inline">
            <i><SiFlutter /></i>
            <p>flutter</p>
          </li>
          <li className="software-skill-inline">
            <i><SiPython /></i>
            <p>python</p>
          </li>
          <li className="software-skill-inline">
            <i><SiC /></i>
            <p>c</p>
          </li>
          <li className="software-skill-inline">
            <i><SiCplusplus /></i>
            <p>c++</p>
          </li>
          <li className="software-skill-inline">
            <i><SiHeroku /></i>
            <p>heroku</p>
          </li>
          <li className="software-skill-inline">
            <i><SiFirebase /></i>
            <p>firebase</p>
          </li>
          <li className="software-skill-inline">
            <i><SiLinux /></i>
            <p>linux</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
