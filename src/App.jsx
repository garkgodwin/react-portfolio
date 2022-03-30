import React, { useEffect, useState } from "react";

//? Styles
import "./App.css";

//? Components
import Navbar from "./components/navbar/Navbar";

//?Pages
import About from "./pages/About";

//? Images
import marker from "./assets/marker.svg";
import Loading from "./Loading";
import Footer from "./components/footer/Footer";

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
      <About />
      <div className="line-app line-email">
        <div className="line"></div>
        <p className="line-text">garkgodwinduque@gmail.com</p>
      </div>
      <div className="line-app line-location">
        <div className="line"></div>
        <img src={marker} alt="Location" className="line-image" />
        <span className="line-text">Philippines</span>
      </div>
      <Footer />
    </div>
  );
};

export default App;
