import React,{useState} from "react";
import { HiBars3 ,HiOutlineXCircle } from "react-icons/hi2";
import "./navbar.css";
import MobileNav from "./MobileNav";
import { FaHome } from "react-icons/fa";


const Navbar = () => {

    const [openMenu,setOpenMenu] = useState(false);
    const toggleMenu = ()=>{
        setOpenMenu(!openMenu);
    };

    const[resume,setresume] = useState();
    const handleDownload= ()=>{

    } 

  return (
    <>	
    <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />

    <nav className="nav-wrapper">
	  <div className="nav-content">
    <FaHome />
    	<ul>  
      <a href="/resume-TRahulPrabhu.pdf" download="Resume-TRahulPrabhu.pdf">
      <button className="contact-btn" onClick={handleDownload}>Download Resume</button>
      </a>
		</ul>

        <button className="menu-btn" onClick={toggleMenu}>
            <span 
                className={"material-symbols-outlined"}
                style={{fontSize:"1.8rem"}}
            >
                {openMenu? <HiOutlineXCircle /> :<HiBars3 />}
            </span>
        </button>
	  </div>
	</nav>
	</>
  );
};

export default Navbar;
 