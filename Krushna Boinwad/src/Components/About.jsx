import { Reveal } from "../utils/animations";
import aboutImage from "../assets/about.png";

export default function About() {
  return (
    <section
      id="about"
      className="w-full flex flex-col lg:flex-row-reverse items-center justify-between px-6 md:px-16 lg:px-32 py-20 text-white"
    >
      {/* Image */}
      <div className="flex-1 flex items-center justify-center mb-10 lg:mb-0">
        <div className="relative">
          <div className="absolute inset-0 bg-cyan-400/20 rounded-2xl blur-2xl animate-pulse-slow"></div>
          <div className="relative rounded-2xl overflow-hidden border-2 border-cyan-400/30 shadow-2xl">
            <img
              src={aboutImage}
              alt="Krushna Boinwad"
              className="w-64 md:w-80 lg:w-96 rounded-xl hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </div>

      {/* Info */}
      <div className="flex-1 flex flex-col justify-center gap-6 lg:pr-16">
        <Reveal>
          <h2 className="text-4xl md:text-5xl font-bold">About <span className="text-cyan-400">Me</span></h2>
        </Reveal>

        <Reveal>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light">
            I'm Krushna Boinwad, a Second Year <span className="text-cyan-400 font-medium">AI & Data Science</span> student at VIT Pune. Passionate about building <span className="font-semibold text-white">impactful projects</span> and solving problems through code.
          </p>
        </Reveal>

        {/* Skills/Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          {[
            { color: "bg-cyan-400", title: "Competitive Programmer", subtitle: "LeetCode • CodeChef • Codeforces" },
            { color: "bg-pink-400", title: "Hackathon Enthusiast", subtitle: "ISIH 2025 Winner" },
            { color: "bg-green-400", title: "Full-Stack Developer", subtitle: "MERN Stack" },
            { color: "bg-purple-400", title: "Continuous Learner", subtitle: "Exploring New Tech" },
          ].map((item, idx) => (
            <Reveal key={idx} className="flex items-start gap-3">
              <div className={`w-2 h-2 ${item.color} rounded-full flex-shrink-0 mt-1`}></div>
              <p className="text-gray-200 font-medium">
                {item.title} <br />
                <span className="text-gray-400 text-sm">{item.subtitle}</span>
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
