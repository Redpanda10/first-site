import React from 'react';
import { FaLinkedin, FaFacebook, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className="contact">
      <h2>Contact Me</h2>
      <form>
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Email" />
        <textarea placeholder="Message"></textarea>
        <button type="submit">Send</button>
      </form>
      <div className="social-links">
        <a href="budalmohitsing@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Email">
          <FaEnvelope size={24} />
        </a>
        <a href="https://www.linkedin.com/in/mohit-singh-budal-3a7921268/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedin size={24} />
        </a>
        <a href="https://www.facebook.com/mohitsingh.budal.1" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <FaFacebook size={24} />
        </a>
      </div>
    </section>
  );
};

export default Contact;
