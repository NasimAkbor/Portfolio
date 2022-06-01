import React from "react";
import { MdEmail } from "react-icons/md";
import { BsGithub, BsLinkedin } from "react-icons/bs";

function Contact() {
  return (
    <div className="contactOptions">
      <h1 className="contactTitle">Contact Me:</h1>
      <div className="contactIcons">
        <a href="mailto:akbor.nasim@gmail.com" alt="Github" target="_blank" rel="noreferrer">
          <MdEmail /> Email
        </a>
        <a href="https://github.com/nasimakbor" alt="Github" target="_blank" rel="noreferrer" >
          <BsGithub /> Github
        </a>
        <a href="https://www.linkedin.com/in/nasim-akbor/" alt="Github" target="_blank" rel="noreferrer">
          <BsLinkedin /> LinkedIn
        </a>
      </div>
    </div>
  )

}

export default Contact;