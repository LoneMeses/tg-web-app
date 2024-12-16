import React, {useState} from 'react';
import './Main.css'
import ButtonKombat from "../Button/ButtonKombat";
const Main = () => {
    const [value, setValue] = useState(0)

    const increment = () => {
        setValue(value + 1)
    }

    return (
        <div className={'main'}>
            <div className={'counter'}>
                <img src="https://i.imgur.com/1SDruuW.png" alt="l-coin"/>
                <span>{value}</span>
            </div>
            <ButtonKombat value={value} onClick={increment}/>
        </div>
    );
};

export default Main;