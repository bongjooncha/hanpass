import "./cal.css";

import cal from "../../../png/cal.jpg";
import timetable from "./timetable_main.jpg";
import rank from "./rank_main.jpg";

import arrow from "../../../png/bot_nav_img/left_arrow.png";
import mag from "../../../png/bot_nav_img/mag.png";

function Cal() {
  //임금 총근로
  function butchange1(){
    const usual=document.querySelector(".usual_wage");
    const over = document.querySelector(".over_wage");
    usual.classList.add("change");
    over.classList.remove("change");
  }

  function butchange2(){
    const usual=document.querySelector(".usual_wage");
    const over = document.querySelector(".over_wage");
    usual.classList.remove("change");
    over.classList.add("change");
  }

  // 페이지 이동
  function ttshow(){
    const timetable=document.querySelector("#cal .tt");
    timetable.classList.add("trshow");
  };
  function ttremove(){
    const timetable=document.querySelector("#cal .tt");
    timetable.classList.remove("trshow");
  };
  function rankshow(){
    const timetable=document.querySelector("#cal .tt");
    const rank=document.querySelector("#cal .rank");
    timetable.classList.remove("trshow");
    rank.classList.add("trshow");
  };
    function rankremove(){
    const timetable=document.querySelector("#cal .tt");
    const rank=document.querySelector("#cal .rank");
    timetable.classList.add("trshow");
    rank.classList.remove("trshow");
  };

  return (
    <div id="cal">
      <div id="main_tag">
        <h3>임금 캘린더</h3>
        <a>안내</a>
        <a href="https://www.a-ha.io/questions/categories/40">노무상담</a>
      </div>
      <img src={cal} onClick={()=>ttshow()} />
      <div className="usual_wage" onClick={()=>butchange1()}>
        <a>11월 총 임금</a>
        <a>450만원</a>
      </div>
      <div className="over_wage change" onClick={()=>butchange2()}>
        <a>11월 초과근로수당</a>
        <a>35만원</a>
      </div>
      {/* popuppage */}
      <div className="tt" id="calpop">
        <div><img src={arrow} onClick={()=>ttremove()} /><h2>11/9</h2><img onClick={()=>rankshow()} src={mag}/></div>
        <img src={timetable}/>
      </div>
      
      <div className="rank" id ="calpop">
        <div><img src={arrow} onClick={()=>rankremove()} /><h2>근무중 동료 찾기</h2></div>
        <img src={rank}/>
      </div>
    </div>
  );
}

export default Cal;
