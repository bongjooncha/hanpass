import './logman.css'

function logman(){
    return(
        <div id="logman">
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
    )
}

export default logman;