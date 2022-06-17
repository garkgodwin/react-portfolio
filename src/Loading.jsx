import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "./Loading.css";

const Loading = ({ isLoading }) => {
  return (
    <div
      className={
        "Loading" + (isLoading ? " loading-active" : " loading-stopped")
      }
    >
      <div className="logo">
        <div className="box box-1"></div>
        <div className="box box-2"></div>
        <div className="box box-3"></div>
        <div className="box box-4"></div>
        <div className="box box-5"></div>
      </div>
    </div>
  );
};

export default Loading;
