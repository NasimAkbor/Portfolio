import React from "react";
import { Link } from "react-router-dom";

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
                <Link className="individualTab" onClick={prop.click} to="/resume">
                    Resume
                </Link>
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
