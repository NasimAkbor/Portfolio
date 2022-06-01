import React from "react";
import { Link } from "react-router-dom";
import Resume from "../files/Resume.pdf";
import { MdOutlineFileDownload } from "react-icons/md";


function Nav(prop) {
  return (
    <nav>
      <div className="navTab">
        <Link className="individualTab" onClick={prop.click} to="/">
          Home
        </Link>
      </div>
      <div className="navTab">
        <Link className="individualTab" onClick={prop.click} to="/about">
          About
        </Link>
      </div>
      <div className="navTab">
        <Link className="individualTab" onClick={prop.click} to="/projects">
          Projects
        </Link>
      </div>
      <div className="navTab">
        <a
          className="navLink"
          href={Resume}
          target="_blank"
          rel="noreferrer"
        >
          <div className="icon">
            Resume <MdOutlineFileDownload />
          </div>
        </a>
      </div>
      <div className="navTab">
        <Link className="individualTab" onClick={prop.click} to="/contact">
          Contact Me
        </Link>
      </div>
    </nav>
  );
}

export default Nav;
