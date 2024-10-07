import React from "react";
import "./About.css";
import { Container, Row, Col } from "react-bootstrap";
import aboutMe from './assets/images/about_me.jpg'
import aboutJourney from './assets/images/about_journey.jpg'
import aboutGoals from './assets/images/about_goals.jpg'
import aboutHobby from './assets/images/about_hooby.jpg'
import aboutWho from './assets/images/about_who_I.jpg'
import aboutConnect from './assets/images/about_connect.jpg'
import Image from "react-bootstrap/Image";

export default function About() {
  return (
    <div id="about">
      <div
        className="heading"
        style={{
          fontFamily: "cocogoose",
          fontWeight: "bolder",
          color: "white",
          fontSize: "2rem",
        }}
      >
        Get to Know <span className="home_name"> Pratik Mali</span>
      </div>

      <Container>
        <Row>
          <Col md={6}>
            <div className="grid-item d-flex justify-content-center" >
              <div className="about_subheading">
                <p
                className="head"
                  style={{
                    fontFamily: "cocogoose",
                    fontWeight: "bolder",
                    fontSize: "2rem",
                    color: "#cd0ff9",
                    
                  }}
                >
                  About Me
                </p>
                <p className="info">
                  Hi, I'm Pratik Mali. I'm a passionate and driven individual
                  currently pursuing a degree in technology-related fields at
                  <a href="https://metbhujbalknowledgecity.ac.in/" className="link_about" target="_blank">MET Institute of Engineering</a>. Originally from Nashik, I've always been
                  fascinated by technology and innovation, which led me to where
                  I am today.
                </p>
              </div>
            </div>
          </Col>
          <Col md={6}>
            <div className="grid-item d-flex justify-content-center">
              <Image
            src={aboutMe}
            alt="Pratik"
            className="img-fluid rounded-circle about_img_size "
          />
          </div>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <div className="grid-item d-flex justify-content-center">
            <Image
            src={aboutJourney}
            alt="Pratik"
            className="img-fluid rounded-circle about_img_size "
          />
            </div>
          </Col>
          <Col md={6}>
            <div className="grid-item d-flex justify-content-center">
              <div className="about_subheading">
                <p
                className="head"
                  style={{
                    fontFamily: "cocogoose",
                    fontWeight: "bolder",
                    fontSize: "2rem",
                    color: "#cd0ff9",
                  }}
                >
                  My Journey
                </p>
                <p className="info">
                From an early age, I've been captivated by the world of technology and its magical ability to automate tasks and conjure up innovative solutions. This fascination soon bloomed into a full-blown passion that propels me to dive headfirst into fields like IoT, web development, and sensor technology. Whether I'm concocting fresh web applications or tinkering with mind-boggling automation projects, I'm always on the lookout to push boundaries and sprinkle a little innovation fairy dust wherever I go.
                </p>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <div className="grid-item d-flex justify-content-center">
              <div className="about_subheading">
                <p
                className="head"
                  style={{
                    fontFamily: "cocogoose",
                    fontWeight: "bolder",
                    fontSize: "2rem",
                    color: "#cd0ff9",
                  }}
                >
                  Who I Am
                </p>

                <p className="info">
                I've come to believe that perseverance, creativity, and strong leadership are not just professional virtues but essential qualities that enrich every aspect of life. Those who know me best describe me as dedicated, innovative, collaborative, and a natural leader. These traits have not only shaped my professional journey but also define how I approach challenges and opportunities in my personal life. They're the compass that guides me as I strive to excel in everything I do.
                </p>
              </div>
            </div>
          </Col>
          <Col md={6}>
            <div className="grid-item d-flex justify-content-center">
            <Image
            src={aboutWho}
            alt="Pratik"
            className="img-fluid rounded-circle about_img_size "
          />
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <div className="grid-item d-flex justify-content-center">
            <Image
            src={aboutGoals}
            alt="Pratik"
            className="img-fluid rounded-circle about_img_size "
          />
            </div>
          </Col>
          <Col md={6}>
            <div className="grid-item d-flex justify-content-center">
              <div className="about_subheading">
                <p
                className="head"
                  style={{
                    fontFamily: "cocogoose",
                    fontWeight: "bolder",
                    fontSize: "2rem",
                    color: "#cd0ff9",
                  }}
                >
                  {" "}
                  Looking Ahead
                </p>

                <p className="info">
                My ultimate goal is to blaze a trail as a leading engineer in the tech industry. I'm driven by a passion to revolutionize the field through groundbreaking technologies that enhance efficiency and automate processes, paving the way for a brighter future. I can't wait to seize every opportunity that comes my way and make a lasting impact in the world of technology.
                </p>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <div className="grid-item d-flex justify-content-center">
              <div className="about_subheading">
                <p
                className="head"
                  style={{
                    fontFamily: "cocogoose",
                    fontWeight: "bolder",
                    fontSize: "2rem",
                    color: "#cd0ff9",
                  }}
                >
                  Beyond Books
                </p>

                <p className="info">
                Outside of my academic and professional pursuits, I enjoy gaming and listening to music. These activities help me stay balanced and energized. Whether it's immersing myself in the latest video games or discovering new music genres and artists, I find joy in exploring diverse interests and enjoying moments of relaxation through music.
                </p>
              </div>
            </div>
          </Col>
          <Col md={6}>
            <div className="grid-item d-flex justify-content-center">
            <Image
            src={aboutHobby}
            alt="Pratik"
            className="img-fluid rounded-circle about_img_size "
          />
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <div className="grid-item d-flex justify-content-center">
            <Image
            src={aboutConnect}
            alt="Pratik"
            className="img-fluid rounded-circle about_img_size "
          />
            </div>
          </Col>
          <Col md={6}>
            <div className="grid-item d-flex justify-content-center">
              <div className="about_subheading">
                <p
                className="head"
                  style={{
                    fontFamily: "cocogoose",
                    fontWeight: "bolder",
                    fontSize: "2rem",
                    color: "#cd0ff9",
                  }}
                >
                  Let's Connect
                </p>

                <p className="info">
                I'm always eager to connect with like-minded individuals and explore new opportunities. Feel free to reach out to me at <a href="mailto:pratikmali242005@gmail.com" className="link_about" target="_blank">pratikmali242005@gmaiil.com</a> or connect with me on<a href="https://www.linkedin.com/in/pratikmali24/" className="link_about" target="_blank">LinkedIn</a>. 
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
