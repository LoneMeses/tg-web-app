import React, {useRef} from 'react';
import {AiOutlineHome, AiOutlineDollar} from "react-icons/ai";
import './Footer.css'
import {Link} from "react-router-dom";

const Footer = () => {
    const toHomeButtonRef = useRef()
    const toLossButtonRef = useRef()
    const toHomeStyleChanger = (event) => {
        event.currentTarget.classList.add('active')
        toLossButtonRef.current.classList.remove('active')
    }
    const toLossStyleChanger = (event) => {
        event.currentTarget.classList.add('active')
        toHomeButtonRef.current.classList.remove('active')
    }
    return (
        <div className={'footer'}>
            <div className="home-div">
                <Link ref={toHomeButtonRef} to={''} className={'home-btn active'} onClick={event => toHomeStyleChanger(event)}>
                    <div>
                        <AiOutlineHome className={'home-icon'}/>
                    </div>
                    <div>
                        Главная
                    </div>
                </Link>
            </div>
            <hr/>
            <div className="loss-div">
                <Link to={'form'} className={'loss-btn'} ref={toLossButtonRef} onClick={event => toLossStyleChanger(event)}>
                    <div>
                        <AiOutlineDollar className={'loss-icon'}/>
                    </div>
                    <div>
                        Вывод
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Footer;