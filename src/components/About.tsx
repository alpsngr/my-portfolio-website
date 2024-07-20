import React from "react";
import "./About.css";

const About: React.FC = () => {
  return (
    <div className="section-blue">
      <section id="projects">
        <h2>About Me</h2>
        <article>
          <div className="text">
            <h3>Career & Interests</h3>
            <p className="blackbox">
              <p className="blackbox">
                I am a Civil Engineer with a Master&apos;s degree. Since 2010, I
                have been working in this field, focusing on hydraulic
                structures, particularly dam and HEPP projects. I have been
                operating my own company in this field since 2018. In 2023, I
                began learning software development to become a web developer.
                <br />
                Outside of work, I enjoy engaging in various activities. I have
                played professional basketball for many years and still continue
                to play in amateur league. Additionally, I enjoy traveling,
                playing computer games, fitness, and swimming.
              </p>
            </p>
            <h4>My favourite technologies include:</h4>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>React</li>
              <li>Next.js</li>
            </ul>
          </div>
          <img src="/img/alp.png" className="about-image" alt="That's me." />
        </article>
      </section>
    </div>
  );
};

export default About;
