import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/6.png";
import HeaderSocial from "./HeaderSocial";

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Ruchika Sharma</h1>
        <h5 className="text-light">FullStack Developer</h5>
        <CTA />
        <HeaderSocial />
        <div className="me">
          <img src={ME} className alt="" />
        </div>
        <a href="#contact" className="scroll_down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
