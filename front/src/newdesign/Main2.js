import "./Main2.css";
import React, { useState } from "react";

import bell from "../png/main_img/bell.png";
import menu from "../png/main_img/menu.png";
import mypage from "../png/main_img/mypage.png";
import setting from "../png/setting.JPG";

import Wallet_page from "./main_page/wallet/Wallet.js";
import Exchange_page from "./main_page/exchange/exchange.js";
import Life_page from "./main_page/life/life.js";
import Cal_page from "./main_page/cal/cal.js";
import Event_page from "./main_page/event/event.js";

import wal_ico from "../png/7/wal.png";
import exch_ico from "../png/main_img/dollor_send_b.png";
import life_ico from "../png/6/life.png";
import cal_ico from "../png/cal_ico.png";
import event_ico from "../png/bot_nav_img/event.png";

function Main({ setPoped }) {
  function topmenu() {
    const leftmenu = document.querySelector(".menu2");
    leftmenu.classList.add("active2");
  }

  const [content, setContent] = useState(Wallet_page);
  const changeContent = (newComp) => {
    setContent(newComp);
  };

  function showSetting() {
    const setting2 = document.querySelector(".setting2");
    const list = document.querySelector(".list");
    setting2.classList.add("moveLeft");
    list.classList.add("moveLeft");
  }

  function changeColor(x){
    const li = document.querySelectorAll(".BottomNav2 ul li");
    li.forEach((item)=>{
      item.classList.remove("clicked");
    })
    const selecLi = document.querySelector(x);
    selecLi.classList.add("clicked");
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
              <img id="mypageimg" src={mypage}></img>
            </li>
            <li
              onClick={() => {
                showSetting();
              }}
            >
              <img id="main_setting_ico" src={setting}></img>
            </li>
          </ul>
        </navbar>
        <main>
          <div id="main_content">{content}</div>
        </main>
        <navbar className="BottomNav2">
          <ul>
            <li className="BN1 clicked" onClick={() => {changeContent(Wallet_page); changeColor(".BN1");} }>
              <div id="ico_wal">
                <img src={wal_ico} />
                월렛
              </div>
            </li>
            <li className="BN2" onClick={() => {changeContent(Exchange_page); changeColor(".BN2");}}>
              <div id="ico_tran">
                <img src={exch_ico} />
                송금
              </div>
            </li>
            <li className="BN3" onClick={() => {changeContent(Life_page); changeColor(".BN3");}}>
              <div id="ico_life">
                <img src={life_ico} />
                생활
              </div>
            </li>
            <li className="BN4" onClick={() => {changeContent(Cal_page); changeColor(".BN4");}}>
              <div id="ico_cal">
                <img src={cal_ico} />
                달력
              </div>
            </li>
            <li className="BN5" onClick={() => {changeContent(Event_page); changeColor(".BN5");}}>
              <div id="ico_event">
                <img src={event_ico} />
                이벤트
              </div>
            </li>
          </ul>
        </navbar>
      </div>
    </>
  );
}

export default Main;
