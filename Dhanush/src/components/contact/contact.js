import classes from "./contact.module.css";

import SendIcon from "@mui/icons-material/Send";
import { useRef } from "react";

import emailjs from "@emailjs/browser";

const Contact = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const aboutRef = useRef();
  const messageRef = useRef();

  const SubmitHandler = (event) => {
    event.preventDefault(event);

    emailjs
      .sendForm(
        "service_sy0l09h",
        "template_buzt4wc",
        event.target,
        "2U8me84LzRudZXhcA"
      )
      .then((red) => {
        console.log("Successful");
      })
      .catch((err) => {
        alert(err);
      });

    alert("Successfully Sent!!");

    event.preventDefault();
  };

  return (
    // <section>
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.form_div}>
          <form onSubmit={SubmitHandler}>
            <div className={classes.align}>
              <div className={classes.contact}>
                <label>Your Name</label>
                <br />
                <input
                  ref={nameRef}
                  name="from_name"
                  placeholder="Enter Name"
                  size="30"
                  type="text"
                  autocomplete="off"
                />

                <label>Email</label>
                <br />
                <input
                  ref={emailRef}
                  size="30"
                  name="person_Email"
                  type="email"
                  placeholder="Enter Email"
                  autocomplete="off"
                />

                <label>About You</label>
                <br />
                <input
                  ref={aboutRef}
                  name="about_person"
                  size="30"
                  type="text"
                  placeholder="eg: a Developer"
                  autocomplete="off"
                />

                <label>Message</label>
                <br />
                <textarea
                  ref={messageRef}
                  name="message"
                  rows="5"
                  cols="35"
                  placeholder="Hello...."
                  autocomplete="off"
                />
                <div className={classes.Button}>
                  <div className={classes.button}>
                    <button>
                      <span className={classes.span}>Send</span>
                      <SendIcon style={{ marginTop: "9px" }} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className={classes.map}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6406.301711574417!2d80.12033621589455!3d14.391612751735849!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4c5f125b3220bd%3A0x4d38aa5e71ff2830!2sEduru%2C%20Andhra%20Pradesh%20524311!5e0!3m2!1sen!2sin!4v1653056358766!5m2!1sen!2sin"
            width="470"
            height="450"
            style={{ border: "0px", borderRadius: "10px" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
    // </section>
  );
};

export default Contact;
