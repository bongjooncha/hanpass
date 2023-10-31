import "./LoadingLayer.css";
import LoadingIndicator from "./LoadingIndicator";
import React from "react";
import han from "./hanpass-logo.png";

const LoadingLayer = React.memo((props) => {
  return (
    <div className="loading">
      {/* <LoadingIndicator /> */}
      <img src={han}></img>
    </div>
  );
});

export default LoadingLayer;
