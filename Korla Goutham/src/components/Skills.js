import React from 'react'
import styled from 'styled-components'
import Code from '@material-ui/icons/Code'
import  Design  from "@material-ui/icons/DeveloperBoard";
import Powers from './Power'
import {motion} from 'framer-motion'
import Particle from './Particle'
const Skills = () => {
  return (
    <div>
      <Powers />


    <Particle/>
      <Main>
        <Box
          initial={{ width: 0 }}
          animate={{ width: "50%" }}
          transition={{ type: "spring", duration: 0.3 }}
          style={{ left: "2vw" }}
        >
          <Title>
            <Code />
            <h2>Competetive Programmer</h2>
          </Title>
         
          <p>I enjoy ,Love Coding</p>
         
          <h2>LanguagesKnown</h2>
         
          <p>C ,C++,JavaScript</p>
         
         <h3>Miscelleneous Skills</h3>
         <strong>DataStructures And Algorithms </strong>
<p>Linux Commands,Operating Systems,MySQL,Git GitHub</p>
        </Box>

        <Box
          initial={{ width: 0 }}
          animate={{ width: "50%" }}
          transition={{ type: "spring", duration: 0.3 }}
          style={{ left: "4vw" }}
        >
          <Title>
            <Design />
            <h2>FrontendDeveloper</h2>
          </Title>

          <h3>I enjoy bringing new ideas into life</h3>
          <h2>Skills</h2>
          <p> HTML,CSS,JS,React,Redux,FireBase,Github, styled-components</p>
          <h2>Tools</h2>
          <p>Vs Code,GitHub,Git</p>
        </Box>
      </Main>
    </div>
  );
}

export default Skills
let Main = styled.div`
  height: 100vh;
  width: 100vw;
  background: radial-gradient(
    circle farthest-side,
    hsla(111, 22%, 50%, 0.438),
    hsla(165, 53%, 73%, 0.438)
  );
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  transition: all 2s ease;
`;


let Box = styled(motion.div)`
  padding: 2vw;
  position: relative;
  border: 2px solid black;
  text-align: center;
  transition: all 2s ease;
  &:hover {
    background: black;
    color: white;
    border: 2px solid white;
  }
`;let Title=styled.div`

display:flex;
justify-content:space-evenly;
align-items:center;
`

