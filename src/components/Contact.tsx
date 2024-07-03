import React from "react";
import "./Contact.css";

const Contact: React.FC = () => {
  return (
    <div className="contact-container">
      <section id="contact">
        <h2>Contact Me</h2>
        <p>
          If you have any questions or want to get in touch, feel free to reach
          out via email or LinkedIn. Alternatively, you can fill out the contact
          form below.
        </p>
        <form action="https://formspree.io/f/mldrejqb" method="POST">
          <label>
            Your Name:
            <input type="text" name="name" required />
          </label>
          <label>
            Your Email:
            <input type="email" name="_replyto" required />
          </label>
          <label>
            Your Message:
            <textarea name="message" required></textarea>
          </label>
          <button type="submit">Send</button>
        </form>
        <div className="social-links">
          <ul>
            <li>
              <a
                href="https://www.linkedin.com/in/alper-sungur-62601a55/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span
                  className="fa-brands fa-linkedin"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">LinkedIn</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/alpsngr"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="fa-brands fa-github" aria-hidden="true"></span>
                <span className="sr-only">Github</span>
              </a>
            </li>
            <li>
              <a
                href="mailto:alpersungur@tudamuhendislik.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span
                  className="fa-solid fa-envelope"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">E-mail</span>
              </a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Contact;
