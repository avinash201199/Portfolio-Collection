import React from "react";
import NavBar from "../../custom_components/navbar/NavBar";
import About from "../../assets/about.svg";
import "./AboutPage.css";
import { Link } from "react-router-dom";

function AboutPage() {
  const aboutContent = [
    "I am a full-stack web-developer based in India. ",
    "I started coding back in 2020 during the lockdown. From knowing nothing to building something I have come a long way. But this is just the start. ",
    "I love making dynamic and 3d sites. I write all my styles in CSS and that is my favorite language. I mostly use React to do all my works. ",
  ];
  return (
    <div className="AboutPage">
      <NavBar />
      <div className="AboutPage-container">
        <div className="AboutPage-left">
          <img className="AboutPage-profile-pic" src={About} alt="about-pic" />
        </div>
        <div className="AboutPage-right">
          {aboutContent.map((text, index) => {
            return (
              <div key={index} className="AboutPage-content">
                {text}
              </div>
            );
          })}
          <div className="AboutPage-project">
            <Link className="AboutPage-project-button" to="/projects">
              See some of my projects
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
