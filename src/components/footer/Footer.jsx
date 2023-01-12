import React from "react";
import './footer.css'
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
const Footer = () => {
  return (
    <footer id="footer">
      <a href="#" className="footer_logo">
        Portfolio
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        </ul>

        <div className="footer_socials">
          <a href="https://www.linkedin.com/in/er-ruchika-sharma/" target="_blank">
            <BsLinkedin />
          </a>
          <a href="https://github.com/ruchik02" target="_blank">
            <BsGithub />
          </a>
          <a href="https://instagram.com" target="_blank">
            <BsInstagram />
          </a>
        </div>
        <div className="footer_copyrights">
            <small>&copy; Ruchika . All right reserved</small>
        </div>
      
    </footer>
  );
};

export default Footer;
