import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

    const templateParams = {
      name: name,
      email: email,
      time: new Date().toLocaleString(),
      message: message,
    };

    try {
      await emailjs.send(serviceID, templateID, templateParams, publicKey);
      alert("Message sent successfully!");
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("Failed to send message:", error);
      alert(
        `Failed to send the message. Error: ${error.text || error.message}`
      );
    }
  };

  return (
    <div className="contact">
      <h2 className="contact-title">Keep in touch!</h2>
      <div className="contact-info">
        <a
          href="mailto:uzma.ferdous@mail.utoronto.ca"
          className="contact-link contact-tag1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaEnvelope className="contact-icon" />
          uzma.ferdous@mail.utoronto.ca
        </a>
        <a
          href="https://linkedin.com/in/uzma-ferdous"
          className="contact-link contact-tag2"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="contact-icon" />
          LinkedIn
        </a>
        <a
          href="https://github.com/uzFer"
          className="contact-link contact-tag3"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="contact-icon" />
          GitHub
        </a>
      </div>

      <div className="contact-email-section">
        <h3 className="contact-subtitle">Send me a message</h3>
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows="5"
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-button">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
