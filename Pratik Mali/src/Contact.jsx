import {React,useState} from 'react'
import './Contact.css'
import {Container,Row,Col,Image} from 'react-bootstrap';
import contactImage from './assets/images/Contact.png';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import api from './utils/api';
import Swal from 'sweetalert2';
export default function Contact() {

  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
  const [message,setMessage]=useState("")

  const contactBtn=async(e)=>{
    e.preventDefault()
    const messageSend={name,email,message}
    try {
    const response=await api.post('/messages/send',messageSend)
    console.log(response)
    Swal.fire("Done",
      "Successfully send message"
    );
    } catch (error) {
      Swal.fire(
        "Error",
        error.response ? error.response.data.message : "Unknown error"
      );
      console.log(error.response)
    }

  }

  return (
    <div id='contact'>
      
      <div className='heading' style={{
          fontFamily: "cocogoose",
          fontWeight: "bolder",
          color: "white",
          fontSize: "2rem",
        }}>Contact Me</div>
      <Container className='d-flex justify-content-center'>
        
      <Row className='contact_bg'>
          <Col md={6}>
          <Form>
            <h2 className='contactForm_heading'>Contact ME</h2>
      
        <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label className='label_name'>Name</Form.Label>
        <Form.Control type="name" placeholder="Enter Name" className='field_area' onChange={(e)=>{setName(e.target.value)}}/>


      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className='label_name'>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" className='field_area' onChange={(e)=>{setEmail(e.target.value)}}/>
        
      </Form.Group>

      <Form.Group controlId="formBasicMessage">
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" placeholder="Message" className='field_area' onChange={(e)=>{setMessage(e.target.value)}}/>
      </Form.Group>

     

      <Button className='contactBtn' onClick={contactBtn}>
        <strong>Submit</strong>
      </Button>
    </Form>
          </Col>
          <Col md={6}>
            <div className="grid-item d-flex justify-content-center">
              <Image
            src={contactImage}
            alt="ContactMe"
            className="img-fluid contact_img"
          />
          </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
