import "./cal.css";

import cal from "../../../png/cal.jpg"

function Cal(){
    return(
        <div id ="cal">
            <h3>임금 달력</h3>
            <img src={cal}/>
        </div>
    )
}

export default Cal;