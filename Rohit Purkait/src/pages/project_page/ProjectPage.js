import React, { useEffect } from "react";
import NavBar from "../../custom_components/navbar/NavBar";
import Project1 from "../../assets/animelife.jpg";
import Project2 from "../../assets/covid.jpg";
import Project3 from "../../assets/envisage.jpg";
import Project4 from "../../assets/rohchat.jpg";
import Project from "../../assets/project.svg";
import "./ProjectPage.css";

function ProjectPage() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  const projectNames = ["AnimeLife", "MyBondhu", "Envisage", "RohChat"];
  const projectLinks = [
    "https://animelife.netlify.app/",
    "https://help-hands.netlify.app/",
    "https://iic-envisage.netlify.app/",
    "https://rohchat.netlify.app/",
  ];
  const projectDescription = [
    "This is brand that I made for helping content creators get innovative quotes with just a single click. Since, I love anime so, this shows my contribution towards the community. The frontend is made with React and the backend is made with FastApi. The quotes are generated from a public rest api.",
    "For the Front End we used ReactJs and CSS and for the BackEnd we used NodeJS and MongoDb. This helps to find all the resources in times of emergency. All the data are fetched from the Cowin Api.",
    "This is coded in vanilla HTML, CSS and JavaScript. This website is used for all the people to register into the biggest event of Institution’s Innovative Council and it’s one of the biggest fest in Eastern India.",
    "A simple app made for chatting with a bot. Users will also be able to change the layout and the screen color of the mobile. It is made with vanilla HTML, CSS and JavaScript. The responses of the bot is pre-written so, don't try to have an actual conversation. You'll be disappointed.",
  ];
  const projectPics = [Project1, Project2, Project3, Project4];
  return (
    <div className="ProjectPage">
      <NavBar />
      <div className="ProjectPage-container">
        <div className="ProjectPage-left">
          <img
            className="ProjectPage-profile-pic"
            src={Project}
            alt="project-pic"
          />
        </div>
        <div className="ProjectPage-right">
          {projectNames.map((projectName, index) => {
            return (
              <div key={index} className="ProjectPage-card">
                <div className="ProjectPage-card-i">
                  <img
                    className="ProjectPage-img"
                    src={projectPics[index]}
                    alt="..."
                  />
                </div>
                <div className="ProjectPage-title">{projectName}</div>
                <div className="ProjectPage-description">
                  {projectDescription[index]}
                </div>
                <div className="ProjectPage-explore">
                  <a
                    href={projectLinks[index]}
                    target="_blank"
                    rel="noreferrer"
                    className="ProjectPage-button"
                  >
                    Explore
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ProjectPage;
