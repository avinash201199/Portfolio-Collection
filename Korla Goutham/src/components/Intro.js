import React from 'react'
import styled from 'styled-components'
import Photo from './Me.jpeg'
import {motion} from 'framer-motion'
const Intro = () => {

  return (
  
   <OuterBox
   initial={{height:0}}
animate={{height: '55vh'}}
transition={ {type:'spring',duration:.3  }}

   >

<InnerBox>

<h1>
    Iam Goutham
</h1>
<h3>

 Welcome to my Portfolio
</h3>
<h4>

Iam a competetive Programmer and a Frontend Developer
</h4>

</InnerBox>
<InnerBox> 
<motion.div initial={{opacity:0}}
animate={{opacity:1 }}
transition={{  duration :1,delay:1.2,}}
>


<Hero  src={Photo}/>

</motion.div>
</InnerBox>

   </OuterBox>
  )
}

export default Intro

let OuterBox = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3vw;

  //background has o be investigated
  background: radial-gradient(
    circle farthest-side,
    hsla(112, 35%, 51%, 0.438) , hsla(113, 70%, 77%, 0.438)
  );

  border: 2px solid black;
  width: 50vw;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transition: all 2s ease;
`; 
let InnerBox=styled(motion.div)`
position:relative;
text-align:center;
width:50%;
padding: 1rem;

`
let Hero = styled(motion.img)`
  height:100%;
  width:100%;
object-position: center;
`;