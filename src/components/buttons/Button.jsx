import React from "react";
import "./Button.css";

const Button = ({ text, cb }) => {
  return (
    <button
      className="Button"
      onClick={(e) => {
        e.preventDefault();
        cb();
      }}
    >
      <div className="button-bg"></div>
      {text}
    </button>
  );
};

export default Button;
