import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  
  const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
      time: new Date().toLocaleString(),
    };
    
    emailjs
      .send(
          "service_zvzk778",
          "template_a17x463",
          templateParams,
          "lxjvQw39Ecq4MUc2J"
        )
        .then(
            (response) => {
                console.log("SUCCESS!", response.status, response.text);
                setSubmitted(true);
                setFormData({ name: "", email: "", message: "" });
                setTimeout(() => setSubmitted(false), 5000); // hide success message after 5s
              },
        (err) => {
          console.log("FAILED...", err);
        }
      );
    
};
  // try {
  //   const res = await fetch(
  //     "https://hackvent-backend.onrender.com/api/user/send-email",
  //     {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(formData),
  //     }
  //   );

  //   if (res.ok) {
  //     setSubmitted(true);
  //     setFormData({ name: "", email: "", message: "" });
  //     setTimeout(() => setSubmitted(false), 5000); // hide message after 5s
  //   } else {
  //     const errMsg = await res.text();
  //     alert("Error sending message: " + errMsg);
  //   }
  // } catch (err) {
  //   console.error(err);
  //   alert("Error sending message: " + err.message);
  // }



  return (
    <div className="w-full max-w-md mx-auto p-6 border border-gray-600 rounded-xl shadow-lg shadow-whiteGlow hover:shadow-xl hover:shadow-whiteGlow transition-all duration-300 lg:flex-1">
      <h2 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
        Contact Me
      </h2>

      {submitted && (
        <div className="mb-4 p-3 bg-green-500/10 border border-green-400 rounded-lg text-green-400 text-center animate-pulse">
          Thanks for reaching out! I will get back to you soon.
        </div>
      )}

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
          className="p-3 rounded-lg bg-gray-800 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder-gray-400"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          required
          className="p-3 rounded-lg bg-gray-800 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder-gray-400"
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          rows="5"
          required
          className="p-3 rounded-lg bg-gray-800 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none placeholder-gray-400"
        ></textarea>
        <button
          type="submit"
          className="cursor-target bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 rounded-lg py-3 font-semibold text-white shadow-lg"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
