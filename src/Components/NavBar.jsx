import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navBar">
      <p id="navName">Jordan Biehl</p>
      <Link className="navLink" to="/">
        Home
      </Link>
      <Link className="navLink" id="portfolioLink" to="/portfolio">
        Portfolio
      </Link>
      <Link className="navLink" id="aboutLink" to="/about">
        About
      </Link>
    </div>
  );
};

export default NavBar;
