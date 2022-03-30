import React from "react";
import "./Footer.css";
import logoFb from "../../assets/logo_fb.png";
import logoSo from "../../assets/logo_so.svg";
import logoLi from "../../assets/logo_li.png";
import logoGh from "../../assets/logo_gh.png";

const Footer = () => {
  const socialLinks = [
    {
      url: "https://www.facebook.com/grakgdowin",
      icon: logoFb,
    },
    {
      url: "https://github.com/garkgodwin",
      icon: logoGh,
    },
    {
      url: "https://www.linkedin.com/in/garkgodwin/",
      icon: logoLi,
    },
    {
      url: "https://stackoverflow.com/users/13116233/gark",
      icon: logoSo,
    },
  ];
  return (
    <footer>
      <div className="social-links">
        {socialLinks.map((link, index) => {
          return (
            <a key={index} href={link.url} className="social-link">
              <img src={link.icon} alt="" />
            </a>
          );
        })}
      </div>
      <h5>Developed by: Gark Godwin Duque</h5>
    </footer>
  );
};

export default Footer;
