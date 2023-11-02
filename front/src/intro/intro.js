import React, { useState } from "react";
import "./intro.css";
import phone from "./intro.jpg";

function Intro() {
  const div = document.querySelector(".intro");
  function showScreen() {
    div.style.width = "432px";
    div.style.height = "100vh";
    div.style.scale = "1";
    div.style.backgroundColor = "rgb(186, 186, 216)";
    setTimeout(() => {
      div.style.display = "none";
    }, 3000);
  }

  return (
    <div className="intro">
      <img src={phone} alt="Phone Image" />
      <div className="box" onClick={showScreen}></div>
      <div className="blue-screen"></div>
    </div>
  );
}

export default Intro;
