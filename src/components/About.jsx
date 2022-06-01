import React, { Fragment } from "react";
import JS from "../files/js.png";
import CSS from "../files/css-3.png";
import HTML from "../files/html-5.png";
import EX from "../files/Expressjs.png";
import NJS from "../files/nodejs.png";
import MDB from "../files/MongoDB_Logo.svg";
import PSQL from "../files/postgre.png";
import PY from "../files/python.png";
import DJ from "../files/django.png";
import GH from "../files/github.png";
import HK from "../files/Heroku.png";

function About() {
  return (
    <div id="about-me" className="App">
      <div className="about-me">
        <div className="profile-pic"></div>
        <p>
          Hello, I am Nasim Akbor. <br />
          A Full-Stack Developer that loves to help others achieve their goals.
          I enjoy strategically breaking down problems in an effort to provide creative solutions.
          My previous work in finance has allowed me to gain experience in working with teams and across
          departments. Being sociable and understanding people as you bounce ideas towards a bigger picture provides a satisfying work
          environment. Nothing beats the feeling of seeing your work make a difference, whether it be on a large scale or helping something
          progress along the way.
        </p>
      </div>
      <div className="icons">
        <img src={JS} />
        <img src={CSS} />
        <img src={HTML} />
        <img src={EX} />
        <img src={NJS} />
        <img src={MDB} />
        <img src={PSQL} />
        <img src={PY} />
        <img src={DJ} />
        <img src={GH} />
        <img src={HK} />
      </div>
    </div>
  );
}

export default About;
