import React from 'react';
import { SkillsData } from '../../Data/skills';
import Separator from '../../Separator';
import "./skills.css";

function Skills() {
    const data = SkillsData;
    return (
        <div className="skills">
            <Separator />
            <label className="sectionTitle">Skills</label>
            <div className="skillsContainer">
                {data.map((item)=>{
                    return(
                        <div className="skillsSection">
                            <label className="skillsSectionTitle">{item.type}</label>
                            <div className="skillsList">
                                {item.list.map((skill)=>{
                                    return(
                                        <div className="skillCard">
                                            <div className="skillIcon">{skill.icon}</div>
                                            <label className="skillName">{skill.name}</label>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    )
                }
                )}
            </div>
        </div>
    )
}

export default Skills
