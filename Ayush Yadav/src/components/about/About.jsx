import "./about.css";

import Aabout from "../../img/about.jpg";


const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src={Aabout}
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
        
        Hi , I'm Ayush Yadav. 
        </p>
        <p className="a-desc">
       I am an undergraduate student persuing B.Tech in Electronics and Communication Engineering ,And I am Passionate towards the Programming and I love to do coding and Making Projects on them. I love to take new Challenges as tasks and I always try to solve the problem in a simple and unique way.I am a Code Junkie and i always excited to learn trending technologies and work on them. Go through my resume and know more about my skills.

        </p>
        
      </div>
    </div>
  );
};

export default About;