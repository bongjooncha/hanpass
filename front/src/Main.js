import './Main.css';
import bell from "./frontnavimg/bell.JPG";
import menu from "./frontnavimg/menu.JPG";
import mypage from "./frontnavimg/mypage.JPG";

import coun from "./main/coun.JPG";

import m1 from "./botnavimg/m1.JPG";
import m2 from "./botnavimg/m2.JPG";
import m3 from "./botnavimg/m3.JPG";
import m4 from "./botnavimg/m4.JPG";
import m5 from "./botnavimg/m5.JPG";

function Main() {
  return (
    <div className="Main">
      <navbar className = "TopNav">
        <ul>
          <li><img id='menu' src={menu}></img></li>
          <li><img id="bell" src={bell}></img></li>
          <li><img id = 'mypage' src={mypage}></img></li>
        </ul>
      </navbar>

      <main>
        <div className='hiuser'>
          <img id="coun" src={coun}></img>
          <p>안녕하세요.<br/> 사용자님</p>
        </div>

      </main>

      <navbar className = "BottomNav">
        <ul>
          <li><a href="#"><img src ={m1} alt="계좌관리"/></a></li>
          <li><a href="#"><img src ={m2} alt="내역관리"/></a></li>
          <li><a href="#"><img src ={m3} alt="이베트"/></a></li>
          <li><a href="#"><img src ={m4} alt="고객센터"/></a></li>
          <li><a href="#"><img src ={m5} alt="설정"/></a></li>
        </ul>
      </navbar>
      <footer>
      </footer>
    </div>
  );
}

export default Main;
