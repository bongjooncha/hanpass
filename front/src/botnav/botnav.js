import {useState} from 'react';
import './botnav.css'

import m1 from "./m1.JPG";
import m2 from "./m2.JPG";
import m3 from "./m3.JPG";
import m4 from "./m4.JPG";
import m5 from "./m5.JPG";

import arrow from "./arrow.JPG";

import Accman from './page/accman/accman.js';
import Logman from './page/logman/logman.js';
import Setting from './page/setting/setting.js';

function Botnav(){
    const [headerText, setHeaderText]=useState('');
    const changeText =(newText)=>{
        setHeaderText(newText)};

    const [component,setComponent]=useState('');
    const changeComponent = (newComp)=>{
        setComponent(newComp)
    }

    return(
        <div className ="BotNavDiv">
            <navbar className = "BottomNav">
                <ul>
                    <li onClick={()=>{
                        changeText('계좌관리');
                        changeComponent(Accman);
                        }}><a><img src ={m1} alt="계좌관리"/></a></li>
                    <li onClick={()=>{
                        changeText('내역관리');
                        changeComponent(Logman);
                        }}><a><img src ={m2} alt="내역관리"/></a></li>
                    <li onClick={()=>{
                        changeText('이벤트')
                        changeComponent();
                        }}><a><img src ={m3} alt="이베트"/></a></li>
                    <li onClick={()=>{
                        changeText('고객센터');
                        changeComponent();
                        }}><a><img src ={m4} alt="고객센터"/></a></li>
                    <li onClick={()=>{
                        changeText('설정');
                        changeComponent(Setting);
                        }}><a><img src ={m5} alt="설정"/></a></li>
                </ul>
            </navbar>
            <div id='tab'>
                <div id="main">
                    <button><img src={arrow}></img></button>
                    <h3>{headerText}</h3>
                </div>

                <div id='content'>
                    {component}
                </div>
            </div>
        </div>

    )
}

export default Botnav;