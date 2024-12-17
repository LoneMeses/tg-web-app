import React, {useContext, useState} from 'react';
import './Main.css'
import Coin from '../assets/lCoin.png'
import Lexan from '../assets/LexanButton.png'
import {LoadingContext} from "../../context/LoadingContext";
import LoadingPage from "../Pages/LoadingPage";
import {Spinner} from "react-bootstrap";

const Main = () => {
    const [value, setValue] = useState(0)
    const {isLoading, setIsLoading} = useContext(LoadingContext)

    const createFloatingScore = (x, y) => {
        const floatingScore = document.createElement('div');
        floatingScore.id = 'floating-score';
        floatingScore.style.left = `${x}px`;
        floatingScore.style.top = `${y}px`;
        floatingScore.textContent = '+1';
        document.body.appendChild(floatingScore);
        setTimeout(() => {
            floatingScore.remove();
        }, 1000);
    }
    const onClickHandler = (event) => {
        const rect = event.target.getBoundingClientRect()

        const offsetX = event.clientX - rect.left - rect.width / 2;
        const offsetY = event.clientY - rect.top - rect.height / 2;

        const DEG = 40

        const tiltX = (offsetY / rect.height) * DEG
        const tiltY = (offsetX / rect.width) * -DEG

        event.target.style.setProperty('--tiltX', `${tiltX}deg`)
        event.target.style.setProperty('--tiltY', `${tiltY}deg`)
        createFloatingScore(event.clientX, event.clientY)

        setTimeout(() => {
            event.target.style.setProperty('--tiltX', `0deg`)
            event.target.style.setProperty('--tiltX', `0deg`)
        }, 300)

        setValue(value + 1)
    }



    setTimeout(() => {
        setIsLoading(false)
    }, 5000)

    if(isLoading) {
        return <LoadingPage/>
    }


    return (
        <div className={'main'}>
            <div className={'counter'}>
                <img src={Coin} alt="l-coin"/>
                <span>{value}</span>
            </div>
            <div className="circle">
                <img src={Lexan} alt="lexan" onClick={event => onClickHandler(event)}/>
            </div>
        </div>
    );
};

export default Main;