import React from "react";
import "./Button.css";

const Button = ({ text, cb, cName = "" }) => {
  return (
    <button
      className={"Button " + cName}
      onClick={(e) => {
        e.preventDefault();
        cb();
      }}
    >
      <div className="button-bg"></div>
      <span className="button-text">{text}</span>
    </button>
  );
};

export default Button;
