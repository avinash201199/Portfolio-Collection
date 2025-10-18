import { SplitText, BlurText, Reveal } from "../utils/animations";
import { Typewriter } from "react-simple-typewriter";
import myImg from "../assets/myImg.jpg";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import { SiLeetcode, SiCodeforces } from "react-icons/si";

export default function Home() {
  return (
    <section
      id="home"
      className="w-full flex flex-col md:flex-row items-center justify-between px-6 md:px-16 lg:px-32 py-16 md:py-24 relative"
    >
      {/* Left Content */}
      <div className="flex-1 flex flex-col items-start justify-center gap-4 md:gap-6 z-10 order-2 md:order-1">
        <SplitText
          text="Hi, I'm Krushna"
          className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight"
          style={{
            fontFamily: "'Inter', 'SF Pro Display', -apple-system, sans-serif",
            background: "linear-gradient(135deg, #ffffff 0%, #c0c0c0 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        />

        <h2 className="text-xl md:text-3xl font-medium text-cyan-300 mt-2 h-10 md:h-12">
          <Typewriter
            words={[
              "AI & Data Science Student",
              "MERN Stack Developer",
              "Hackathon Enthusiast",
              "Competitive Programmer",
            ]}
            loop={true}
            cursor
            cursorStyle="▌"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={2000}
          />
        </h2>

        <BlurText
          text="I'm a passionate Full Stack Developer specializing in creating responsive, user-centric web applications. With expertise in modern technologies, I build visually engaging and functionally robust solutions. Proud member of the ISIH 2025 winning team."
          className="max-w-xl text-gray-300 leading-relaxed text-base md:text-lg font-light"
        />

        <Reveal className="mt-4">
          <div className="inline-flex items-center gap-2 bg-cyan-900/30 border border-cyan-400/30 rounded-full px-4 py-2">
            <span className="text-cyan-300 text-sm font-medium">
              🏆 ISIH 2025 Winner
            </span>
          </div>
        </Reveal>

        {/* Buttons */}
        <Reveal className="flex flex-col sm:flex-row gap-4 mt-6">
          <a
            href="#projects"
            className="relative group px-6 py-3 rounded-lg font-semibold text-cyan-500 border-2 border-cyan-500 overflow-hidden hover:text-white transition-all duration-300 cursor-target"
          >
            <span className="relative z-10">View Projects</span>
            <span className="absolute inset-0 bg-cyan-500 scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500"></span>
          </a>

          <a
            href="/Krushna_Boinwad_Resume.pdf" // note the leading /
            target="_blank"
            rel="noopener noreferrer"
            className="relative group px-6 py-3 rounded-lg font-semibold text-pink-400 border-2 border-pink-400 overflow-hidden hover:text-white transition-all duration-300 cursor-target"
          >
            <span className="relative z-10 ">View Resume</span>
            <span className="absolute inset-0 bg-pink-400 scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500"></span>
          </a>
        </Reveal>

        {/* Social Icons */}
        <div className="flex gap-4 mt-6">
          <a
            href="https://www.linkedin.com/in/krushna-boinwad-8a5a72275/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-cyan-400 hover:text-white transition-colors text-2xl cursor-pointer" />
          </a>
          <a
            href="https://github.com/Krushna-a"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-gray-400 hover:text-white transition-colors text-2xl cursor-pointer" />
          </a>
          <a href="https://www.instagram.com/krushnaa_a/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-pink-400 hover:text-white transition-colors text-2xl cursor-pointer" />
          </a>
          <a
            href="https://leetcode.com/u/krushnaa_a/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiLeetcode className="text-yellow-400 hover:text-white transition-colors text-2xl cursor-pointer" />
          </a>
          <a
            href="https://codeforces.com/profile/Krushna_boinwad"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiCodeforces className="text-blue-400 hover:text-white transition-colors text-2xl cursor-pointer" />
          </a>
        </div>
      </div>

      {/* Right Image */}
      <div className="flex-1 flex items-center justify-center mt-12 md:mt-0 order-1 md:order-2 relative">
        <div className="relative">
          <div className="absolute inset-0 bg-cyan-400/20 rounded-2xl blur-3xl scale-110 animate-pulse-slow"></div>
          <div className="relative rounded-2xl overflow-hidden border-2 border-cyan-400/30 shadow-2xl">
            <img
              src={myImg}
              alt="Krushna"
              className="w-64 md:w-80 lg:w-96 rounded-xl hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
