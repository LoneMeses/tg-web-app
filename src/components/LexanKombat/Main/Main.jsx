import React, {useEffect, useRef, useState} from 'react';
import './Main.css'
import Coin from '../assets/lCoin.png'
import Lexan from '../assets/Lexan.png'

const Main = () => {
    const [value, setValue] = useState(0)
    const img = document.getElementsByClassName('circle')
    const onClickHandler = (event, element) => {
        const rect = img.getBoundingClientRect()

        const offsetX = event.clientX - rect.left - rect.width / 2;
        const offsetY = event.clientY - rect.top - rect.height / 2;

        const DEG = 40

        const tiltX = (offsetY / rect.height) * DEG
        const tiltY = (offsetX / rect.width) * -DEG

        img.style.setProperty('--tiltX', `${tiltX}deg`)
        img.style.setProperty('--tiltY', `${tiltY}deg`)

        setTimeout(() => {
            img.style.setProperty('--tiltX', `0deg`)
            img.style.setProperty('--tiltX', `0deg`)
        }, 300)

        setValue(value + 1)
    }




    return (
        <div className={'main'}>
            <div className={'counter'}>
                <img src={Coin} alt="l-coin"/>
                <span>{value}</span>
            </div>
            <div className="circle">
                <img src={Lexan} alt="lexan" onClick={event => onClickHandler(event, img)}/>
            </div>
        </div>
    );
};

export default Main;