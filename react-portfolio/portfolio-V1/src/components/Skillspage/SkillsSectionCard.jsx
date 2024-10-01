import React from 'react';
import './SkillsSectionCard.css';


const SkillsSectionCard = ({ title, count, isActive, onClick }) => {

  return (
	<div className={`skills-card1 ${isActive ? "active" : ""}`} onClick={onClick}>
	  <div className="skill-icon">
		{count}
	  </div>
	  <span>{title}</span>
	</div>
  );
};

export default SkillsSectionCard;