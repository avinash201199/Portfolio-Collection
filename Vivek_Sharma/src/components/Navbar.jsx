import logo from "../assets/vivekLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 item-center">
        <img className="mx-2 w-20" src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">

        <a href="https://www.linkedin.com/in/vivek-kumar-576a50238/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/vivekxsh" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://leetcode.com/vivekxsh" target="_blank" rel="noopener noreferrer">
          <SiLeetcode />
        </a>
        <a href="https://www.instagram.com/vivekxsh/" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>

        
      </div>
    </nav>
  );
};

export default Navbar;
