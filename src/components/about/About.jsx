import React from "react";
import Me from "../../assets/2.jpg";
import "./about.css";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={Me} alt="about-image" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icons" />
              <h5>Experience</h5>
              <small>2.5+ Years Working</small>
            </article>

            <article className="about_card">
              <FiUsers className="about_icons" />
              <h5>Clients</h5>
              <small>150+ Worldwide</small>
            </article>

            <article className="about_card">
              <VscFolderLibrary className="about_icons" />
              <h5>Projects</h5>
              <small>50+ Completed </small>
            </article>
          </div>
          <p>
            I am a skilled software developer with over 2.5+ year of valuable
            experience, currently employed at GeekyAnts. My expertise primarily
            lies in React, SwiftUI and React-Native. I possess in-depth knowledge of
            various technologies and tools including git, state management,
            routing, and lifecycle methods within React applications. My passion
            for coding drives me to continually expand my skill set and stay
            up-to-date with industry trends. I am committed to delivering
            high-quality software solutions and thrive in collaborative,
            innovative environments.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;