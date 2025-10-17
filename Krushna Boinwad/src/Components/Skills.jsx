import React from "react";
import ImageTrail from "./ImageTrail";
import react from "../assets/React.png";
import python from "../assets/python.webp";
import passportJS from "../assets/passportJS.png";
import nodejs from "../assets/nodejs.png";
import mongodb from "../assets/mongodb.png";
import javascript from "../assets/JavaScript.png";
import html from "../assets/html.webp";
import github from "../assets/github.png";
import git from "../assets/git.png";
import firebase from "../assets/firebase.png";
import fastapi from "../assets/fastapi.png";
import docker from "../assets/docker.png";
import css from "../assets/css.png";
import aws from "../assets/aws.png";
import cloudinary from "../assets/cloudinary.png";
import sql from "../assets/sql.png";

export default function Skills() {
  const skillIcons = [
    react, python, passportJS, nodejs, mongodb, javascript, html,
    github, git, firebase, fastapi, docker, css, aws, cloudinary, sql
  ];

  return (
    <section id="skills" className="w-full py-20 px-6 md:px-16 lg:px-32 flex flex-col items-center">
      <h2 className="text-4xl md:text-5xl font-bold text-white">Skills</h2>
      <p className="text-center text-violet-500 text-3xl font-bold">Hover below</p>
      <div className="w-full h-[500px] relative border border-dashed border-2">
        <ImageTrail items={skillIcons} variant={1} />
      </div>
    </section>
  );
}
