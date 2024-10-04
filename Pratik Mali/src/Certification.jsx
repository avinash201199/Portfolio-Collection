import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import JsCertificate from './assets/images/hackerrank-js.png'
import PyCertificate from './assets/images/hackerrank-python.png'
import googleCloud from './assets/images/googlecloud.png'
import JIT from './assets/images/jit.png'
import Cod_py from './assets/images/codsoft-cpp.jpg'
import Cod_cpp from './assets/images/codsoft-cpp.jpg'
import nptelMicrocontroller from './assets/images/nptlMicro.jpg'
import mlIntern from './assets/images/mlIntern.png'

import './Certification.css';

const certification = 
  [
    {
      image: JsCertificate ,
      link:"https://www.linkedin.com/posts/pratikmali24_hackerrank-javascript-codingskills-activity-7216135921153286145-ZQ5F?utm_source=share&utm_medium=member_desktop",
      heading: "Hackerrank JavaScript Basics",
      description: "Completed JavaScript basic challenges on Hackerrank, demonstrating proficiency in foundational JavaScript concepts.",
    },
    {
      image: PyCertificate,
      link:"https://www.linkedin.com/posts/pratikmali24_python-hackerrank-certified-activity-7165201825493716992-DaR-?utm_source=share&utm_medium=member_desktop",
      heading: "Hackerrank Python Basics",
      description: "Completed Python basic challenges on Hackerrank, showcasing understanding of core Python programming principles.",
    },
    {
      image: JIT,
      link:"https://www.linkedin.com/posts/pratikmali24_python-hackerrank-certified-activity-7165201825493716992-DaR-?utm_source=share&utm_medium=member_desktop",
      heading: "JIT C Hackathon",
      description: "Participated in and contributed to a C programming hackathon at JIT, applying skills in low-level programming and algorithmic problem-solving.",
    },
    {
      image: Cod_cpp,
      link:"https://www.linkedin.com/posts/pratikmali24_c-internship-codsoftexperience-activity-7128638657225273345-uAmO?utm_source=share&utm_medium=member_desktop",
      heading: "Codsoft C++ Internship",
      description: "Interned at Codsoft, gaining practical experience in C++ programming and software development methodologies.",
    },
    {
      image: Cod_py,
      link:"https://www.linkedin.com/posts/pratikmali24_codsoft-activity-7124074043850244096-5bYB?utm_source=share&utm_medium=member_desktop",
      heading: "Codsoft Python Internship",
      description: "Interned at Codsoft, working on Python projects and enhancing skills in scripting, automation, and application development.",
    },
    {
      image: googleCloud,
      link:"https://www.linkedin.com/posts/pratikmali24_googlestudentclub-googlecloud-learningjourney-activity-7121788306316570625--5H_?utm_source=share&utm_medium=member_desktop",
      heading: "Google Cloud Certification",
      description: "Achieved Google Cloud certification, demonstrating proficiency in cloud computing technologies and services.",
    },
    {
      image: nptelMicrocontroller,
      link:"https://www.linkedin.com/posts/pratikmali24_embeddedsystems-microcontrollers-iitb-activity-7227575130330132480-ecHJ?utm_source=share&utm_medium=member_desktop",
      heading: "NPTEL Microcontroller Certificate",
      description: "Achieved certification from the NPTEL IIT-M workshop on Microcontrollers, focusing on Embedded C, Assembly Language, and practical projects."
    },
    
    {
      image: mlIntern,
      link:"https://www.linkedin.com/posts/pratikmali24_ai-machinelearning-tensorflow-activity-7240973293015515136-qG-h?utm_source=share&utm_medium=member_desktop",
      heading: "Virtual Internship AI/ML",
      description: "The AI/ML Virtual Internship with EduSkills, supported by Google for Developers, focused on advanced machine learning topics such as Object Detection and TensorFlow. This hands-on program provided practical experience and insights into real-world AI applications."
    }
  ]
  


const MyWork = () => {
  return (
    <Container id='certification'>
      
    <div className="heading" style={{
  fontFamily: 'cocogoose',
  fontWeight: 'bolder',
  color: 'white',
  fontSize: '2rem'
}}>Certification</div>

    <Row>
      {certification.map((skill, index) => (
        <Col key={index} md={4} className="mb-4  d-flex justify-content-center">
          <Card style={{ width: '18rem', height: 'auto', position: 'relative'}} className='certificates_card'>
            <Card.Img variant="top" src={skill.image} className="card-img-top container certificates_card_img" />
            <Card.Body>
              <Card.Title>{skill.heading}</Card.Title>
              <Card.Text>{skill.description}</Card.Text>
              <Button variant="primary" href={skill.link} target="_blank" className='project_vist'><strong>See Certificate</strong></Button>
              
            </Card.Body>
          </Card>
       
        </Col>
      ))}
    </Row>
  </Container>

  );
}

export default MyWork;
