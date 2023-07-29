import React from 'react'
import Github from "@material-ui/icons/GitHub";
import  Linkedin from "@material-ui/icons/LinkedIn";
import PagesIcon from "@material-ui/icons/Pages";
import Code from "@material-ui/icons/CodeRounded";
import { Button } from '@material-ui/core';
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion'

const Social = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>

    <motion.div 
    initial={{transform:'scale(0)'}}
    animate={{scale:[0,1,1.5,1]}}
 transition={{type:'spring',duration:1,delay:1}}
     >

     <Link target="_blank" to={{pathname:"https://github.com/KORLA2"}}>

     <Button style={{}}>

      <Github style={{ margin: "2px", cursor: "pointer" }} />
     </Button>
     </Link>
    </motion.div>
  <motion.div 
    initial={{transform:'scale(0)'}}
    animate={{scale:[0,1,1.5,1]}}
 transition={{type:'spring',duration:1,delay:1.2}}>
     <Link  target="_blank" to={{ pathname:"https://linkedin.com/in/korla-goutham-4007701a4"}}>

       <Button>
      <Linkedin style={{ margin: "2px", cursor: "pointer" }} />
        </Button>

     </Link>
     </motion.div>
       <motion.div 
    initial={{transform:'scale(0)'}}
    animate={{scale:[0,1,1.5,1]}}
 transition={{type:'spring',duration:1,delay:1.4}}
     >

     <Link  target="_blank" to={{ pathname:"https://korla.hashnode.dev"}}>
        
        <Button>

      <PagesIcon style={{ margin: "2px", cursor: "pointer" }} />
        </Button>
        </Link>
     </motion.div>
  <motion.div 
    initial={{transform:'scale(0)'}}
    animate={{scale:[0,1,1.5,1]}}
 transition={{type:'spring',duration:1,delay:1.6}}
     >

     <Link  target="_blank" to={{pathname:"https://leetcode.com/gouthamkorla1023"}}>
        
        <Button >
      <Code style={{ margin: "2px", cursor: "pointer" }} />
      </Button>
      </Link>
     </motion.div>

      </div>
  );
}

export default Social
let Line = styled.div`
  width: 2px;
  height: 6.5rem;
  background: black;
`;