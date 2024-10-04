import {React,useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import Todo from './assets/images/Projects/to_do.png'
import Blog from './assets/images/Projects/blog_web.png'
import Spot from './assets/images/Projects/parking_web.png'
import Quiz from './assets/images/Projects/quiz_app.png'
import Weather from './assets/images/Projects/weather_app.png'
import Dyazo from './assets/images/Projects/Dyazo.png'
import News from './assets/images/Projects/news_app.png'
import Text from './assets/images/Projects/text_editor.png'
import Textsaver from './assets/images/Projects/text-saver.png'

import contactApp from './assets/images/Projects/contactapp.png'
import Calculator from './assets/images/Projects/calculator.png'
import Password from './assets/images/Projects/password_manager.png'
import Rock from './assets/images/Projects/rock_paper_scissor.png'

import './Project.css';

export default function Project() {    
  useEffect(() => {
    const handleMouseMove = (event) => {
        const card = event.currentTarget;
        const cardRect = card.getBoundingClientRect();
        const cardCenterX = cardRect.left + cardRect.width / 2;
        const cardCenterY = cardRect.top + cardRect.height / 2;

        const mouseX = event.clientX - cardCenterX;
        const mouseY = event.clientY - cardCenterY;

        const rotateX = (mouseY / cardRect.height) * 15;
        const rotateY = (mouseX / cardRect.width) * -15;

        card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
    };

    const handleMouseLeave = (event) => {
        const card = event.currentTarget;
        card.style.transform = `rotateX(0deg) rotateY(0deg) scale(1)`;
    };

    const handleMouseDown = (event) => {
        const card = event.currentTarget;
        card.style.transform = `rotateX(0deg) rotateY(0deg) scale(0.97)`;
    };

    const handleMouseUp = (event) => {
        const card = event.currentTarget;
        card.style.transform = `rotateX(0deg) rotateY(0deg) scale(1.05)`;
    };

    const projectCards = document.querySelectorAll('.project_cards');

    projectCards.forEach((card) => {
        card.addEventListener('mousemove', handleMouseMove);
        card.addEventListener('mouseleave', handleMouseLeave);
        card.addEventListener('mousedown', handleMouseDown);
        card.addEventListener('mouseup', handleMouseUp);
    });

    return () => {
        projectCards.forEach((card) => {
            card.removeEventListener('mousemove', handleMouseMove);
            card.removeEventListener('mouseleave', handleMouseLeave);
            card.removeEventListener('mousedown', handleMouseDown);
            card.removeEventListener('mouseup', handleMouseUp);
        });
    };
}, []);


  const front_end_projects = [
    {
      image: Todo,
      heading: 'TO-DO List',
      description: 'This project is built with HTML, CSS, and JavaScript. It allows for task addition, deletion, priority setting, and adding extra descriptions. It implements a clean and user-friendly interface for efficiently managing daily tasks.',
      link: "https://pratik2401.github.io/TO-DO-List/",
      tags: 'completed',
    },
    {
      image: Spot,
      heading: 'Spot Seekers',
      description: 'Developed using ReactJS, XML, useEffect, serial communication, useState, and Bootstrap, this project accepts sensor values through XML and updates them on the website in real-time. It showcases a robust IoT solution for smart parking.UserName:admin Password:admin',
      link: "https://projectparking.netlify.app/",
      tags: 'completed',
    },
    {
      image: Quiz,
      heading: 'Quiz Generator',
      description: 'Created with HTML, CSS, JSON, and JavaScript, this interactive quiz application uses typed.js for dynamic typing effects and local storage for saving quiz data. It supports multiple question types and offers a fun, engaging user experience.',
      link: "https://pratik2401.github.io/quiz-generator/",
      tags: 'completed',
    },
    {
      image: Blog,
      heading: 'Blog Website',
      description: 'Implemented using HTML, CSS, JavaScript, Bootstrap, and local storage, this blogging platform supports multiple users with individual blog post management. It provides a simple yet elegant platform for writing and sharing blog posts.',
      link: "https://pratik2401.github.io/Blog-Website/",
      tags: 'completed',
    },
    {
      image: Weather,
      heading: 'Weather App',
      description: 'Built with ReactJS and REST API, this weather application utilizes createContext and useContext for state management. It provides real-time weather updates with an intuitive user interface, making it easy to check the weather at a glance.',
      link: "https://castingweather.netlify.app/",
      tags: 'completed',
    },
    {
      image: Dyazo,
      heading: 'Dyazo-Ecommerce',
      description: 'This e-commerce site is developed with HTML, CSS, and JavaScript. It features a redesigned version of the Dyazo Company website with Soft UI (Neuromorphism) and Bootstrap for responsiveness, creating a modern and aesthetically pleasing online store.',
      link: "https://dyazo.netlify.app/",
      tags: 'completed',
    },
    {
      image: News,
      heading: 'News APP',
      description: 'Created using ReactJS and REST API for fetching news, this application uses createContext and useContext for state management. It delivers the latest news updates with a clean and readable layout, ensuring users stay informed.',
      link: "https://github.com/Pratik2401/News",
      tags: 'completed',
    },
    {
      "image": Text,
      "heading": "Text Editor",
      "description": "Designed and implemented using React, this project showcases a modern and efficient text editor. It features essential text editing functionalities with a user-friendly interface.",
      "link": "https://github.com/Pratik2401/Text_Editor",
      "tags": "completed"
    },
    {
      "image": Textsaver,
      "heading": "Text Saver",
      "description": "Built with the MERN stack, this project allows users to save text and images, generating a sharable URL. It's an innovative solution for quickly sharing notes, images, or other information.",
      "link": "https://savetext.vercel.app/",
      "tags": "completed"
    },
    {
      "image": contactApp,
      "heading": "Contact Sphere",
      "description": "A MERN stack contact management app with JWT authentication, bcrypt encryption, React Bootstrap UI, and seamless API integration. It showcases secure, user-friendly design and smooth navigation.",
      "link": "https://spherecontact.vercel.app/",
      "tags": "completed"
    }
  ];
  
  let program_project=[{
    image: Rock,
    heading: 'Rock Paper Scissor - Console Based',
    description: 'This console-based game, developed with Python, implements the classic Rock Paper Scissors game with a simple interface. It enhances user experience with clear instructions and interactive gameplay.',
    link: "https://github.com/Pratik2401/CodeSoft-Python/blob/main/Rock%20paper%20scissor.py",
    tags: 'completed',
  },
  {
    image: Password,
    heading: 'Password Generator - Console Based',
    description: 'Developed using Python, this tool generates secure passwords with varying complexity. It is essential for enhancing cybersecurity, providing users with strong and unique passwords.',
    link: "https://github.com/Pratik2401/CodeSoft-Python/blob/main/Password%20Generator.py",
    tags: 'completed',
  },
  {
    image: Calculator,
    heading: 'Calculator - Console Based',
    description: 'This basic calculator application, developed with Python, performs essential arithmetic operations with a user-friendly console interface. It serves as a foundational project for understanding Python programming concepts.',
    link: "https://github.com/Pratik2401/CodeSoft-Python/blob/main/Calculator.py",
    tags: 'completed',
  },]
  
 
  return (
    <div id="projects">
      <div className="heading">Projects</div>
      <Container id='skills'>
        <Row>
          <div className="sub_heading">FrontEnd Projects</div>
          {front_end_projects.map((project, index) => (
            <Col key={index} md={4} className="mb-4 d-flex justify-content-center">
              <Card className='project_cards' style={{ width: '18rem', height: 'auto', position: 'relative' }}>
                <Card.Img variant="top" src={project.image} className="card-img-top project_images" />
                <Card.Body>
                  <Card.Title>{project.heading}</Card.Title>
                  <Card.Text>
                    {project.description}
                  </Card.Text>
                  <Button variant="primary" href={project.link} target="_blank" className='project_vist'><strong>Vist</strong></Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <Row>
          <div className="sub_heading">Coding Projects</div>
          {program_project.map((project, index) => (
            <Col key={index} md={4} className="mb-4 d-flex justify-content-center">
              <Card className='project_cards' style={{ width: '18rem', height: 'auto', position: 'relative' }}>
                <Card.Img variant="top" src={project.image} className="card-img-top project_images" />
                <Card.Body>
                  <Card.Title>{project.heading}</Card.Title>
                  <Card.Text>
                    {project.description}
                  </Card.Text>
                  <Button variant="primary" href={project.link} target="_blank" className='project_vist'><strong>Vist</strong></Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
