import React from 'react';
import {Link} from "react-router-dom";
import { AiOutlineHome, AiOutlineDollar } from "react-icons/ai";
const Footer = () => {
    return (
        <div className={'footer'}>
            <a href="#"><AiOutlineHome/>Главная</a>
            <hr/>
            <a href="#"><AiOutlineDollar/></a>
        </div>
    );
};

export default Footer;