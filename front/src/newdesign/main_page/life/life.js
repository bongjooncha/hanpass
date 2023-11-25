import "./life.css";

import mobile from "../../../png/main_menu_img/mobile.png";
import exp_bus from "../../../png/main_menu_img/exp_bus.png";
import utility from "../../../png/main_menu_img/utility.png";
import trans from "../../../png/main_menu_img/trans.png";
import exch_get from "../../../png/main_menu_img/exch_get.png";
import hotel from "../../../png/main_menu_img/hotel.png";
import plane from "../../../png/main_menu_img/airplane.png";
import travle from "../../../png/main_menu_img/travle.png";

function Life(){
    return(
        <div id ="life">
            <div id ="life_title"><h3>생활 편의</h3></div>
            <div id="main_life">
                <div><img src={mobile}/><p>선불폰<br/>충전</p></div>
                <div><img src={utility}/><p>공과금<br/>납부</p></div>
                <div><img src={trans}/><p>교통카드<br/>충전</p></div>
                <div><img src={plane}/><p>항공권<br/>예약</p></div>
                <div><img src={exp_bus}/><p>고속버스<br/>예약</p></div>
                <div><img src={travle}/><p>여행보험</p></div>
                <div><img src={exch_get}/><p>해외송금<br/>받기</p></div>
                <div><img src={hotel}/><p>호텔예약</p></div>


            </div>
        </div>
    )
}

export default Life;