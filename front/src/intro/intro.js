import "./intro.css";
import phone from "./intro.jpg";

function Intro() {
  function showBlueScreen() {
    const mainScreen = document.querySelector(".intro");
    const blueScreen = document.querySelector(".blue-screen");
    blueScreen.style.display = "block";
    setTimeout(() => {
      mainScreen.style.display = "none";
      blueScreen.style.display = "none";
    }, 3000); // 5초 후에 파란 화면을 숨깁니다.
  }

  return (
    <div className="intro">
      <img src={phone}></img>
      <div className="box" onClick={showBlueScreen}></div>
      <div className="blue-screen"></div>
    </div>
  );
}

export default Intro;
