import React from "react";
import NavBar from "../../custom_components/navbar/NavBar";
import "./ExperiencePage.css";
import Experience from "../../assets/experience.svg";

function ExperiencePage() {
  const companyNames = ["TraxSmart", "SixInterns", "Sparks Foundation"];
  const experienceDescription = [
    " I work as a Front-End Engineer at TraxSmart",
    "I worked as a FrontEnd Developer and UI/UX designer at SixInterns",
    "I worked as a FullStack Developer at Sparks Foundation",
  ];

  return (
    <div className="ExperiencePage">
      <NavBar />
      <div className="ExperiencePage-container">
        <div className="ExperiencePage-left">
          {companyNames.map((companyName, index) => {
            return (
              <div className="ExperiencePage-work-block" key={index}>
                <div className="ExperiencePage-title">{companyName}</div>
                <div className="ExperiencePage-description">
                  {experienceDescription[index]}
                </div>
              </div>
            );
          })}
        </div>
        <div className="ExperiencePage-right">
          <img className="ExperiencePage-image" src={Experience} alt="..." />
        </div>
      </div>
    </div>
  );
}

export default ExperiencePage;
