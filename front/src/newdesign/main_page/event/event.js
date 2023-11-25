import "./event.css";

import event from "./event.png"

function Event(){
    return(
        <div id ="event">
            <div id ="event_title"><h3>이벤트</h3></div>
            <img src={event}/>
        </div>
    )
}

export default Event;