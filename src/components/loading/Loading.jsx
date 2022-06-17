import React from "react";

//? Styles
import "./Loading.css";

const Loading = ({ isLoading }) => {
  return (
    <div className={"Loading" + (isLoading ? " loading-active" : "")}>
      <div className="logo">
        <div className="circle-1">
          <div className="elipse-1"></div>
          <div className="rect-1"></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
