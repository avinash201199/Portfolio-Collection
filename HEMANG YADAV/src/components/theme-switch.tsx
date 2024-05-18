import { useTheme } from "../context/theme-context";
import {
  BsMoon,
  BsSun,
  BsLinkedin,
  BsFillEnvelopeAtFill,
  BsGithub,
} from "react-icons/bs";
import { sideBarLeftSocials } from "../assets/lib/data";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1024) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };
    const handleTouchMove = () => {
      setIsTooltipVisible(false);
    };
    window.addEventListener("resize", handleResize);
    window.addEventListener("touchmove", handleTouchMove);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  return (
    <div
      className={`fixed right-10  transition-all z-50
      ${
        isTooltipVisible ? "h-[24rem] w-[4rem] z-10" : " h-[4rem] w-[4rem] z-10"
      }
      ${isMobile ? "top-10 h-[20rem]" : "bottom-5"}`}
      onMouseEnter={() => setIsTooltipVisible(true)}
      onMouseLeave={() => setIsTooltipVisible(false)}
    >
      <button
        className={`shortcut-btn fixed z-10 bottom-5 right-10  w-[4rem] h-[4rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950 ${
          theme === "dark" ? "bg-[--darkblue]" : "bg-white"
        }
        ${isMobile ? "top-10" : "bottom-5"}
        `}
        onClick={toggleTheme}
        aria-label="Switch Dark and Light"
      >
        {theme === "light" ? <BsSun /> : <BsMoon />}
      </button>
      <button
        className={`shortcut-btn fixed -z-10 right-10  w-[4rem] h-[4rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950 ${
          theme === "dark" ? "bg-[--darkblue]" : "bg-white"
        }
        ${
          isTooltipVisible
            ? "z-10 opacity-100 bottom-[6rem]"
            : "-z-100 opacity-0"
        }
        ${isMobile ? "top-32" : "bottom-5 pointer-events-auto"}
        
        ${
          isMobile && isTooltipVisible
            ? "pointer-events-auto"
            : "pointer-events-none"
        }`}
        aria-label="My Github Profile"
      >
        <Link
          to={sideBarLeftSocials[1].link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsGithub />
        </Link>
      </button>
      <button
        className={`shortcut-btn fixed -z-10  right-10  w-[4rem] h-[4rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950 ${
          theme === "dark" ? "bg-[--darkblue]" : "bg-white"
        }
        ${
          isTooltipVisible
            ? "z-10 opacity-100 bottom-[11rem]"
            : "-z-10 opacity-0"
        }
        ${isMobile ? "top-52" : "bottom-5 pointer-events-auto"}
        ${
          isMobile && isTooltipVisible
            ? "pointer-events-auto"
            : "pointer-events-none"
        }`}
        aria-label="My Linkedin Profile"
      >
        <Link
          to={sideBarLeftSocials[0].link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsLinkedin />
        </Link>
      </button>
      <button
        className={`shortcut-btn fixed -z-10  right-10  w-[4rem] h-[4rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950 ${
          theme === "dark" ? "bg-[--darkblue]" : "bg-white"
        }
        ${
          isTooltipVisible
            ? "z-10 opacity-100 bottom-[16rem]"
            : "-z-10 opacity-0"
        }
        
        ${isMobile ? "top-72" : "bottom-5 pointer-events-auto"}
        ${
          isMobile && isTooltipVisible
            ? "pointer-events-auto"
            : "pointer-events-none"
        }
        `}
        aria-label="Send me an Email"
      >
        <Link
          to={sideBarLeftSocials[2].link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsFillEnvelopeAtFill />
        </Link>
      </button>
    </div>
  );
}
