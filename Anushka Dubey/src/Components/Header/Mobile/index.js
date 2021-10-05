import React from 'react';
import './mobile.css';

function Mobile({isOpen, setIsOpen}) {
    return (
        <div className="mobile">
            <div className="closeIcon" onClick={()=> setIsOpen(!isOpen)}>
            <i className="fi-rr-cross-small"></i>
            </div>
            <div className="mobileOptions">
            <div className="mobileOption">
                <a href="#aboutme">About</a>
            </div>
            <div className="mobileOption">
                <a href="#projects">Projects</a>
            </div>
            <div className="mobileOption">
                <a href="#skills">Skills</a>
            </div>
            <div className="mobileOption">
                <a href="#contactme">Contact</a>
            </div>
            </div>
            
        </div>
    )
}

export default Mobile
