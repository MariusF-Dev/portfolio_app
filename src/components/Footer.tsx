import React from "react";
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="mt-16 py-6 text-center bg-accent">
      Built by Marius Florescu. Source code available on GitHub.
      <br />
      <a href='https://www.linkedin.com/in/mariusflorescu/' target="_blank" rel="noopener">
        <AiOutlineLinkedin className="inline-block ml-2" size={25} /> 
      </a> 
      <a href='https://github.com/MariusF-Dev' target="_blank" rel="noopener">
        <AiOutlineGithub className="inline-block ml-2" size={25} />
      </a>
    </div>
  );
};

export default Footer;