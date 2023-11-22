import "./cal.css";

import cal from "../../../png/cal.jpg";

function Cal() {
  return (
    <div id="cal">
      <h2>임금 캘린더</h2>
      <a>안내</a>
      <a>노무상담</a>
      <img src={cal} />
    </div>
  );
}

export default Cal;
