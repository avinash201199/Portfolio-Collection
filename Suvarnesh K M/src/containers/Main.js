import React, { Component } from "react";
import Header from "../components/header/Header";
import Greeting from "./greeting/Greeting";
import Skills from "./skills/Skills";
import Education from "./education/Education";
import WorkExperience from "./workExperience/WorkExperience";
import StartupProject from "./StartupProjects/StartupProject";
import Achievement from "./achievement/Achievement";
import Profile from "./profile/Profile";
import Footer from "../components/footer/Footer";
import Top from "./topbutton/Top";
import { StyleProvider } from "../contexts/StyleContext";
import "./Main.scss";
import SimpleReactLightbox from 'simple-react-lightbox'

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDark: false
    };
  }

  componentDidMount() {
    if (localStorage.getItem("isDark") === null) {
      const darkPref = window.matchMedia("(prefers-color-scheme: dark)");
      localStorage.setItem("isDark", darkPref.matches);
    }
    this.setState({ isDark: JSON.parse(localStorage.getItem("isDark")) });
  }
  changeTheme = () => {
    this.setState({ isDark: !this.state.isDark }, () => {
      localStorage.setItem("isDark", this.state.isDark);
    });
  };

  render() {
    return (
      <div className={this.state.isDark ? "dark-mode" : null}>
        <StyleProvider
          value={{ isDark: this.state.isDark, changeTheme: this.changeTheme }}
        >
          <Header />
          <Greeting />
          <Skills />
          <Education />
          <WorkExperience />
          <StartupProject />
          <SimpleReactLightbox>
            <Achievement />
          </SimpleReactLightbox>
          <Profile />
          <Footer />
          <Top />
        </StyleProvider>
      </div>
    );
  }
}
