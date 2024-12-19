import React from 'react';
import {Link} from "react-router-dom";
import { AiOutlineHome, AiOutlineDollar } from "react-icons/ai";
const Footer = () => {
    return (
        <div className={'footer'}>
            <Link to={'/'}><AiOutlineHome/>Главная</Link>
            <hr/>
            <Link to={'/form'}><AiOutlineDollari/>Вывод</Link>
        </div>
    );
};

export default Footer;