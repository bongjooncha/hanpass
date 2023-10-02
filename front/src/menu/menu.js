import './menu.css';

import arrow from './arrow.JPG';

function Menu(){
    return(
        <div id="menu">
            <div id="menunav">
                <img src ={arrow}></img>
                <h2>전체 서비스 보기</h2>
            </div>
            <ul>
                <h3>생활·편의</h3>
                <li>모바일</li>
                <li>쿄통카드 충전</li>
            </ul>
        </div>
    );
}

export default Menu;