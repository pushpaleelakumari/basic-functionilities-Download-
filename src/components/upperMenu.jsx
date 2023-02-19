import React from 'react'
import { useGameMode } from '../context/gameModes';

function UpperMenu({ countDown, updateTime2 }) {

    const data = useGameMode();
    console.log(data);
    const updateTime = (e) => {
        // console.log(e.target.id);
        updateTime2(e.target.id);
    }

    return (
        <div className="container">
            <div className='container'>
                <div className='container'>
                    <div className='d-flex justify-content-between '>
                        <div className='counter'>{countDown} s</div>
                        <div className='d-flex gap-5'>
                            <span className="time" id={30} onClick={(e) => updateTime(e)}>30 s</span>
                            <span id={60} onClick={(e) => updateTime(e)} className="time">60 s</span>
                            <span id={120} onClick={(e) => updateTime(e)} className="time">120 s</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UpperMenu