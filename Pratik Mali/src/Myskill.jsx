import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import Arduino from './assets/images/arduino.png';
import RaspberryPi from './assets/images/raspberry.png';
import Html5 from './assets/images/html5.png';
import CSS from './assets/images/CSS.png';
import JS from './assets/images/JS.png';
import ReactPic from './assets/images/React.png';
import MySQL from './assets/images/mysql.png';
import Figma from './assets/images/figma.png';
import Linux from './assets/images/linux.png';
import ASM from './assets/images/asm.png';
import EmbededC from './assets/images/embeded-c.png';
import Bootstrap from './assets/images/bootstrap.png';
import C from './assets/images/C.png';
import Cpp from './assets/images/Cpp.png';
import Python from './assets/images/python.png';
import Expressjs from './assets/images/express-js.png';
import Nodejs from './assets/images/nodejs.png';
import MachineLearning from './assets/images/machinlearning.png';
import Datasci from './assets/images/datasci.png';
import Image from './assets/images/image_process.png';

import './Myskill.css';
const skills = [
  {
    image: Arduino,
    heading: 'Arduino',
    description: 'Design and implement embedded systems using Arduino, creating innovative hardware projects.',
    status: 'completed',
  },
  {
    image: RaspberryPi,
    heading: 'Raspberry Pi',
    description: 'Develop IoT solutions with Raspberry Pi, integrating sensors and actuators for smart applications.',
    status: 'completed',
  },
  {
    image: Html5,
    heading: 'HTML 5',
    description: 'Craft modern web pages with HTML5, ensuring semantic, accessible, and well-structured content.',
    status: 'completed',
  },
  {
    image: CSS,
    heading: 'CSS',
    description: 'Style web applications with CSS, enhancing user experience with responsive and visually appealing designs.',
    status: 'completed',
  },
  {
    image: JS,
    heading: 'JavaScript',
    description: 'Build dynamic and interactive web applications using JavaScript, enabling rich user interfaces.',
    status: 'completed',
  },
  {
    image: ReactPic,
    heading: 'React JS',
    description: 'Develop scalable single-page applications with React JS, leveraging its component-based architecture.',
    status: 'completed',
  },
  {
    image: MySQL,
    heading: 'MySQL',
    description: 'Manage and manipulate databases with MySQL, ensuring efficient data storage and retrieval.',
    status: 'completed',
  },
  {
    image: Figma,
    heading: 'Figma',
    description: 'Design user interfaces and user experiences with Figma, creating prototypes and design systems.',
    status: 'completed',
  },
  {
    image: Linux,
    heading: 'Linux',
    description: 'Utilize Linux for development and deployment, leveraging its robust command-line tools and environments.',
    status: 'completed',
  },
  {
    image: ASM,
    heading: 'Assembly Language',
    description: 'Write low-level code with Assembly language, optimizing performance for critical applications.',
    status: 'completed',
  },
  {
    image: EmbededC,
    heading: 'Embedded C',
    description: 'Develop firmware for embedded systems using Embedded C, ensuring efficient and reliable code.',
    status: 'completed',
  },
  {
    image: Bootstrap,
    heading: 'BootStrap',
    description: 'Develop responsive, mobile-first websites with Bootstrap, ensuring efficient and reliable designs.',
    status: 'completed',
  },
  {
    image: C,
    heading: 'C',
    description: 'Write low-level code with C, optimizing performance for critical applications.',
    status: 'completed',
  },
  {
    image: Cpp,
    heading: 'C++',
    description: 'Develop firmware for embedded systems using C++, ensuring efficient and reliable code.',
    status: 'completed',
  },
  {
    image: Python,
    heading: 'Python',
    description: 'Develop applications with Python, including web development, data analysis, and automation.',
    status: 'completed',
  },
  {
    image: Nodejs,
    heading: 'Node.js',
    description: 'Learning to build scalable network applications using Node.js, leveraging its event-driven architecture.',
    status: 'completed',
  },
  {
    "image": Expressjs,
    "heading": "Express js",
    "description": "Building scalable network applications with Node.js using Express.js.",
    "status": "completed"
  },
  {
    "image": Image,
    "heading": "Image Processing",
    "description": "Analyzing and transforming images to extract valuable information or enhance visual quality for various applications.",
    "status": "completed"
  },
  {
    image: MachineLearning,
    heading: 'Machine Learning',
    description: 'Studying machine learning algorithms and techniques to develop predictive models and automated decision-making systems.',
    status: 'ongoing',
  },
  {
    image: Datasci,
    heading: 'Data Science',
    description: 'Exploring data analysis methods and statistical techniques to derive insights and solve complex business problems.',
    status: 'ongoing',
  }
];

const MyWork = () => {
  return (
    <Container id='skills'>
      
      <div className="heading" style={{
    fontFamily: 'cocogoose',
    fontWeight: 'bolder',
    color: 'white',
    fontSize: '2rem'
}}>My Skills</div>

      <Row>
        {skills.map((skill, index) => (
          <Col key={index} md={4} className="mb-4 d-flex justify-content-center">
            <Card className={skill.status === 'completed' ? 'completed-card' : 'ongoing-card'} style={{ width: '18rem', height: '18rem', position: 'relative' }}>
              {skill.status === 'ongoing' && (
                <div className="ribbon-wrapper">
                  <div className="ribbon">Learning</div>
                </div>
              )}
              <Card.Img variant="top" src={skill.image} className="card-img-top container my_skills_cards" />
              <Card.Body>
                <Card.Title>{skill.heading}</Card.Title>
                <Card.Text>{skill.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default MyWork;
