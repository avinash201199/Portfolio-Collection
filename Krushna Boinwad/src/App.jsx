import Navbar from "./Components/Navbar";
import Particles from "./Components/Particles";
import Home from "./Components/Home";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import TargetCursor from "./Components/TargetCursor";
import Certificates from "./Components/Certificates";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";

export default function App() {
  return (
    <div className="bg-black text-white relative min-h-screen overflow-x-hidden scroll-smooth">
      {/* Custom Cursor */}
      <TargetCursor spinDuration={2} hideDefaultCursor={true} />

      {/* Full-Screen Particle Background */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
        <Particles
          particleColors={["#cadce1ff", "#ffffff"]}
          particleCount={300}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={200}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
          className="w-full h-full"
        />
      </div>

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="relative z-10">
        {/* Home Section */}
        <section
          id="home"
          className="flex flex-col items-center justify-center min-h-screen px-6 md:px-16"
        >
          <div className="w-full max-w-[1500px]">
            <Home />
          </div>
        </section>

        {/* About Section */}
        <section
          id="about"
          className="flex flex-col items-center justify-center w-full py-20 px-6 md:px-16"
        >
          <div className="w-full max-w-[1500px]">
            <About />
          </div>
        </section>

        {/* Skills Section */}
        <section
          id="skills"
          className="flex flex-col items-center justify-center w-full py-20 px-6 md:px-16"
        >
          <div className="w-full max-w-[1500px]">
            <Skills />
          </div>
        </section>

        {/* Projects Section */}
        <section
          id="projects"
          className="flex flex-col items-center justify-center w-full py-20 px-6 md:px-16"
        >
          <div className="w-full max-w-[1500px]">
            <Projects />
          </div>
        </section>

        {/* Contacts Section */}
        <section
          id="contact"
          className="flex flex-col items-center justify-center w-full py-20 px-6 md:px-16"
        >
          <div className="w-full max-w-[1500px]">
            <Contact />
          </div>
        </section>
      </main>

      <Footer></Footer>
    </div>
  );
}
