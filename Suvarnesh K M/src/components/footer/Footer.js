import React, { useContext, useEffect } from "react";
import "./Footer.scss";
import { Fade } from "react-reveal";
import emoji from "react-easy-emoji";
import StyleContext from "../../contexts/StyleContext";


export default function Footer() {

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://webring.hackclub.com/public/embed.min.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    }
  }, []);

  const { isDark } = useContext(StyleContext);
  return (
    <Fade bottom duration={1000} distance="5px">
      <div className="footer-div">
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          {emoji("Made with ❤️ by Suvarnesh K M")}
        </p>
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          Theme is{" "}
          <a className="here" href="https://github.com/SuvarneshKM/my-portfolio">
            here
          </a>
        </p>
      </div>
      <center>
        <div id="webring-wrapper">
          <a href="https://webring.hackclub.com/" id="previousBtn" className="webring-anchor" title="Previous">‹</a>
          <a href="https://webring.hackclub.com/" className="webring-logo" title="Hack Club Webring" alt="Hack Club Webring"></a>
          <a href="https://webring.hackclub.com/" id="nextBtn" className="webring-anchor" title="Next">›</a>
        </div>
      </center>
    </Fade>
  );
}
