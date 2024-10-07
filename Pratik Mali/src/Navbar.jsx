import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link as ScrollLink } from 'react-scroll';
import { motion, useAnimation } from 'framer-motion';
import './Navbar.css';

const CustomNavbar = () => {
  const [navbarBg, setNavbarBg] = useState('transparent');
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 100) {
        setNavbarBg('#857d7d54');
      } else {
        setNavbarBg('transparent');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    controls.start({ backgroundColor: navbarBg, transition: { duration: 0.5 } });
  }, [navbarBg, controls]);

  return (
    <Navbar expand="lg" className="justify-content-between sticky-top">
      <Container>
        <Navbar.Brand
          as={ScrollLink}
          to="home"
          smooth={true}
          duration={500}
          className="fs-1 text-light"
        >
          Pratik <span className="surname">Mali</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar-light" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="fs-4">
            <Nav.Link
              as={ScrollLink}
              to="home"
              smooth={true}
              duration={100}
              spy={true}
              exact="true"
              activeClass="active-link"
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={ScrollLink}
              to="education"
              smooth={true}
              duration={100}
              spy={true}
              exact="true"
              activeClass="active-link"
            >
              Education
            </Nav.Link>
            <Nav.Link
              as={ScrollLink}
              to="skills"
              smooth={true}
              duration={100}
              spy={true}
              exact="true"
              activeClass="active-link"
            >
              MySkills
            </Nav.Link>
            <Nav.Link
              as={ScrollLink}
              to="projects"
              smooth={true}
              duration={100}
              spy={true}
              exact="true"
              activeClass="active-link"
            >
              Projects
            </Nav.Link>
            <Nav.Link
              as={ScrollLink}
              to="certification"
              smooth={true}
              duration={100}
              spy={true}
              exact="true"
              activeClass="active-link"
            >
              Certification
            </Nav.Link>
            <Nav.Link
              as={ScrollLink}
              to="about"
              smooth={true}
              duration={100}
              spy={true}
              exact="true"
              activeClass="active-link"
            >
              About
            </Nav.Link>
            <Nav.Link
              as={ScrollLink}
              to="contact"
              smooth={true}
              duration={100}
              spy={true}
              exact="true"
              activeClass="active-link"
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <motion.div
        className="navbar-background"
        animate={controls}
        style={{ height: '100%' }}
      />
    </Navbar>
  );
};

export default CustomNavbar;
