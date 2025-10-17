import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import CardSwap, { Card } from "./CardSwap";
import isihwin from "../assets/isihwin.jpg";
import googleCertificate from "../assets/googleCertificate.jpg";
import codesummit from "../assets/codesummit.jpg";

const Certificates = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    const form = useRef();

    e.preventDefault();

    emailjs.sendForm(
      "service_zvzk778", 
      "YOUR_TEMPLATE_ID", 
      form.current, 
      "YOUR_PUBLIC_KEY"
    ).then(
      (result) => {
        console.log(result.text);
        alert("Message sent successfully!");
      },
      (error) => {
        console.log(error.text);
        alert("Failed to send message.");
      }
    );
  };

  return (
    <div
      id="certificates"
      className="relative w-full min-h-screen flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 text-white px-4 sm:px-6 py-16 transition-all duration-300"
    >
      {/* Contact Form */}
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

      {/* Certificates Section */}
      {/* <div className="fix-screen-shake w-full max-w-2xl lg:flex overflow-y-hidden ">


        <div className="hidden md:block ">
          <CardSwap
            cardDistance={60}
            verticalDistance={30}
            delay={2000}
            pauseOnHover={true}
          >
            <Card>
              <div className="w-full h-full">
                <h3 className="text-lg font-semibold mb-2 px-5">
                  🏆 ISIH 2025 Winner
                </h3>
                <img
                  src={isihwin}
                  alt="ISIH 25"
                  className="rounded-lg object-cover w-full p-5 mb-3"
                />
                <p className="text-sm text-white font-semibold">
                  Internal Smart India Hackathon 2025, Top 50 among 3000+ students.
                </p>
              </div>
            </Card>
            <Card>
              <div className="w-full h-full">
                <h3 className="text-lg font-semibold mb-2 px-5">
                  GenAI Exchange Program
                </h3>
                <img
                  src={googleCertificate}
                  alt="Google Certificate"
                  className="rounded-lg object-cover w-full p-5 mb-3"
                />
                <p className="text-sm text-white font-semibold">
                  Completed by Google Cloud & Hack2Skill – Generative AI, Vertex AI,
                  Gemini SDK.
                </p>
              </div>
            </Card>
            <Card>
              <div className="w-full h-full">
                <h3 className="text-lg font-semibold mb-2 px-5">
                  RAIT Code Summit 2024
                </h3>
                <img
                  src={codesummit}
                  alt="Code Summit"
                  className="rounded-lg object-cover w-full p-5 mb-3"
                />
                <p className="text-sm text-white font-semibold">
                  Advanced to Round 2 – Top 100 participants out of thousands.
                </p>
              </div>
            </Card>
          </CardSwap>
        </div>
      </div> */}
    </div>
  );
};

export default Certificates;