import React from 'react'
import styled from 'styled-components'
import Powers from './Power'
import { Button } from '@material-ui/core'
import {Projects} from './Projects'
import {motion} from 'framer-motion'
import { NavLink } from 'react-router-dom'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Github from '@material-ui/icons/GitHub'
const Work = () => {
const settingsNoModules = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: true,
};

  return (
    <div>
      <Powers />
      <Box
        initial={{ width: 0 }}
        animate={{ width: "100vw" }}
        transition={{ type: "spring", duration: 0.3 }}
      >
        <Main>
          <Carousel {...settingsNoModules}>
            {Projects.map((e) => (
              <Card
                className="card"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, borderRadius: "50px 50px 50px 50px" }}
                transition={{ type: "spring", duration: 0.3 }}
              >
                {(e.id === 1 || e.id === 2) && (
                  <strong>Under Construction Men at work Go Slow</strong>
                )}

                <h2>{e.title} </h2>
                <p>{e.desc}</p>
                <Top>
                {
                  e.id!==8&&(

                  <strong> Technologies Used:</strong>
                  )
                }
                  <p>{e.Techused}</p>
                </Top>

                <Link target="_blank" to={{ pathname: e.code }}>
                  {e.id === 1 || e.id === 2 ? (
                    <Button className="button">Watch Construction</Button>
                  ) : (
                    <Flex>
                    {e.id!==8&&( <Link target="_blank" to={{ pathname: e.host }}>
                        <Button className="button">Show project</Button>
                      </Link>)}
                      <Link target="_blank"  to={{ pathname: e.code }}>
                        <Button>
                          <Github className="github" />
                        </Button>
                      </Link>
                    </Flex>
                  )}
                </Link>
              </Card>
            ))}
          </Carousel>
        </Main>
      </Box>
    </div>
  );
}

export default Work
let Box = styled(motion.div)`
  height: 100vh;
  display: flex;
  width: 100vw;
  background: radial-gradient(
    circle farthest-side,
    hsla(201, 70%, 96%, 0.438),
    hsla(14, 68%, 62%, 0.438)
  );
  position: relative;
  justify-content: center;
  align-items: center;
`;
let Card = styled(motion.div)`
  border: 2px solid black;
  padding: 20px;
  transition: 2s ease;
  text-align: center;
  .button {
    text-decoration: none;
    background-color: black;
    color: white;
  }
  &:hover {
    background: black;
    color: white;
  }
  &:hover .button ,.github{
    background: white;
    color: black;
  }
  
`;
  let Flex = styled.div`
    display: flex;
    justify-content: space-around;

    
  `;

  let Carousel = styled(Slider)`
  div{

    overflow: hidden;
  }
    .slick_list {
    }
    margin: 12vw;
  `;
let Link=styled(NavLink)`
text-decoration: none;
padding:0.2rem;
border-radius: 0px 0px 0px 50px;
`
let Main = styled.div`
  width:100%;
  position:absolute;

`;
let Top = styled.div`
 
 border-top: 2px solid black;
 
 ${Card}:hover & {
 
  border-top: 2px solid white;
 
 }

`;

