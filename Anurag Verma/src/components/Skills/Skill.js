import { useState } from "react";
import Project from "../Project/Project";
import "./Skill.css";

const Skills = (props) => {
  const [projects, setProjects] = useState(false);

  const setProjectHandler = () => {
    setProjects(true);
    console.log(projects);
  };

  // const buttonClicked = (isClicked) => {
  //   console.log(isClicked);
  //   setProjects(isClicked);
  //   console.log({ projects });
  // };

  const projectHandler = () => {
    setProjects(null);
  };

  return (
    <div className="webd">
      {projects && (
        <Project
          onClose={projects}
          props={setProjects}
          onConfirm={projectHandler}
        />
      )}
      <h1> Web Development Tech Stack </h1>
      <h2> Languages: {props.language} </h2>
      <h2> Frameworks: {props.framework} </h2>
      <div className="skills">
        <button
          className="project-button"
          onClick={() => {
            setProjectHandler();
          }}
        >
          Projects
        </button>
      </div>
    </div>
  );
};

export default Skills;
