import React from 'react';
import "./projects.css";
import {ProjectData} from "../../Data/projects.js"
import Separator from '../../Separator';

function Projects() {
    const data = ProjectData;
    return (
        <div className="projects">
            <Separator />
            <label className="sectionTitle">Projects</label>
            <div>
                {data.map((project)=>{
                    return(
                     <div className="projectCard">
                         <div className="projectInfo">
                             <label className="projectTitle">{project.title}</label>
                             <div className="projectLinks">
                             {project.demo && (<a href={project.demo} className="projectLink">
                                 <div className="linkButton">
                                 <i className="fi-rr-globe"></i>Demo
                                 </div>
                                 </a>)}
                                {project.github && (<a href={project.github} className="projectGit">
                                 <div className="GitButton">
                                 <i className="devicon-github-original colored"></i>Github
                                 </div>
                                 </a>)}
                            </div>
                            <p>{project.about}</p>
                            <div className="projectTags">
                                {project.tags.map((tag)=>{
                                    return(<label className="tag">{tag}</label>)
                                })}
                            </div>
                         </div>
                         <img src={project.image} alt="" className="projectPic" />
                     </div>   
                    )
                }
                )}
            </div>
        </div>
    )
}

export default Projects
