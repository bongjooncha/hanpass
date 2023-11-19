import "./wallet.css";
import React from "react";

import coun from "./mainimg/coun.JPG";
import ticket from "./mainimg/ticket.JPG";

import wallet from "./mainimg/wallet.JPG";

import qrget from "./mainimg/qrget.JPG";
import qrgive from "./mainimg/qrgive.JPG";

import line4 from "./mainimg/forthline.JPG";


function Wallet(){
    return(
        <div id="wallet">
            <h3>지갑</h3>
            <div className="hiuser">
            <img id="coun" src={coun}></img>
            <p>
                안녕하세요.
                <br /> 사용자님
            </p>
            <img id="ticket" src={ticket} />
            </div>

            <img id="wallet" src={wallet}/>

            <div id="qr">
                <img src={qrget}></img>
                <a>QR 송금받기</a>
                <img src={qrgive}></img>
                <a>QR 송금받기</a>
            </div>
            <div>
                <img id="line4" src={line4}/>
            </div>
        </div>
    )
}

export default Wallet;
