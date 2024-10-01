import React from "react";
import "./contactInfoCard.css";

const ContactInfoCard = ({ iconUrl, text,link }) => {
  return (
	<div className="contact-details-card">
	  <div className="icon">
		<img src={iconUrl} alt={text} />
	  </div>
	 	{iconUrl==="./gmail.png"? <p>{text}</p> : <a href={link} target="_blank">{text}</a>}
	</div>
  );
};

export default ContactInfoCard;