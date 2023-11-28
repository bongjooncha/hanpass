import "./Main.css";
import React from "react";

import bell from "./frontnavimg/bell.JPG";
import menu from "./frontnavimg/menu.JPG";
import mypage from "./frontnavimg/mypage.JPG";

import wallet from "../png/origin_main_key.jpg";

import line4 from "./mainimg/forthline.JPG";

import nav from "./mainimg/nav.png";


import Botnav from "./botnav/botnav.js";
import chatImg from "../png/main_img/talk.png";

function Main() {
  function topmenu() {
    const leftmenu = document.querySelector(".menu");
    leftmenu.classList.add("active");
    setTimeout(() => {
      leftmenu.classList.add("activee");
    }, 0);
    handleSomeClick();
  }

  function qrpop() {
    const qrpopup = document.querySelector(".qrpopup");
    qrpopup.classList.add("show");
  }

  function handleSomeClick() {
    const lackup = document.querySelector(".lackup");
    lackup.classList.add("show");
    setTimeout(() => {
      lackup.classList.remove("show");
    }, 500);
  }

  return (
    <>
      <div className="Main">
        <navbar className="TopNav">
          <ul>
            <li
              onClick={() => {
                topmenu();
              }}
            >
              <img id="menuimg" src={menu}></img>
            </li>
            <li>
              <img id="bellimg" src={bell}></img>
            </li>
            <li>
              <img id="mypageimg" src={mypage}></img>
            </li>
          </ul>
        </navbar>

        <main>
          <img id="wallet_img" src={wallet}></img>
          <div>
            <img
              onClick={() => {
                qrpop();
              }}
              id="line4"
              src={line4}
            ></img>
          </div>
          <div>
            <img id="main_nav" src={nav}></img>
          </div>
        </main>
      </div>
      <img src={chatImg} className="chat_img"/>
      <Botnav />
    </>
  );
}

export default Main;
