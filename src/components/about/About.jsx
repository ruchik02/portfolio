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
            <small>0+ Years Working</small>
          </article>

          <article className="about_card">
            <FiUsers className="about_icons" />
            <h5>Clients</h5>
            <small>300+ Worldwide</small>
          </article>

          <article className="about_card">
            <VscFolderLibrary className="about_icons" />
            <h5>Projects</h5>
            <small>50+ Completed </small>
          </article>
        </div>
        <p>
          4th-year Computer Science Engineering and doing specialization in Full-stack. I have 
          a huge interest in a web development. I have learned: HTML,CSS,Javascript,Bootstrap,React,MERN etc.  I have joined Geekyants as SDE intern.The aim of my life is to become a good Knowledgeable person
          and the share the acquired knowledge in the CS domain as much as possible.
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
