import "./Main2.css";
import React, { useEffect, useState } from "react";

import bell from "../png/main_img/bell.png";
import menu from "../png/main_img/menu.png";
import mypage from "../png/main_img/mypage.png";

import coun from "./mainimg/coun.JPG";
import ticket from "./mainimg/ticket.JPG";

import wallet from "./mainimg/wallet.JPG";

import qrget from "./mainimg/qrget.JPG";
import qrgive from "./mainimg/qrgive.JPG";

import line4 from "./mainimg/forthline.JPG";

import nav from "./mainimg/nav.png";

import Botnav from "../botnav/botnav.js";

// import "./origin/popup/qrpopup.css";

function Main({ setPoped }) {
  function topmenu() {
    const leftmenu = document.querySelector(".menu2");
    leftmenu.classList.add("active");
  }

  function qrpop() {
    const qrpopup = document.querySelector(".qrpopup");
    qrpopup.classList.add("show");
  }

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    window.onload = function () {
      setIsLoading(false);
    };
  }, []);

  return (
    <>
      <div className="Main2">
        <navbar className="TopNav2">
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
          <div className="hiuser">
            <img id="coun" src={coun}></img>
            <p>
              안녕하세요.
              <br /> 사용자님
            </p>
            {/* <img id="ticket" src={ticket}></img> */}
          </div>

          <img id="wallet" src={wallet}></img>

          <div id="qr">
            <img src={qrget}></img>
            <a>QR 송금받기</a>
            <img src={qrgive}></img>
            <a>QR 송금받기</a>
          </div>

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
        <Botnav />
      </div>
    </>
  );
}

export default Main;
