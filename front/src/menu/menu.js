import './menu.css';

import arrow from './arrow.JPG';
import mypage from './mypage.JPG';

import mobile from "./img/mobile.png";
import public_trans from "./img/public_trans.png";
import shipping from "./img/shipping.png";
import hotel from "./img/hotel.png";
import travle_insu from "./img/travle_insu.png";
import utility_bill from "./img/utility_bill.png";
import express_bus from "./img/exp_bus.png";
import airline from "./img/airline.png"; 

import outcoun_send from "./img/outcoun_send.png";
import outcoun_get from "./img/outcoun_get.png";
import incoun_send from "./img/incoun_send.png";
import atm_out from "./img/atm_out.png";

import qr_all from "./img/qr_all.png";
import hanpass_card from "./img/hanpass_card.png";

import charge from "./img/charge.png";
import wallet_log from "./img/wallet_log.png";
import qr_give from "./img/qr_give.png";
import qr_get from "./img/qr_get.png";


function Menu(){

    let leftmenustat =false;
    function topmenu(){
      const leftmenu = document.querySelector(".menu");
      leftmenu.classList.remove('active');
      leftmenustat = !leftmenustat;
    }

    return(
        <div className="menu">
            <div id="menunav">
                <img onClick={()=>{topmenu();}} id='arrow' src ={arrow}></img>
                <h2>전체 서비스 보기</h2>
                <img id='mypage' src = {mypage}></img>
            </div>
            <div id='menulist'>
                <ul>
                    <p><h3>생활·편의</h3></p>
                    <li><img src={mobile}></img>모바일</li>
                    <li><img src={public_trans}></img>교통카드 충전</li>
                    <li><img src={shipping}></img>해외배송 & 픽업</li>
                    <li><img src={hotel}></img>호텔 예약</li>
                    <li><img src={travle_insu}></img>여행 보험</li>
                    <li><img src={utility_bill}></img>공과금 납부</li>
                    <li><img src={express_bus}></img>고속버스 예약</li>
                    <li><img src={airline}></img>항공권 예약</li>
                </ul>
                <ul>
                    <p><h3>뱅킹</h3></p>
                    <li><img src={outcoun_send}></img>해외송금 보내기</li>
                    <li><img src={outcoun_get}></img>해외송금 받기</li>
                    <li><img src={incoun_send}></img>국내송금 보내기</li>
                    <li><img src={atm_out}></img>ATM 출금</li>
                </ul>
                <ul>
                    <p><h3>결제</h3></p>
                    <li><img src={qr_all}></img>통합 QR 결제</li>
                    <li><img src={hanpass_card}></img>한패스카드</li>
                </ul>
                <ul>
                    <p><h3>월렛</h3></p>
                    <li><img src={charge}></img>충전하기</li>
                    <li><img src={wallet_log}></img>월렛 내역 보기</li>
                    <li><img src={qr_give}></img>QR 송금하기</li>
                    <li><img src={qr_get}></img>QR 송금받기</li>
                </ul>
            </div>
        </div>
    );
}

export default Menu;