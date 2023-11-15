import "./Main2.css";
import React from "react";

import arrow2 from "../png/arrow2.png";

import bell from "../png/main_img/bell.png";
import menu from "../png/main_img/menu.png";
import mypage from "../png/main_img/mypage.png";
import exchange from "../png/main_img/exchange.png";

import ticket from "../png/main_img/ticket_1.png";

import wallet from "./mainimg/wallet.JPG";

import line4 from "./mainimg/forthline.JPG";

import Botnav2 from "./botnav/botnav2.js";

import t from "./try.jpg";
import t2 from "./t2.jpg";
import bottom from "./bottom.png";

// import "./origin/popup/qrpopup.css";

function Main({ setPoped }) {
  function topmenu() {
    const leftmenu = document.querySelector(".menu2");
    leftmenu.classList.add("active2");
    // handleSomeClick();
  }

  // function handleSomeClick() {
  //   const lackup = document.querySelector(".lackup2");
  //   lackup.classList.add("show2");
  //   setTimeout(() => {
  //     lackup.classList.remove("show2");
  //   }, 700);
  // }

  return (
    <>
      {/* <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
        integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
        crossorigin="anonymous"
      /> */}
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
          {/* <div id="exchange">
            <div class="input-money" id="exch_coun_box">
              <button className="country">KRW</button>
              <input type="text" value="1,000,000" />
            </div>
            <img id="exch_arrow" src={arrow2} />
            <div class="output-money" id="exch_coun_box">
              <button className="country">USD</button>
              <input type="text" value="765" />
            </div>
          </div>
          <img id="wallet" src={wallet} />
          <div>
            <img id="line4" src={line4} />
          </div> */}
          <img id="t2" src={t2} />
          <img id="t" src={t} />
        </main>
        <Botnav2 />
        {/* <img id="bottom" src={bottom} /> */}
      </div>
    </>
  );
}

export default Main;
