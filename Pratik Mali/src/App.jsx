import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import './App.css';
import Admin from './Admin';
import Home from './Home';
import Education from './Education';
import Myskill from './Myskill';
import Project from './Project';
import Certification from './Certification';
import About from './About';
import Contact from './Contact';
import { Analytics } from "@vercel/analytics/react"
function App() {
  return (
    <>
    <Analytics/>
    <Router>
      <Routes>
        <Route path="/admin" element={<Admin/>} />
        <Route path="/" element={
          <>
            <Navbar/>
            <Home/>
            <Education />
            <Myskill />
            <Project />
            <Certification />
            <About />
            <Contact />
          </>
        } />
      </Routes>
    </Router>
    </>
  );
}

export default App;
