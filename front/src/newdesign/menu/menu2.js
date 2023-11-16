import "./menu2.css";

import arrow from "./arrow.JPG";
import mypage from "../../png/main_img/mypage.png";
import setting from "../../png/setting.JPG";

import mobile from "../../png/left_menu_img/com_phone.png";
import public_trans from "../../png/left_menu_img/com_tra.png";
import shipping from "../../png/left_menu_img/com_shipping.png";
import hotel from "../../png/left_menu_img/com_hotel.png";
import travle_insu from "../../png/left_menu_img/com_trainsu.png";
import express_bus from "../../png/left_menu_img/com_tra.png";
import airline from "../../png/left_menu_img/com_airplane.png";

import bank_sendkr from "../../png/left_menu_img/bank_sendkr.png";
import bank_send from "../../png/left_menu_img/bank_send.png";
import bank_code from "../../png/left_menu_img/bank_code.png";
import atm_out from "../../png/left_menu_img/bank_atm.png";

import pay_hancard from "../../png/left_menu_img/pay_hancard.png";
import pay_zero from "../../png/left_menu_img/pay_zero.png";
import pay_zeromark from "../../png/left_menu_img/pay_zeromark.png";

import wal_charge from "../../png/left_menu_img/wal_charge.png";
import wal_chargelog from "../../png/left_menu_img/wal_chargelog.png";
import wal_qrsend from "../../png/left_menu_img/wal_qrsend.png";

function Menu() {
  let leftmenustat = false;
  function topmenu() {
    const leftmenu = document.querySelector(".menu2");
    leftmenu.classList.remove("active2");
    leftmenustat = !leftmenustat;
    //   handleSomeClick();
  }

  // function handleSomeClick() {
  //     const lackup = document.querySelector(".lackup2");
  //     lackup.classList.add("show2");
  //     setTimeout(() => {
  //       lackup.classList.remove("show2");
  //     }, 500);
  //   }

  return (
    <div className="menu2">
      <div id="menunav2">
        <img
          onClick={() => {
            topmenu();
          }}
          id="arrow"
          src={arrow}
        ></img>
        <h2>전체 서비스 보기</h2>
        <img id="mypage2" src={mypage} />
        <img id ="setting_ico2" src={setting} />
      </div>
      <div id="menulist2">
        <ul>
          <p>
            <h3>생활·편의</h3>
          </p>
          <li>
            <img src={mobile} />
          </li>
          <li>
            <img src={public_trans} />
          </li>
          <li>
            <img src={shipping} />
          </li>
          <li>
            <img src={hotel} />
          </li>
          <li>
            <img src={travle_insu} />
          </li>
          <li>
            <img src={express_bus} />
          </li>
          <li>
            <img src={airline} />
          </li>
        </ul>
        <ul>
          <p>
            <h3>뱅킹</h3>
          </p>
          <li>
            <img src={bank_sendkr} />
          </li>
          <li>
            <img src={bank_send} />
          </li>
          <li>
            <img src={bank_code} />
          </li>
          <li>
            <img src={atm_out} />
          </li>
        </ul>
        <ul>
          <p>
            <h3>결제</h3>
          </p>
          <li>
            <img src={pay_hancard} />
          </li>
          <li>
            <img src={pay_zero} />
          </li>
          <li>
            <img src={pay_zeromark} />
          </li>
        </ul>
        <ul>
          <p>
            <h3>월렛</h3>
          </p>
          <li>
            <img src={wal_charge} />
          </li>
          <li>
            <img src={wal_chargelog} />
          </li>
          <li>
            <img src={wal_qrsend} />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Menu;
