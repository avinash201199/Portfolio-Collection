import React from "react";
import { BsLinkedin, BsInstagram, BsGithub } from "react-icons/bs";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <a
        href="https://www.linkedin.com/in/ayush-kumar-864b33229/"
        target="__blank"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/ayushsaha1018" target="__blank">
        <BsGithub />
      </a>
      <a href="https://www.instagram.com/ayush_saha18/" target="__blank">
        <BsInstagram />
      </a>
    </div>
  );
};

export default SocialMedia;
