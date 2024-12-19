import React from 'react';
import {AiOutlineHome, AiOutlineDollar} from "react-icons/ai";
import './Footer.css'

const Footer = () => {
    return (
        <div className={'footer'}>
            <div className="home-div">
                <a href="#" className={'home-btn'}>
                    <div>
                        <AiOutlineHome/>
                    </div>
                    <div>
                        Главная
                    </div>
                </a>
            </div>
            <hr/>
            <div className="loss-div">
                <a href="#" className={'loss-btn'}>
                    <div>
                        <AiOutlineDollar/>
                    </div>
                    <div>
                        Вывод
                    </div>
                </a>
            </div>
        </div>
    );
};

export default Footer;