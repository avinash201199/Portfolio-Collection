import { MasterCard } from "./Components/Card/MasterCard";
import "./Components/Styles/base.css";
import { Main } from "./Components/Pages/Main";
import { Projects } from "./Components/Pages/Projects";
import { Hobbies } from "./Components/Pages/Hobbies";
import { Contact } from "./Components/Pages/Contact";
import { Skills } from "./Components/Pages/Skills";

function App() {
  return (
    <MasterCard>
      <Main />
      <Hobbies />
      <Skills />
      <Projects />
      <Contact />
    </MasterCard>
  );
}

export default App;
