import "./mypage.css";

import myPage from "../png/mypage.jpg";
import myPage_arrow from "../../png/myarrow.jpg";
import myPage_end from "../../png/mypage_end.jpg";

function Event(){

    function removeMyPage() {
        const mypage = document.querySelector(".mypage");
        mypage.classList.remove("showmepage");
      }

    return(
            <div className="mypage">
                <div id ="mypage_title">
                    <img src={myPage_arrow} onClick={()=>removeMyPage()}/>
                    <h3>내 정보</h3>
                    <img src={myPage_end}/>
                </div>
                <img src={myPage}/>
            </div>
    )
}

export default Event;