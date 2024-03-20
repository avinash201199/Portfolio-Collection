import React from 'react';
import "./web.css";

function Web() {
    return (
        <div className="web">
            <div className="webOption">
                <a href="#aboutme">About</a>
            </div>
            <div className="webOption">
                <a href="#projects">Projects</a>
            </div>
            <div className="webOption">
                <a href="#skills">Skills</a>
            </div>
            <div className="webOption">
                <a href="#contactme">Contact</a>
            </div>
        </div>
    );
}

export default Web
