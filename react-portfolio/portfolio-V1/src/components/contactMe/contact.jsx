import React from "react";
import "./contact.css";
import  ContactInfoCard from "./contactInfoCard";

const ContactMe = () => {
  return (
	<section className="contact-container">
	  <h5>Connect with Me</h5>
	  <br /><br />
	  <div className="contact-content">
		<div style={{ flex: 1 }}>
		  <ContactInfoCard
			iconUrl="./gmail.png"
			text="trahulprabhu38.com"
		  />
		  < ContactInfoCard
			iconUrl="./github.png"
			link="https://github.com/T-Rahul-prabhu-38"
			text="T-Rahul-Prabhu-38"
		  />
	  </div>
	  <div style={{ flex: 1 }}>
	  		< ContactInfoCard
				iconUrl="./linkedIn.png"
				link="https://www.linkedin.com/in/trahulprabhu38/"
				text="trahulprabhu38"
		  	/>
		   	< ContactInfoCard
				iconUrl="./leetcode.png"
				link="https://leetcode.com/u/trahulprabhu38/"
				text = "trahulprabhu38"
		  	/>

	  </div>
	  
	  {/* <div style={{ flex: 1 }}> */}
		{/* <ContactForm /> */}
	  </div>
	  {/* </div> */}
	</section>
  );
};

export default ContactMe;