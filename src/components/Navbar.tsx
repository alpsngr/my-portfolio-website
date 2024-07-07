import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar: React.FC = () => {
  return (
    <nav>
      <ul>
        <li>
          <h1>
            <Link to="/">
              <span className="fa-solid fa-code" aria-hidden="true"></span>{" "}
              <span>Alper Sungur</span>
            </Link>
          </h1>
        </li>
        <li className="top-nav">
          <Link to="/projects">Projects</Link>
        </li>
        <li className="top-nav">
          <Link to="/about">About</Link>
        </li>
        <li className="top-nav">
          <Link to="/contact">Contact</Link>
        </li>
        <li className="top-nav">
          <a
            href="https://www.linkedin.com/in/alper-sungur-62601a55/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="fa-brands fa-linkedin" aria-hidden="true"></span>{" "}
            <span className="sr-only">Linkedin</span>
          </a>
        </li>
        <li className="top-nav">
          <a
            href="https://github.com/alpsngr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="fa-brands fa-github" aria-hidden="true"></span>{" "}
            <span className="sr-only">Github</span>
          </a>
        </li>
        <li className="hidden">
          {" "}
          {/* Resume link is hidden */}
          <a
            href="https://github.com/alpsngr"
            target="_blank"
            rel="noopener noreferrer"
            className="button"
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
