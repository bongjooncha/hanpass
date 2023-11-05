import "./Main2.css";
import React from "react";

import bell from "../png/main_img/bell.png";
import menu from "../png/main_img/menu.png";
import mypage from "../png/main_img/mypage.png";

import ticket from "../png/main_img/ticket_1.png";

import wallet from "./mainimg/wallet.JPG";

import line4 from "./mainimg/forthline.JPG";

import Botnav from "../botnav/botnav.js";

// import "./origin/popup/qrpopup.css";

function Main({ setPoped }) {
  function topmenu() {
    const leftmenu = document.querySelector(".menu2");
    leftmenu.classList.add("active");
  }

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
              <img id="ticket" src={ticket}></img>
            </li>
            <li>
              <img id="mypageimg" src={mypage}></img>
            </li>
          </ul>
        </navbar>
        <main>
          <div id ="exchange">
            <h4>KRW/USD = 1,312.00 </h4>
          </div>
          <img id="wallet" src={wallet}/>
          <div>
            <img id="line4" src={line4} />
          </div>
          <div id = "community">
            <div id = "selec_commu">
              <div id="coun_commu">
                <h4>한국 인기 글</h4>
                <a>김패스</a><a>11/30 20:22</a>
                <p>한패스 송금수수료 실화??</p>
                <p>한패스 송금수수료 너무 쌈;; 말이안됨</p>
                <a>한국 계시판 <img src="./mainimg/forthline.JPG"/></a>
              </div>
            </div>
          </div>
        </main>
        <Botnav />
      </div>
    </>
  );
}

export default Main;
