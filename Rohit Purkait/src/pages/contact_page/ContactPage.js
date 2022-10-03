import React from "react";
import "./ContactPage.css";
import Contact from "../../assets/contact.svg";
import NavBar from "../../custom_components/navbar/NavBar";

function ContactPage() {
  return (
    <div className="ContactPage">
      <NavBar />
      <div className="ContactPage-container">
        <div className="ContactPage-left">
          <img className="ContactPage-image" src={Contact} alt="..." />
        </div>
        <div className="ContactPage-right">
          <div className="ContactPage-mail-block">
            <div className="ContactPage-mail-title">Mail me at:</div>
            <div className="ContactPage-mail">codeswithroh@gmail.com</div>
          </div>
          <div className="ContactPage-social-title">Socials</div>
          <div className="ContactPage-socials-block">
            <div className="ContactPage-social-github">
              <a
                href="https://github.com/codeswithroh"
                target="_blank"
                rel="noreferrer"
                className="github-link"
              >
                <i className=" github-icon fab fa-github-square fa-3x"></i>
              </a>
            </div>

            <div className="ContactPage-social-linkedin">
              <a
                href="https://www.linkedin.com/in/codeswithroh/"
                target="_blank"
                rel="noreferrer"
                className="linkedin-link"
              >
                <i className=" linkedin-icon fab fa-linkedin fa-3x"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
