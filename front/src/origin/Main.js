import "./Main.css";
import React from "react";

import bell from "./frontnavimg/bell.JPG";
import menu from "./frontnavimg/menu.JPG";
import mypage from "./frontnavimg/mypage.JPG";

import coun from "./mainimg/coun.JPG";
import ticket from "./mainimg/ticket.JPG";

import wallet from "./mainimg/wallet.JPG";

import qrget from "./mainimg/qrget.JPG";
import qrgive from "./mainimg/qrgive.JPG";

import line4 from "./mainimg/forthline.JPG";

import nav from "./mainimg/nav.png";

import Botnav from "./botnav/botnav.js";

function Main() {
  function topmenu() {
    const leftmenu = document.querySelector(".menu");
    leftmenu.classList.add("active");
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
          <div className="hiuser">
            <img id="coun" src={coun}></img>
            <p>
              안녕하세요.
              <br /> 사용자님
            </p>
            <img id="ticket" src={ticket} />
          </div>

          <img id="wallet_img" src={wallet}></img>

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
