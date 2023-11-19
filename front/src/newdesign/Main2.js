import "./Main2.css";
import React,{useState} from "react";

import arrow2 from "../png/arrow2.png";

import bell from "../png/main_img/bell.png";
import menu from "../png/main_img/menu.png";
import mypage from "../png/main_img/mypage.png";
import setting from "../png/setting.JPG";

import Wallet from "./main_page/wallet/Wallet.js";
import Exchange from "./main_page/exchange/exchange.js";

import wal_ico from "../png/7/wal.png";
import exch_ico from "../png/main_img/dollor_send.png";
import life_ico from "../png/6/life.png";
import cal_ico from "../png/cal_ico.png";
import event_ico from "../png/bot_nav_img/event.png"

import t2 from "./t2.jpg";

import cal from "../png/cal.jpg";


function Main({ setPoped }) {
  function topmenu() {
    const leftmenu = document.querySelector(".menu2");
    leftmenu.classList.add("active2");
  }

  const [content, setContent] = useState(Wallet);
  const changeContent = (newComp) => {
    setContent(newComp);
  };
 

  return (
    <>
      <div className="Main2">
        <navbar className="TopNav2">
          <ul>
            <li onClick={() => {topmenu();}}>
              <img id="menuimg" src={menu}></img>
            </li>
            <li>
              <img id="bellimg" src={bell}></img>
            </li>
            <li>
              <img id="mypageimg" src={mypage}></img>
            </li>
            <li>
              <img id="main_setting_ico" src={setting}></img>
            </li>
          </ul>
        </navbar>
        <main>
          <div id="main_content">{content}</div>
        </main>
        <navbar className="BottomNav2">
          <ul>
            <li onClick={()=>changeContent(Wallet)}>
              <div id="ico_wal" ><img src={wal_ico}/>월렛</div>
            </li>
            <li onClick={()=>changeContent(Exchange)}>
              <div id="ico_tran"><img src={exch_ico}/>환전</div>
            </li>
            <li>
              <div id="ico_life"><img src={life_ico}/>생활</div>
            </li>
            <li>
              <div id="ico_cal"><img src={cal_ico}/>달력</div>
            </li>
            <li>
              <div id="ico_event"><img src={event_ico}/>이벤트</div>
            </li>
          </ul>
        </navbar>
      </div>
    </>
  );
}

export default Main;
