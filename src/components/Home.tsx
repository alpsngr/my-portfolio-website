import React from "react";

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <section id="intro">
        <p className="name">
          Hi, my name is <span>Alper Sungur.</span>
        </p>
        <h2>Web Developer</h2>
        <p className="highlight">
          Html/CSS/JavaScript/TypeScript/React/Node.js
        </p>
        <p className="description">
          I specialize in creating modern and user-friendly web applications
          using these technologies. I enjoy learning new technologies and
          continuously improving my skills.
        </p>
        <p>
          My Portfolio <a href="https://github.com/alpsngr">My Github</a>.
        </p>
      </section>
    </div>
  );
};

export default Home;
