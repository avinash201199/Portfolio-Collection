import React from 'react'
// import "../styles/Navbar.css"
// import "../styles/responsive.css"
import { GiHamburgerMenu } from "react-icons/gi"






const Navbar = () => {

   

    return (
        <div>
            <nav className="navbar">
                <div className="max-width">
                    <div className="logo"><a href="#home">Portfo<span>lio.</span></a></div>
                    <ul className="menu">
                        <li><a href="#home" className="menu-btn">Home</a></li>
                        <li><a href="#about" className="menu-btn">About</a></li>
                        <li><a href="#services" className="menu-btn">Services</a></li>
                        <li><a href="#skills" className="menu-btn">Skills</a></li>
                        <li><a href="#projects" className="menu-btn">Projects</a></li>
                        <li><a href="#contact" className="menu-btn">Contact</a></li>
                    </ul>
                    <div className="menu-btn">

                        <i class="fas fa-bars"></i>

                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar


