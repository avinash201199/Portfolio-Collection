import './App.css'
import Navbar from './components/navbar/Navbar.jsx'
import Hero from './components/hero/Hero'
import Skills from './components/skills/Skills'
import WorkExperience from './components/workExperience/workExperience'
import ContactMe from './components/contactMe/contact'
import Footer from './components/footer/footer'
import SkillsPage from './components/Skillspage/SkillsPage'

const App = () => {
  return (
    <>
        <Navbar />

      <div className='container'>
        <Hero />
        <br /><br />
        <hr />
        <Skills />
        <br /><br /><br /><br />

        <SkillsPage /> 
        <br />
        <hr />
        <WorkExperience />
        <hr />

        <ContactMe />
        <br />
        <Footer />
      </div>
    </>
  )
}

export default App
