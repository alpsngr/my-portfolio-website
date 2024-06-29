import React from "react";
import "./Navbar.css";

const Navbar: React.FC = () => {
  return (
    <nav>
      <ul>
        <li>
          <h1>
            <a href="/">
              <span className="fa-solid fa-code" aria-hidden="true"></span>
              <span> Alper Sungur </span>
            </a>
          </h1>
        </li>
        <li>
          {" "}
          <a href="#projects"> Projects </a>{" "}
        </li>
        <li>
          {" "}
          <a href="#about"> About </a>{" "}
        </li>
        <li>
          {" "}
          <a href="#contact"> Contact </a>{" "}
        </li>
        <li>
          {" "}
          <a
            href="https://www.linkedin.com/in/alper-sungur-62601a55/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="fa-brands fa-linkedin" aria-hidden="true"></span>
            <span className="sr-only"> Linkedin </span>
          </a>
        </li>
        <li>
          {" "}
          <a
            href="https://github.com/alpsngr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="fa-brands fa-github" aria-hidden="true"></span>
            <span className="sr-only"> Github </span>
          </a>
        </li>
        <li>
          {" "}
          <a
            href="https://github.com/alpsngr"
            target="_blank"
            rel="noopener noreferrer"
            className="button"
          >
            {" "}
            Resume{" "}
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
