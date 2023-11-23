import "./wallet.css";
import React from "react";

import coun from "./mainimg/coun.JPG";
import ticket from "./mainimg/ticket.JPG";

import wallet from "./mainimg/wallet.JPG";

import qrget from "./mainimg/qrget.JPG";
import qrgive from "./mainimg/qrgive.JPG";

import line4 from "./mainimg/forthline.JPG";

function Wallet() {
  return (
    <div id="wallet">
      <div id="main_tag">
        <h3>지갑</h3>
        {/* <img id="ticket" src={ticket} /> */}
      </div>
      {/* <div className="hiuser">
        <img id="coun" src={coun}></img>
        <p>
          안녕하세요.
          <br /> 사용자님
        </p>
        <img id="ticket" src={ticket} />
      </div> */}
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
        <img src={qrget}></img>
        <a>QR 송금받기</a>
        <img src={qrgive}></img>
        <a>QR 송금받기</a>
      </div>
      <div>
        <img id="line4" src={line4} />
      </div>
    </div>
  );
}

export default Wallet;
