import React, { useEffect, useState } from 'react';

import './countdown.css';
function CountDown()
{
    const[day,setDay]=useState(0);
   const[hours,setHours]=useState(0);
   const[mins,setMins]=useState(0);
    const[sec,setSec]=useState(0);
    const[inputdate,setInputdate]=useState("1 Jan 2023");
    const[currentdate,setCurrentdate]=useState(inputdate);
useEffect(()=>{
    const changingDate=new Date(inputdate);
    const currentdate=new Date();
    const totalSeconds= (changingDate-currentdate)/1000;
    setDay(formatTime(Math.floor(totalSeconds/3600/24)));
    setHours(Math.floor(totalSeconds/3600)%24);
    setMins(Math.floor(totalSeconds/60)%60);
    setSec(Math.floor(totalSeconds%60));


},[currentdate]);
function formatTime(time)
{
    return time < 10 ? `0${time}`:time;
}
const onchangeHandleClick=(event)=>
{
    setInputdate(event.target.value);

};
const conclickhandler=()=>{
    setCurrentdate(inputdate);
}
    return (
    <div className='countdown-container'>
        <div className='countdown-values'>
            <div className='countdown-value'>
                <p className='text'>{day}</p>
                <span>Day</span>
            </div>
            <div className='countdown-value'>
                <p className='text'>{hours}</p>
                <span>Hours</span>
            </div>
            <div className='countdown-value'>
                <p className='text'>{mins}</p>
                <span>Mins</span>
            </div>
            <div className='countdown-value'>
                <p className='text'>{sec}</p>
                <span>Seconds</span>
            </div>

        </div>
        <div className='countdown-input-button'>
            <input className='countdown-input' onChange={onchangeHandleClick}/>
                <button className='countdown-button' onClick={conclickhandler}>CountDown </button>
            </div>
        </div>

   
    );
}
export default CountDown;