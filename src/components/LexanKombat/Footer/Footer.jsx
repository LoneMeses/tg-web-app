import React from 'react';
import {AiOutlineHome, AiOutlineDollar} from "react-icons/ai";
import './Footer.css'

const Footer = () => {
    return (
        <div className={'footer'}>
            <div className="home-div">
                <a href="#" className={'home-btn'}><AiOutlineHome/>Главная</a>
            </div>
            <hr/>
            <div className="loss-div">
                <a href="#" className={'loss-btn'}><AiOutlineDollar/>Вывод</a>
            </div>
        </div>
    );
};

export default Footer;