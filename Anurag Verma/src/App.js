import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Skills from "./components/Skills/Skill";
import Coding from "./components/Skills/Coding";
import "./App.css";

const skill = [
  { id: "s1", Languages: " Html , Css , React" },
  { id: "s2", framework: " React , jQuery , Bootstrap " },
  { id: "s3", Languages: " C , C++ , Python " },
];

function App() {
  return (
    <div className="content">
      <Header />
      <Profile />
      <Skills
        language={skill[0].Languages}
        framework={skill[1].framework}
      />{" "}
      <Coding languages={skill[2].Languages} />
    </div>
  );
}

export default App;
