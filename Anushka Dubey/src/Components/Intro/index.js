import React from 'react';
import "./intro.css";

function Intro() {
    return (
        <div className="intro">
            <div>
                <img src={require("../../Assets/intropic.jpg").default} alt="" className="introPic"/>
            </div>
            <div className="introContent">Your Name</div>
            <div className="introContent2">Your Status</div>
        </div>
    )
}

export default Intro
