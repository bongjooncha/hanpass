import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App1 from "./origin/App";
import App2 from "./newdesign/App2";

import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="mainblock_1"/>
    <App1 />
    <div className="mainblock_2"/>
    <App2/>
    <div className="mainblock_3"/>
  </React.StrictMode>
);

reportWebVitals();
