import { useState } from "react";
import "./botnav.css";

import m1 from "./m1.JPG";
import m2 from "./m2.JPG";
import m3 from "./m3.JPG";
import m4 from "./m4.JPG";
import m5 from "./m5.JPG";

import arrow from "./arrow.JPG";

import Accman from "./page/accman/accman.js";
import Logman from "./page/logman/logman.js";
import Setting from "./page/setting/setting.js";

function Botnav() {
  // main에 h3 text변환하기
  function handleSomeClick() {
    const lackup = document.querySelector(".lackup");
    lackup.classList.add("show");
    setTimeout(() => {
      lackup.classList.remove("show");
    }, 200);
  }
  const [headerText, setHeaderText] = useState("");
  const changeText = (newText) => {
    setHeaderText(newText);
  };

  // component 바꾸기
  const [component, setComponent] = useState(null);
  const changeComponent = (newComp) => {
    setComponent(newComp);
  };

  // 높이 변환하기
  const [navHight, setNavHight] = useState(100);
  const exNav = () => {
    setNavHight(1025);
    handleSomeClick();
  };
  const reNav = () => {
    setNavHight(100);handleSomeClick();
  };

  return (
    <div className="BotNavDiv" style={{ height: navHight }}>
      <navbar className="BottomNav">
        <ul>
          <li
            onClick={() => {
              changeText("계좌관리");
              changeComponent(Accman);
              exNav();
            }}
          >
            <a>
              <img src={m1} alt="계좌관리" />
            </a>
          </li>
          <li
            onClick={() => {
              changeText("내역관리");
              changeComponent(Logman);
              exNav();
            }}
          >
            <a>
              <img src={m2} alt="내역관리" />
            </a>
          </li>
          <li
            onClick={() => {
              changeText("이벤트");
              changeComponent();
              exNav();
            }}
          >
            <a>
              <img src={m3} alt="이벤트" />
            </a>
          </li>
          <li
            onClick={() => {
              changeText("고객센터");
              changeComponent();
              exNav();
            }}
          >
            <a>
              <img src={m4} alt="고객센터" />
            </a>
          </li>
          <li
            onClick={() => {
              changeText("설정");
              changeComponent(Setting);
              exNav();
            }}
          >
            <a>
              <img src={m5} alt="설정" />
            </a>
          </li>
        </ul>
      </navbar>
      <div id="tab">
        <div id="main">
          <button onClick={reNav}>
            <img src={arrow}></img>
          </button>
          <h3>{headerText}</h3>
        </div>

        <div id="content">{component}</div>
      </div>
    </div>
  );
}

export default Botnav;
