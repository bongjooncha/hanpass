import "./setting2.css";
import arrow from "./arrow.JPG";

function setting2() {
  function showSetting() {
    const setting2 = document.querySelector(".setting2");
    const list = document.querySelector(".list");
    setting2.classList.remove("moveLeft");
    list.classList.remove("moveLeft");
  }

  return (
    <div className="setting2">
      <div id="main">
        <button onClick={() => showSetting()}>
          <img src={arrow}></img>
        </button>
        <h3>설정</h3>
      </div>
      <ul className="list">
        <li>알림</li>
        <li>언어 (Language)</li>
        <li>로그인 비밀번호 변경</li>
        <li>6자리 비밀번호(PIN) 변경</li>
        <li>Face ID & 지문 인증관리</li>
        <li>휴대전화번호 변경</li>
        <li>약관</li>
        <li>버전정보</li>
        <li>회원탈퇴</li>
      </ul>
    </div>
  );
}

export default setting2;
