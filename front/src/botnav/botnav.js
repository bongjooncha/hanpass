import './botnav.css'

import m1 from "./m1.JPG";
import m2 from "./m2.JPG";
import m3 from "./m3.JPG";
import m4 from "./m4.JPG";
import m5 from "./m5.JPG";

import arrow from "./arrow.JPG";

import acccre from "./page/accountcreate.JPG"

function Botnav(){
    return(
        <div className ="BotNavDiv">
            <navbar className = "BottomNav">
                <ul>
                <li><a href="#"><img src ={m1} alt="계좌관리"/></a></li>
                <li><a href="#"><img src ={m2} alt="내역관리"/></a></li>
                <li><a href="#"><img src ={m3} alt="이베트"/></a></li>
                <li><a href="#"><img src ={m4} alt="고객센터"/></a></li>
                <li><a href="#"><img src ={m5} alt="설정"/></a></li>
                </ul>
            </navbar>
            <div id='tab'>
                <div id="main">
                    <img src={arrow}></img>
                    <h3>계좌관리</h3>
                </div>

                <div id="accman">
                    <img src={acccre}></img>
                </div>

                <div id="setting">
                    <ul>
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

            </div>
        </div>

    )
}

export default Botnav;