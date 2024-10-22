import { FaLinkedin } from "react-icons/fa";
// import logo from "../assets/raviKumarLogo.webp";
import { FaGithub, FaTwitter } from "react-icons/fa6";

function Navbar() {
  return (
    <nav className="flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        {/* <a href="/" aria-label="Home">
          <img src={logo} className="mx-2" width={50} height={33} alt="logo" />
        </a> */}
      </div>

      <div className="m-8 flex items-center justify-center gap-4 text-3xl">
        <a
          href="https://www.linkedin.com/in/your-linkedin-profile"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://www.github.com/in/your-GitHub-profile"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.twitter.com/in/your-Twitter-profile"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
        >
          <FaTwitter />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
