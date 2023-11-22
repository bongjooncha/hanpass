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
            <h3>생활 편의</h3>
            <div id="main_life">
                <div><img src={mobile}/></div>
                <div><img src={exp_bus}/></div>
                <div><img src={utility}/></div>
                <div><img src={trans}/></div>
                <div><img src={exch_get}/></div>
                <div><img src={hotel}/></div>
                <div><img src={plane}/></div>
                <div><img src={travle}/></div>
            </div>
        </div>
    )
}

export default Life;