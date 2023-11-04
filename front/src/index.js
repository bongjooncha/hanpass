import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App1 from "./origin/App";

import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <div className="mainblock" /> */}
    <App1 />
  </React.StrictMode>
);

reportWebVitals();
