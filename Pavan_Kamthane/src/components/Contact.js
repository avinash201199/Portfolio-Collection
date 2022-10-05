import React, { useState } from 'react'
import "./Navbar"
import "./Home"

const Contact = () => {

    const [userData, setUserData] = useState({
        fullName: "",
        email: "",
        subject: "",
        message: ""
    });

    let name, value;
    const postUserData = (event) => {
        name = event.target.name;
        value = event.target.value;

        setUserData({ ...userData, [name]: value });
    };

    // Connect with Firebase
    const submitData = async (event) => {
        event.preventDefault();
        const { fullName, email, subject, message } = userData;
        if (fullName && email && subject && message) {
            const res = await fetch(
                'https://pavan-kamthane-portfolio-default-rtdb.firebaseio.com/userDataRecords.json',
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        fullName,
                        email,
                        subject,
                        message,
                    })
                }
            );

            if (res) {
                setUserData({
                    fullName: "",
                    email: "",
                    subject: "",
                    message: "",
                });
                alert("Data Stored");
            } else {
                alert("Please fill the data")
            }
        } else {
            alert("Please fill the data")

        }
    };




    return (
        <>

            <section class="contact" id="contact">
                <div class="max-width">
                    <h2 class="title">Contact me</h2>
                    <div class="contact-content">
                        <div class="column left">
                            <div class="text">Get in Touch</div>
                            <p></p>
                            <div class="icons">
                                <div class="row">
                                    <i class="fas fa-user"></i>
                                    <div class="info">
                                        <div class="head">Name</div>
                                        <div class="sub-title">Pavan Kamthane</div>
                                    </div>
                                </div>

                                <div class="row">
                                    <i class="fas fa-envelope"></i>
                                    <div class="info">
                                        <div class="head">Email</div>
                                        <a href="https://mail.google.com/" target="_blank" class="sub-title">pavankamthane28122002@gmail.com</a>
                                    </div>
                                </div>

                                <div className="row">
                                    <i class="fab fa-linkedin"></i>
                                    <div className="info">
                                        <a href="https://www.linkedin.com/in/pavankamthane/" target="_blank" >
                                        <div className="head">Linkdin Profile</div>

                                        </a>
                                    </div>
                                </div>
                                
                                
                                <div className="row">
                                    <i class="fab fa-facebook"></i>
                                    <div className="info">
                                        <a href="https://www.facebook.com/profile.php?id=100075849620171" target="_blank" >
                                        <div className="head">Facebook Profile</div>
                                        </a>
                                    </div>
                                </div>


                                <div className="row">
                                    <i class="fab fa-instagram"></i>
                                    <div className="info">
                                        <a href="https://www.instagram.com/pavan__kamthane/" target="_blank" >
                                        <div className="head">Instagram Profile</div>
                                        </a>
                                    </div>
                                </div>

                                <div className="row">
                                    <i class="fab fa-twitter"></i>
                                    <div className="info">
                                        <a href="https://twitter.com/Pavan__Kamthane" target="_blank" >
                                        <div className="head">Twitter Profile</div>
                                        </a>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div class="column right">
                            <div class="text">Message me</div>
                            <form method="POST">
                                <div class="fields">
                                    <div class="field name">
                                        <input type="text" placeholder="Full Name" required
                                            name="fullName"
                                            value={userData.fullName}
                                            onChange={postUserData}
                                        />
                                    </div>
                                    <div class="field email">
                                        <input type="email" placeholder="Email" required
                                            name="email"
                                            value={userData.email}
                                            onChange={postUserData}
                                        />
                                    </div>
                                </div>
                                <div class="field">
                                    <input type="text" placeholder="Subject" required
                                        name="subject"
                                        value={userData.subject}
                                        onChange={postUserData}
                                    />
                                </div>
                                <div class="field textarea">
                                    <textarea cols="30" rows="10" placeholder="Message.." required
                                        name="message"
                                        value={userData.message}
                                        onChange={postUserData}
                                    ></textarea>
                                </div>
                                <div class="button-area">
                                    <button type="submit" onClick={submitData}>Send message</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}


export default Contact
