import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const [sideBar, setSideBar] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];


  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      links.forEach(({ id }) => {
        const section = document.getElementById(id);
        if (section) {
          if (
            scrollPos >= section.offsetTop - 120 &&
            scrollPos < section.offsetTop + section.offsetHeight
          ) {
            setActiveSection(id);
          }
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Mobile Sidebar */}
      <div
        className={`${
          sideBar ? "translate-x-0" : "-translate-x-full"
        } fixed top-0 left-0 w-[80%] h-full bg-white/95 backdrop-blur-md z-50 p-8 flex flex-col gap-6 transition-transform duration-300`}
      >
        <div className="flex justify-end text-2xl ">
          <FontAwesomeIcon icon={faXmark} onClick={() => setSideBar(false)} />
        </div>
        {links.map(({ id, label }) => (
          <Link
            key={id}
            to={id}
            smooth={true}
            offset={-100}
            duration={500}
            onClick={() => setSideBar(false)}
            className={`cursor-pointer text-lg cursor-target transition ${
              activeSection === id
                ? "text-blue-600 font-semibold"
                : "text-gray-700"
            }`}
          >
            {label}
          </Link>
        ))}
      </div>

      {/* Navbar */}
      <nav className="fixed top-5 left-0 right-0 z-50 px-6 sm:px-10 md:px-16 py-3 flex justify-between items-center bg-white/10 backdrop-blur-sm shadow-md rounded-full border border-white/20">
        {/* Logo */}
        <Link
          to="home"
          smooth={true}
          offset={-100}
          duration={500}
          className="text-2xl font-bold text-blue-600 cursor-pointer cursor-target"
        >
          <img src="/modernK.png" alt="" className="w-[100px]" />
        </Link>

        {/* Desktop Links */}
        <div className="hidden sm:flex gap-10 font-bold text-lg">
          {links.map(({ id, label }) => (
            <Link
              key={id}
              to={id}
              smooth={true}
              spy={true}
              offset={-80}
              duration={500}
              className={`flex flex-col items-center cursor-target cursor-pointer group transition ${
                activeSection === id
                  ? "text-blue-600 font-semibold"
                  : "text-white hover:text-blue-600"
              }`}
            >
              <span>{label}</span>
              <hr
                className={`h-1 w-0 group-hover:w-full bg-blue-600 transition-all duration-300 ${
                  activeSection === id ? "w-full" : ""
                }`}
              />
            </Link>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <div
          className="sm:hidden text-2xl cursor-pointer"
          onClick={() => setSideBar(true)}
        >
          <FontAwesomeIcon icon={faBars} />
        </div>
      </nav>
    </>
  );
}
