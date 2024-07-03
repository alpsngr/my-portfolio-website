import React, { useState, useEffect } from "react";
import "./Projects.css";

const Projects: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a network request
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500); // 2 seconds loading time for demo purposes

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="projects-container">
      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className="project-details">
          <h3>1. My Portfolio Website</h3>
          <p>
            This portfolio website is created using HTML, CSS, JavaScript,
            React, and TypeScript. The aim is to showcase my skills and
            projects, and provide a platform for potential employers and clients
            to contact me.
          </p>
          <p>
            The website features a responsive design, a contact form for direct
            communication, and sections for About Me, Projects, and more. It is
            a work in progress, with more features and improvements to be added
            over time.
          </p>
        </div>
      )}
    </div>
  );
};

export default Projects;
