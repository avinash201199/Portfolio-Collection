import React from 'react'
import styled ,{keyframes}from 'styled-components'
import Powers from './Power'
import Me from './Me.jpeg'
import {motion} from 'framer-motion'
import Particle from './Particle'
const About = () => {
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
          <h2>About Me</h2>
          <p>Iam Korla Goutham Computer Science UnderGraduate</p>

          <p> Iam Frontend developer and Competetive Programmer  </p>
        <p> I love to Create a simple beautiful websites with greater user experience</p>
        
<strong> I always  wanted to try new challening projects daily that interest brought me to   Open Source Contributions </strong>
<p>Till now I only contributed to few  projects as I started lately but this continues</p>

<strong>I love to teach the content I know </strong>

</Box>

        <Box
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: "50%", opacity: 1 }}
          transition={{ type: "spring", duration: 0.3 }}
          style={{ left: "4vw" }}
        >
        <motion.div initial={{opacity:0}}
animate={{opacity:1 }}
transition={{  duration :1,delay:1.2,}}
>
            <Hero src={Me} />
          </motion.div>
        </Box>
      </Main>
    </div>
  );
}

export default About
let Main = styled.div`
  height: 100vh;
  width: 100vw;
  background: radial-gradient(
    circle farthest-side,
    hsla(143, 75%, 50%, 0.438),
    hsla(151, 19%, 76%, 0.438)
  );

  display: flex;
  justify-content: space-evenly;
  align-items: center;
  transition: 2s ease;
`;

let float = keyframes`
0%{
  transform:translateY(-10px);
}
50%{
  transform:translateY(15px) translateX(15px);

}
100%{
  transform:translateY(-10px) ;


}
`;
let Box = styled(motion.div)`
 text-align:center;
 transition:2s ease;
position:relative;
  border:2px solid black;;

  div{
position:relative;
    animation:${float} 4s ease infinite;
  }
`;
let Hero=styled(motion.img)`

height:100%;
width:100%;
object-fit:cover;
`