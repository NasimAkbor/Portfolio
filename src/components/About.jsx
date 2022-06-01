import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div id="about-me" className="App">
      <h1>Hello, I am Nasim Akbor</h1>
      <div className="about-me">
        <div className="profile-pic"></div>
        <p>
          A Full-Stack Developer that loves to help others achieve their goals.
          I enjoy strategically breaking down problems in an effort to provide creative solutions.
          My previous work in finance has allowed me to gain experience in working with teams and across
          departments. Being sociable and understanding people as you bounce ideas towards a bigger picture provides a satisfying work
          environment. Nothing beats the feeling of seeing your work make a difference, whether it be on a large scale or helping something
          progress along the way.
        </p>
      </div>
    </div>
  );
}

export default About;
