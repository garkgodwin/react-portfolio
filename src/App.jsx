import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

//? Styles
import "./App.css";

//? Components
import Navbar from "./components/navbar/Navbar";

//?Pages
import About from "./pages/About";
import Achievements from "./pages/Achievements";
import Projects from "./pages/Projects";

//? Images
import marker from "./assets/marker.svg";
import Loading from "./Loading";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      document.body.classList.add("body-active");
    }, 3500);
  }, []);
  return (
    <div className={"App" + (!isLoading ? " app-active" : "")}>
      <Loading isLoading={isLoading} />
      <Navbar />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <div className="line-app line-email">
        <div className="line"></div>
        <p className="line-text">garkgodwinduque@gmail.com</p>
      </div>
      <div className="line-app line-location">
        <div className="line"></div>
        <img src={marker} alt="Location" className="line-image" />
        <span className="line-text">Philippines</span>
      </div>
      <a className="app-contact" href="mailto:garkgodwinduque@gmail.com">
        <span className="gradient-text">Say hi!</span>
      </a>
    </div>
  );
};

export default App;
