import React from "react";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <h2 className="contact-title">Keep in touch!</h2>
      <div className="contact-row">
        <a
          href="mailto:uzma.ferdous@mail.utoronto.ca"
          className="contact-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaEnvelope className="contact-icon" />
          uzma.ferdous@mail.utoronto.ca
        </a>
        <a
          href="https://linkedin.com/in/uzma-ferdous"
          className="contact-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="contact-icon" />
          LinkedIn
        </a>
        <a
          href="https://github.com/uzFer"
          className="contact-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="contact-icon" />
          GitHub
        </a>
      </div>
    </div>
  );
};

export default Contact;
