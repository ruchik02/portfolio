import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

const HeaderSocial = () => {
  return (
    <div className="header_socials">
      <a href="https://www.linkedin.com/in/er-ruchika-sharma/"  target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com/ruchik02"  target="_blank">
        <BsGithub />
      </a>
      <a href="https://instagram.com" target="_blank">
        <BsInstagram />
      </a>
    </div>
  );
};

export default HeaderSocial;
