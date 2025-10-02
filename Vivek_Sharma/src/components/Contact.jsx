import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import resumePdf from '../assets/Vivek_Kumar_Resume.pdf';

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl"
      >
        Get in Touch
      </motion.h2>


      <div className="text-center tracking-tighter">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="my-4"
        >
          {CONTACT.address}
        </motion.p>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="my-4"
        >
          {CONTACT.phoneNo}
        </motion.p>
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=${CONTACT.email}"
          className="border-b"
        >
          {CONTACT.email}
        </a>
      </div>

      {/* Add your resume link here */}
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl"
      >
        <a
          href={resumePdf}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-4 py-2 text-white bg-black-600 rounded hover:bg-green-700 transition duration-200"
        >
          Hire me
        </a>
      </motion.h2>


    </div>
  );
};

export default Contact;
