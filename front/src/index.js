import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Menu from "./menu/menu.js"
import han from './hanpass.jpg';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Menu/>
    <App/>
    <div id="hn"><img src={han}></img></div>
  </React.StrictMode>
);

reportWebVitals();
