import React, { useState } from "react";
import "./qrpopup.css";

function Qrpopup() {
  function closePop() {
    const qrpopup = document.querySelector(".qrpopup");
    qrpopup.classList.remove("show");
  }

  return (
    <div className="qrpopup">
      <div id="qrpopupbox">
        <p>
          통합 QR 결제를 등록한 후 사용해 주세요.
          <br />
          등록 하시겠습니까?
        </p>

        <div id="qrpopupbut">
          <div>완료</div>
          <div type="button" onClick={closePop}>
            취소
          </div>
        </div>
      </div>
    </div>
  );
}

export default Qrpopup;
