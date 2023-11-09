import "./Main2.css";
import React from "react";

import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";

import arrow2 from "../png/arrow2.png";

import bell from "../png/main_img/bell.png";
import menu from "../png/main_img/menu.png";
import mypage from "../png/main_img/mypage.png";
import exchange from "../png/main_img/exchange.png";

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
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
        integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
        crossorigin="anonymous"
      />
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
          <div id="exchange">
            <img src={exchange} />
            {/* <div class="input-money">
              <a>send</a>
              <Form.Group as={Col} controlId="formGridState" id="row">
                <Form.Select defaultValue="한국(KRW)" id="sel-coun">
                  <option>한국(KRW)</option>
                  <option>미국(USD)</option>
                  <option>중국(CNY)</option>
                  <option>일본(JPY)</option>
                  <option>베트남(VND)</option>
                  <option>태국(TBH)</option>
                </Form.Select>
                <input type="text" value="1,000,000" />
              </Form.Group>
            </div>
            <img src={arrow2} />
            <div class="output-money">
              <a>get</a>
              <Form.Group as={Col} controlId="formGridState" id="row">
                <Form.Select defaultValue="미국(USD)" id="sel-coun">
                  <option>미국(USD)</option>
                  <option>한국(KRW)</option>
                  <option>중국(CNY)</option>
                  <option>일본(JPY)</option>
                  <option>베트남(VND)</option>
                  <option>태국(TBH)</option>
                </Form.Select>
                <input type="text" value="765" />
              </Form.Group>
            </div> */}
          </div>
          <img id="wallet" src={wallet} />
          <div>
            <img id="line4" src={line4} />
          </div>
        </main>
        <Botnav />
      </div>
    </>
  );
}

export default Main;
