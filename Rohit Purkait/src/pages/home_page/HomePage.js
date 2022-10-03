import React from "react";
import NavBar from "../../custom_components/navbar/NavBar";
import "./HomePage.css";
import Profile from "../../assets/profile.svg";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="HomePage">
      <NavBar />
      <div className="HomePage-container">
        <div className="HomePage-left">
          <div className="HomePage-title">Hey, I am Rohit Purkait</div>
          <div className="HomePage-sub-title">
            Full-Stack web developer and UI/UX designer
          </div>
          <div className="HomePage-explore">
            <Link className="HomePage-explore-button" to="/about">
              Know more about me
            </Link>
          </div>
        </div>
        <div className="HomePage-right">
          <img
            className="HomePage-profile-pic"
            src={Profile}
            alt="profile-pic"
          />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
