import './botnav.css'

import m1 from "./m1.JPG";
import m2 from "./m2.JPG";
import m3 from "./m3.JPG";
import m4 from "./m4.JPG";
import m5 from "./m5.JPG";

function Botnav(){
    return(
        <div>
            <navbar className = "BottomNav">
                <ul>
                <li><a href="#"><img src ={m1} alt="계좌관리"/></a></li>
                <li><a href="#"><img src ={m2} alt="내역관리"/></a></li>
                <li><a href="#"><img src ={m3} alt="이베트"/></a></li>
                <li><a href="#"><img src ={m4} alt="고객센터"/></a></li>
                <li><a href="#"><img src ={m5} alt="설정"/></a></li>
                </ul>
            </navbar>
        </div>
    )
}

export default Botnav;