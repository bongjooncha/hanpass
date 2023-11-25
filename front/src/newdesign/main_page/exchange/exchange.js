import exchange from "./exchange.png";
import "./exchange.css";

function Exchange(){
    return(
        <div id ="exchange">
            <div><h3>해외 송금보내기</h3></div>
            <img src={exchange}/>
        </div>
    )
}

export default Exchange;