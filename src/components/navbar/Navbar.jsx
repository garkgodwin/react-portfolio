import React, { useState, useEffect } from "react";
import "./Navbar.css";
import Button from "../buttons/Button";
import logoIcon from "../../assets/logo.svg";

const Navbar = () => {
  const resumeClicked = () => {
    console.log("add code block for resumeClicked");
  };
  const contactClicked = () => {
    console.log("add code block for contactClicked");
    const mail = document.getElementById();
  };

  return (
    <nav className="Navbar">
      <button className="navbar-logo">
        <img src={logoIcon} alt="Logo" />
      </button>
      <div className="navbar-menu">
        <a className="nav-link">My resume</a>
        <a className="nav-link" href="mailto:garkgodwinduque@gmail.com">
          Say hi!
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
