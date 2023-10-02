import './Main.css';
import bell from "./frontnavimg/bell.JPG";
import menu from "./frontnavimg/menu.JPG";
import mypage from "./frontnavimg/mypage.JPG";

import coun from "./mainimg/coun.JPG";
import ticket from "./mainimg/ticket.JPG";

import wallet from "./mainimg/wallet.JPG"

import qrget from "./mainimg/qrget.JPG"
import qrgive from "./mainimg/qrgive.JPG"

import line4 from "./mainimg/forthline.JPG"

import Botnav from './botnav/botnav.js'

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
          <img id="ticket" src ={ticket}></img>
        </div>

        <img id ="wallet" src={wallet}></img>

        <div id="qr">
          <img src={qrget}></img><a>QR 송금받기</a>
          <img src= {qrgive}></img><a>QR 송금받기</a>
        </div>

        <img id="line4" src={line4}></img>

      </main>
      <Botnav/>
      <footer>
      </footer>
    </div>
  );
}

export default Main;
