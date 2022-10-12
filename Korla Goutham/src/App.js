import React from 'react'
import {ThemeProvider} from 'styled-components'
import {dark,light} from './components/Themes'
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom'
import Main from './components/Main'
import About from "./components/About";
import Blog from "./components/Blog";
import Skills from "./components/Skills";
import Work from './components/Work'
const App = () => {
  return (
    <div>
      <ThemeProvider theme={light}>
        <Router>
          <Switch>
            <Route path="/AboutMe" component={About} />
            <Route path="/MySkills" component={Skills} />
            <Route path="/MyWork" component={Work} />
            <Route path="/MyBlogs" component={Blog} />
            <Route path="/" component={Main} />
          
          </Switch>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App
