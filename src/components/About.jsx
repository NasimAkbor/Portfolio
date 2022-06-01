import React from "react";
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
        <p className="aboutPara">
          A Full-Stack Developer that loves to help others achieve their goals.
          I enjoy strategically breaking down problems in an effort to provide creative solutions.
          My initial contact with the world of coding happened in highschool. I was fortunate enough to
          partake in AP Java courses. I then went to college for finance and become an analyst. Along the way
          I dabbled in some R; but overall had moved away from coding. In recent years I have come to find myself
          drawn back to this particular world of problem-solving.
        </p>
      </div>
      <div className="icons">
        <img src={JS} alt='JavaScript' />
        <img src={CSS} alt='CSS' />
        <img src={HTML} alt='HTML' />
        <img src={EX} alt='Express' />
        <img src={NJS} alt='NodeJs' />
        <img src={MDB} alt='MongoDB' />
        <img src={PSQL} alt='PostgreSQL' />
        <img src={PY} alt='Python' />
        <img src={DJ} alt='Django' />
        <img src={GH} alt='GitHub' />
        <img src={HK} alt='Heroku' />
      </div>
    </div>
  );
}

export default About;
