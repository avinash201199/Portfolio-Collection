import React from 'react';
import './SkillCard.css';


const SkillCard = ({ title, count, isActive, onClick }) => {

  return (
	<div className={`skills-card ${isActive ? "active" : ""}`} onClick={onClick}>
	  <div className="skill-icon">
		{count}
	  </div>
	  <span>{title}</span>
	</div>
  );
};

export default SkillCard;