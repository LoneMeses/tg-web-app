import React, {useState} from 'react';
import './Main.css'
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
            <button value={value} onClick={increment}>Добавить</button>
        </div>
    );
};

export default Main;