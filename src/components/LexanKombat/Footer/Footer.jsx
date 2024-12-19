import React from 'react';
import { AiOutlineHome, AiOutlineDollar } from "react-icons/ai";
import './Footer.css'
const Footer = () => {
    return (
        <div className={'footer'}>
            <a href="#" className={'home-btn'}><AiOutlineHome/>Главная</a>
            <hr/>
            <a href="#" className={'loss-btn'}><AiOutlineDollar/>Вывод</a>
        </div>
    );
};

export default Footer;