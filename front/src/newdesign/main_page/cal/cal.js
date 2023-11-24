import "./cal.css";

import cal from "../../../png/cal.jpg";
import timetable from "./timetable.jpg";
import rank from "./rank.jpg";

function Cal() {
  function ttshow(){
    const timetable=document.querySelector("#cal .tt");
    timetable.classList.add("trshow");
  };
  function rankshow(){
    const timetable=document.querySelector("#cal .tt");
    const rank=document.querySelector("#cal .rank");
    timetable.classList.remove("trshow");
    rank.classList.add("trshow");
  };

  return (
    <div id="cal">
      <div id="main_tag">
        <h3>임금 캘린더</h3>
        <a>안내</a>
        <a href="https://www.a-ha.io/questions/categories/40">노무상담</a>
      </div>
      <img src={cal} onClick={()=>ttshow()} />
      <div id="usual_wage">
        <a>11월 총 임금</a>
        <a>450만원</a>
      </div>
      <div id="over_wage">
        <a>11월 초과근로수당</a>
        <a>35만원</a>
      </div>
      <img className="tt" src={timetable} onClick={()=>rankshow()}/>
      <img className="rank" src={rank}/>
    </div>
  );
}

export default Cal;
