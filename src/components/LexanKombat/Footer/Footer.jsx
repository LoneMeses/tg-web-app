import React from 'react';
import {Link} from "react-router-dom";
import { AiOutlineHome, AiOutlineDollar } from "react-icons/ai";
const Footer = () => {
    return (
        <div className={'footer'}>
            <Link to={'/'}><AiOutlineHome/>Главная</Link>
            <hr/>
            <Link to={'/form'}><AiOutlineDollar/>Вывод</Link>
        </div>
    );
};

export default Footer;