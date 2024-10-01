import React, { useState } from "react";
import "./Skills.css";
import { Skills } from "../../data/data";
import SkillCard from "./SkillCard";


const SkillSection = () => {
  const handleSelectSkill = (data) => {
    setSkill(data);
  };

return (
    <>
        <div id="skills">
            <section className="skills-container">
                <h2>Technical Proficiency</h2>
                <div className="skills-content">
                    <div className="skills">
                        {Skills.map((item) => (
                            <SkillCard
                                key={item.key}
                                count={item.count}
                                title={item.title}
                                onClick={() => {
                                    handleSelectSkill(item);
                                }}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    </>
);
};

export default SkillSection;
