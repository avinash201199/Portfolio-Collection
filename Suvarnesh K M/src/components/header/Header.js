import React, { useContext } from "react";
import Headroom from "react-headroom";
import "./Header.scss";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import StyleContext from "../../contexts/StyleContext";
import {
  greeting,
  workExperiences,
  skillsSection,
  achievementSection,
  educationInfo,
  bigProjects
} from "../../portfolio";
import Typist from 'react-typist';


function Header() {
  const { isDark } = useContext(StyleContext);
  const viewExperience = workExperiences.display;
  const viewSkills = skillsSection.display;
  const viewAchievement = achievementSection.display;
  const viewEducation = educationInfo.display;
  const viewProjects = bigProjects.display;


  return (
    <Headroom>
      <header className={isDark ? "dark-menu header" : "header"}>
        <Typist cursor={{ show: false }}>
          <a href="/" className="logo">
            <span className="grey-color"> &lt;</span>
            <span className="logo-name">{greeting.username}</span>
            <span className="grey-color">/&gt;</span>
          </a>
        </Typist>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon"
          htmlFor="menu-btn"
          style={{ color: "white" }}
        >
          <span className={isDark ? "navicon navicon-dark" : "navicon"}></span>
        </label>
        <ul className={isDark ? "dark-menu menu" : "menu"}>
          {viewSkills && (
            <li>
              <a href="#skills">Skills</a>
            </li>
          )}
          {viewEducation && (
            <li>
              <a href="#education">Education</a>
            </li>
          )}
          {viewExperience && (
            <li>
              <a href="#experience">Work Experiences</a>
            </li>
          )}
          {viewProjects && (
            <li>
              <a href="#projects">Projects</a>
            </li>
          )}
          {viewAchievement && (
            <li>
              <a href="#achievements">Achievements</a>
            </li>
          )}
          <li>
            <a href="#contact">Contact Me</a>
          </li>
          <li>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a>
              <ToggleSwitch />
            </a>
          </li>
        </ul>
      </header>
    </Headroom>
  );
}
export default Header;
