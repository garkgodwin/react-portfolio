import React from "react";
import "./Navbar.css";
import logoIcon from "../../assets/logo-main.svg";

import ResumePDF from "../../assets/resume.pdf";

const Navbar = () => {

  return (
    <nav className="Navbar">
      <button className="navbar-logo">
        <img src={logoIcon} alt="Logo" />
      </button>
      <div className="navbar-menu">
        <a className="nav-link" href={ResumePDF} target="_blank" rel="noopener noreferrer">My resume</a>
        <a className="nav-link" href="mailto:garkgodwinduque@gmail.com">
          Say hi!
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
