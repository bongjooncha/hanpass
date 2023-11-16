import "./menu.css";

import arrow from "./arrow.JPG";
import mypage from "../../png/main_img/mypage.png";
import setting from "../../png/setting.JPG";

function Menu() {
  let leftmenustat = false;

  function topmenu() {
    const leftmenu = document.querySelector(".menu");
    leftmenu.classList.remove("active");
    leftmenustat = !leftmenustat;
    handleSomeClick();
  }

  function handleSomeClick() {
    const lackup = document.querySelector(".lackup");
    lackup.classList.add("show");
    setTimeout(() => {
      lackup.classList.remove("show");
    }, 400);
  }

  return (
    <div className="menu">
      <div id="menunav">
        <img
          onClick={() => {
            topmenu();
          }}
          id="arrow"
          src={arrow}
        ></img>
        <h2>전체 서비스 보기</h2>
        <img id="mypage" src={mypage}></img>
        <img id ="setting_ico" src={setting} />
      </div>
      <div id="menulist">
        <ul>
          <p>
            <h3>생활·편의</h3>
          </p>
          <li>선불폰 충전</li>
          <li>교통카드 충전</li>
          <li>해외배송 & 픽업</li>
          <li>호텔 예약</li>
          <li>여행 보험</li>
          <li>공과금 납부</li>
          <li>고속버스 예약</li>
          <li>항공권 예약</li>
        </ul>
        <ul>
          <p>
            <h3>뱅킹</h3>
          </p>
          <li>해외송금 보내기</li>
          <li>해외송금 받기</li>
          <li>국내송금 보내기</li>
          <li>ATM 출금</li>
        </ul>
        <ul>
          <p>
            <h3>결제</h3>
          </p>
          <li>통합 QR 결제</li>
          <li>한패스카드</li>
        </ul>
        <ul>
          <p>
            <h3>월렛</h3>
          </p>
          <li>충전하기</li>
          <li>월렛 내역 보기</li>
          <li>QR 송금하기</li>
          <li>QR 송금받기</li>
        </ul>
      </div>
    </div>
  );
}

export default Menu;
