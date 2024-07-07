import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "./App.css";

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="main-container">
          <div className="gradient"></div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <div className="gradient"></div>
        </div>
        <footer className="bottom-footer">
          <h2 id="alp">Alper Sungur &middot; Web Developer</h2>
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
                href="mailto:alpersungur@tudamuhendislik.com.tr"
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
        </footer>
      </div>
    </Router>
  );
};

export default App;
