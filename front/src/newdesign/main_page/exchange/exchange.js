import exchange from "./exchange.png";
import "./exchange.css";

function Exchange(){
    return(
        <div id ="exchange">
            <h3>해외 송금보내기</h3>
            <img src={exchange}/>
        </div>
    )
}

export default Exchange;