import "./wallet.css";
import React from "react";

import wallet from "../../../png/origin_main_new.jpg";

import qrget from "./mainimg/qrget.JPG";
import qrgive from "./mainimg/qrgive.JPG";
import qrall from "../../../png/main_img/qr_w.png";

import account from "../../../png/bot_nav_img/account.png";
import logman from "../../../png/bot_nav_img/logman.png";
import consen from "../../../png/main_img/won_send.png";

function Wallet() {
  return (
    <div id="wallet">
      <div id="main_tag">
        <h3>지갑</h3>
        {/* <img id="ticket" src={ticket} /> */}
      </div>
      <a id="exchange-label">
        <ul>
          <li>
            <button>
              <p>미국 USD</p>
              <p>1,291.00</p>
              <p>▼3.50 -0.27%</p>
            </button>
          </li>
          <li>
            <button>
              <p>일본 JPY 100</p>
              <p>874.51</p>
              <p>▲2.94 0.34%</p>
            </button>
          </li>
          <li>
            <button>
              <p>중국 CNY</p>
              <p>181.73</p>
              <p>▼0.11 -0.06%</p>
            </button>
          </li>
        </ul>
      </a>
      <img id="wallet_img" src={wallet} />

      <div id="qr">
        <div>
          <img src={qrget}></img>
          <p>QR 송금받기</p>
        </div>
        <div>
          <img src={qrgive}></img>
          <p>QR 송금하기</p>
        </div>
        <div>
          <img src={qrall}></img>
          <p>통합 QR 결제</p>
        </div>
      </div>     

      <div id="line4">
        <div>
          <img src={account}></img>
          <p>계좌관리</p>
        </div>
        <div>
          <img src={logman}></img>
          <p>QR 송금하기</p>
        </div>
        <div>
          <img src={consen}></img>
          <p>국내송금<br/>보내기</p>
        </div>
      </div>
    </div>
  );
}

export default Wallet;
