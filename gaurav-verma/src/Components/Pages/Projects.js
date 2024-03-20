import reactmeals from "../Images/reactmeals.png";
import cardgame from "../Images/cardgame.png";
import trackme from "../Images/trackme.png";

import { ProjectSection } from "../Styled-components/ProjectSection";
import classes from "../Styles/Projects.module.scss";
import { Card } from "../Card/Card";
export const Projects = () => {
  const projectData = [
    {
      href: "https://Gaurav-Verma07.github.io/Project2_Game/",
      img: cardgame,
      code: "https://github.com/Gaurav-Verma07/Project2_Game",
      alt: "Game",
      about: [
        "Project 1",
        "A simple Card Game made with react",
        "Used adv. css properties for styling",
        "States are managed using various hooks ",
      ],
    },
    {
      href: "https://Gaurav-Verma07.github.io/Project3_GeoAPI/",
      img: trackme,
      alt: "TrackMe app",
      code: "https://github.com/Gaurav-Verma07/Project3_GeoAPI",
      about: [
        "Project 2",
        "Demonstrating the use of API",
        "Used GeoLocationAPI to fetch data",
        "Implemented the concepts of Promises",
      ],
    },
    {
      href: "https://Gaurav-Verma07.github.io/ReactProject1_reactMeals/",
      img: reactmeals,
      code: "https://github.com/Gaurav-Verma07/ReactProject1_reactMeals",
      alt: "ReactMeals app",
      about: [
        "Project 3",
        "A responsive dummy food ordering WebApp",
        "Used useContext hooks to spread data over components",
        "Adv. CSS flex properties are used for rendering",
      ],
    },
  ];
  return projectData.map((item, index) => {
    return (
      <div style={{ position: "relative" }}>
        <Card>
          <ProjectSection key={index} img={item.img}>
            {" "}
          </ProjectSection>
          <div className={classes["div"]}>
            <ul>
              {item.about.map((text, index) => {
                console.log("text= ", text + index);
                return <li key={text + index}>{text}</li>;
              })}
            </ul>
            <a target="_blank" rel="noreferrer" href={item.code}>
              Code Link
            </a>
            <a target="_blank" rel="noreferrer" href={item.href}>
              Go to website
            </a>
          </div>
        </Card>
      </div>
    );
  });
};
