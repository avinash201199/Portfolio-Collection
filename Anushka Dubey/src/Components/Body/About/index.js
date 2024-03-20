import React from 'react';
import "./about.css";

function About() {
    return (
        <div className="about">
            <label className="sectionTitle">About me</label>
            <div className="aboutInfo">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur commodi voluptatum dolores tempora, saepe at quo minus eveniet voluptate repellat quas aliquid cumque accusantium eum id accusamus eius doloremque? Quas!</p>
            </div>
            <div className="aboutPicture">
                <img src={require("../../../Assets/Codinganime.png").default} alt="" className="aboutPictureLogo" />
        </div>
        </div>
    );
}
export default About
