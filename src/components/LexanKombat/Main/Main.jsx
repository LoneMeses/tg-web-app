import React, {useState} from 'react';
import './Main.css'
import Coin from '../assets/lCoin.png'
import Lexan from '../assets/Lexan.png'

const Main = () => {
    const [value, setValue] = useState(0)

    const increment = () => {
        setValue(value + 1)
    }

    return (
        <div className={'main'}>
            <div className={'counter'}>
                <img src={Coin} alt="l-coin"/>
                <span>{value}</span>
            </div>
            <div className="circle">
                <img src={Lexan} alt="lexan"/>
            </div>
        </div>
    );
};

export default Main;