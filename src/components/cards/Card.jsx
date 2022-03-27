import React from "react";
import "./Card.css";

const Card = ({ children, cName }) => {
  return <div className={"Card " + cName}>{children}</div>;
};

export default Card;
