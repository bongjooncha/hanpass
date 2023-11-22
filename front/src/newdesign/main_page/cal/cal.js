import "./cal.css";

import cal from "../../../png/cal.jpg";

function Cal() {
  return (
    <div id="cal">
      <div id ="main_tag">
        <h3>임금 캘린더</h3>
        <a>안내</a>
        <a>노무상담</a>
      </div>
      <img src={cal} />
      <div id="usual_wage"><a>11월 총 임금</a><a>450만원</a></div>
      <div id="over_wage"><a>11월 초과근로수당</a><a>35만원</a></div>
    </div>
  );
}

export default Cal;
