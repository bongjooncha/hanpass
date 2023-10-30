import './menu.css';

import arrow from './arrow.JPG';
import mypage from './mypage.JPG'

import trafcard from './icon/trafficcard.png'
import wal_qr from './icon/wal_qr.png'
import wal_qrscan from './icon/wal_qrscan.png'
import wal_usb from './icon/wal_usb.png'
import wal_wal from './icon/wal_wal.png'

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
                    <li>모바일</li>
                    <li>쿄통카드 충전</li>
                    <li>해외배송 & 픽업</li>
                    <li>호텔 예약</li>
                    <li>여행 보험</li>
                    <li>공과금 납부</li>
                    <li>고속버스 예약</li>
                    <li>항공권 예약</li>
                </ul>
                <ul>
                    <p><h3>뱅킹</h3></p>
                    <li>해외송금 보내기</li>
                    <li>해외송금 받기</li>
                    <li>국내송금 보내기</li>
                    <li>ATM 출금</li>
                </ul>
                <ul>
                    <p><h3>결제</h3></p>
                    <li>통합 QR 결제</li>
                    <li>한패스카드</li>
                </ul>
                <ul>
                    <p><h3>월렛</h3></p>
                    <li><img src={wal_qr}></img>충전하기</li>
                    <li><img src={wal_qrscan}></img>월렛 내역 보기</li>
                    <li><img src={wal_usb}></img>QR 송금하기</li>
                    <li><img src={wal_wal}></img>QR 송금받기</li>
                </ul>
            </div>
        </div>
    );
}

export default Menu;