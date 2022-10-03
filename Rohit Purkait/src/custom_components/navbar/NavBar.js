import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  const nav_items = ["Home", "About", "Projects", "Experience", "Contact"];
  const nav_links = ["/", "/about", "/projects", "/experience", "/contact"];
  return (
    <nav className="NavBar">
      <div className="NavBar-container">
        {nav_items.map((nav_item, index) => {
          return (
            <div key={index} className="NavBar-item">
              <Link className="NavBar-link" to={nav_links[index]}>
                {nav_item}
              </Link>
            </div>
          );
        })}
      </div>
    </nav>
  );
}

export default NavBar;
