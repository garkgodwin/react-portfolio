import React from "react";
import { useEffect } from "react";

import "./Background.css";

const Background = () => {
  useEffect(() => {
    setRandomDotsInitialPosition();
    onMount();
  }, []);

  const onMount = () => {
    setInterval(setRandomDotsInitialPosition, 2000);
  };

  const setRandomDotsInitialPosition = () => {
    const dots = document.getElementsByClassName("dot");
    for (let i = 0; i < dots.length; i++) {
      dots[i].style.left = generateRandomPercent();
      dots[i].style.top = generateRandomPercent();
    }
  };

  const generateRandomPercent = () => {
    const percent = Math.floor(Math.random() * 100) + 1 + "%";
    return percent;
  };

  const createDots = (n) => {
    let elements = [];
    for (let i = 0; i < n; i++) {
      elements.push(<div key={i} className="dot"></div>);
    }
    return elements;
  };

  return (
    <div className="Background">
      <div className="bg-box box-1"></div>
      <div className="bg-box box-2"></div>
      {createDots(5)}
    </div>
  );
};

export default Background;
