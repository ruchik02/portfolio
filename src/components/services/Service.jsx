import React from "react";
import "./service.css";
// import { BsCheckLg } from "react-icons/bs";

const Service = () => {
  return (
    <section id="services">
      <h5>Where</h5>
      <h2>I've Worked</h2>
      {/* Start of software -2 */}
      <div className="container service_container">
      <article className="serivce">
          <div className="service_head">
            <h3>Software Engineer-2 </h3>
          </div>
          <ul className="service_list">
            <li>
              <p>
                I am currently working as a Software Engineer -2 at GeekyAnts,
                where I actively contribute to the design and implementation of
                software solutions. My passion for exploring new technologies
                drives my continuous learning and proactive adaptation to the
                ever-changing landscape of software development. I thrive in
                collaborative environments and embrace challenges with a
                forward-thinking mindset. My work involves not just technical
                contributions, but also fostering the success of
                cross-functional teams. I am committed to personal and
                professional growth and am eager to continue making impactful
                contributions to the dynamic field of software development at
                GeekyAnts.
              </p>
            </li>
          </ul>
        </article>
        {/* end of software -2 */}
        {/* start of software */}
        <article className="serivce">
          <div className="service_head">
            <h3>Software Engineer -1</h3>
          </div>
          <ul className="service_list">
            <li>
              <p>
                I worked as a Software Engineer -1 at GeekyAnts.I possess a keen
                interest in exploring new technologies.I am actively involved in
                the design and implementation of software solutions,
                contributing to the success of cross-functional teams.I believe
                in continuous learning and have a proactive approach to adapting
                to new technologies. I am excited about the dynamic nature of
                the software development field.I thrive in collaborative
                environments, embracing challenges with a proactive mindset.
                Committed to continuous growth.I look forward to further
                contributing to the ever-evolving landscape of software
                development at GeekyAnts.
              </p>
            </li>
          </ul>
        </article>
        {/* end of software */}
        {/* start of internsip */}
        <article className="serivce">
          <div className="service_head">
            <h3>Internship</h3>
          </div>
          <ul className="service_list">
            <li>
              <p>
                I worked as a Trainee Software Engineer at GeekyAnts for one
                year. I've been on an exciting journey of continuous learning
                and professional growth.During my tenure, I've had the privilege
                to work on innovative projects and enhance my skills in various
                technologies. This experience has been invaluable in building a
                solid foundation in software development and problem-solving. I
                am grateful for the mentorship and support provided by the
                GeekyAnts team, which has accelerated my professional
                growth.Looking forward to further contributing to GeekyAnts'
                mission of pushing the boundaries of innovation and excellence
                in software development.
              </p>
            </li>
          </ul>
        </article>
        {/* end of internship */}
      </div>
    </section>
  );
};

export default Service;
