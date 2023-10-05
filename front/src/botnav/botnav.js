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

                <div id="achisman">
                    <div id = "headachisman">
                        <button>해외송금 보내기</button>
                        <button>국내송금</button>
                        <button>연락처 송금</button>
                        <button>체크카드</button>
                        <button>교통카드 충전</button>
                        <button>결제</button>
                        <button>ATM 출금</button>
                        <button>국내 선불폰 충전</button>
                    </div>
                    <div id ="dateachisman">
                        <button></button>
                        <a>2023.10</a>
                        <button></button>
                    </div>
                    <div id='memachisman'>
                        <div id= 'time'>
                            <a>최신순</a>
                            <div id='line'></div>
                            <a>과거순</a>
                        </div>
                        <a>
                            내역이 없습니다.
                        </a>
                    </div>
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