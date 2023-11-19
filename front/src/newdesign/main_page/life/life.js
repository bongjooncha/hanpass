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
                <img src={mobile}/>
                <img src={exp_bus}/>
                <img src={utility}/>
                <img src={trans}/>
                <img src={exch_get}/>
                <img src={hotel}/>
                <img src={plane}/>
                <img src={travle}/>
            </div>
        </div>
    )
}

export default Life;