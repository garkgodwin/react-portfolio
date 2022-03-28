import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";
import Button from "../buttons/Button";
import menuIcon from "../../assets/menu.svg";
import logoIcon from "../../assets/logo.svg";

const links = [
  {
    id: "ablink",
    to: "/",
    text: "about me",
  },
  {
    id: "aclink",
    to: "/achievements",
    text: "my achievements",
  },
  {
    id: "prlink",
    to: "/projects",
    text: "projects",
  },
];

const Navbar = () => {
  const { pathname } = useLocation();
  const [navCircleLocation, setNavCircleLocation] = useState({
    left: 0,
    top: 0,
    width: 0,
    height: "100%",
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const navbarMenu = document
      .getElementById("navbar-menu")
      .getBoundingClientRect();
    let bounds = null;
    if (pathname === "/") {
      bounds = document.getElementById("ablink").getBoundingClientRect();
    } else if (pathname === "/achievements") {
      bounds = document.getElementById("aclink").getBoundingClientRect();
    } else if (pathname === "/projects") {
      bounds = document.getElementById("prlink").getBoundingClientRect();
    } else {
      bounds = document.getElementById("ablink").getBoundingClientRect();
    }

    const newBounds = {
      left: Math.abs(navbarMenu.left - bounds.left) + "px",
      top: Math.abs(navbarMenu.top - bounds.top) + "px",
      width: bounds.width + "px",
      height: bounds.height + "px",
    };
    setNavCircleLocation(newBounds);
  }, [pathname]);

  const resumeClicked = () => {
    console.log("add code block for resumeClicked");
  };

  const moveMenu = (e) => {
    e.preventDefault();
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="Navbar">
      <button className="navbar-logo">
        <img src={logoIcon} alt="Logo" />
      </button>
      <div className="navbar-middle">
        <button className="navbar-menu-toggle" onClick={(e) => moveMenu(e)}>
          <img src={menuIcon} alt="Menu Icon" />
        </button>
        <div
          id="navbar-menu"
          className={"navbar-menu" + (isMenuOpen ? " navbar-menu-active" : "")}
        >
          <div className="menu-circle" style={navCircleLocation} />
          {links.map((item, index) => {
            return (
              <Link
                key={index}
                to={item.to}
                id={item.id}
                className={
                  "menu-item" +
                  (pathname === item.to ? " menu-item-active" : "")
                }
              >
                <span className="item-text">{item.text}</span>
              </Link>
            );
          })}
        </div>
      </div>
      <Button cb={resumeClicked} text="Resume" cName="btn-navbar" />
    </nav>
  );
};

export default Navbar;
