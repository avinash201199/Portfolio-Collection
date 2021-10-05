import React from 'react';
import "./body.css";
import About from "./About/index.js";
import Projects from "./Projects/index.js";
import Skills from "./Skills/index.js";
import Contact from "./Contact/index.js";

function Body() {
    return (
        <div className="body">
            <section id="aboutme"><About /></section>
            <section id="projects"><Projects /></section>
            <section id="skills"><Skills /></section>
            <section id="contactme"><Contact /></section>
        </div>
    )
}

export default Body
