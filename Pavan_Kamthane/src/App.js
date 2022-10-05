import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import HtmlCssJs from "./components/HtmlCssJs";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import ReactJs from "./components/ReactJs";
import ScrollUpButton from "./components/ScrollUpButton";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Wordpress from "./components/Wordpress";

function App() {
  return (
    <div className="App">
      <ScrollUpButton />
      <Navbar />
      <Home />
      <About />
      <Services />
      <Skills />
      {/* <div className="Projects__header" >
        <div className="Project__headerone">Projects</div>
        <div className="explore">Explore me</div>
      </div> */}
      {/* <Projects /> */}
      <Wordpress />
      <ReactJs />
      <HtmlCssJs />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
