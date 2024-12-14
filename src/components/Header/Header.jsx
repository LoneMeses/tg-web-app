import React from 'react';
import Button from "../Button/Button";
import {useTelegram} from "../hooks/useTelegram";
import './Header.css'

const Header = () => {
    const {onClose, username} = useTelegram()
    return (
        <div className={'header'}>
            <Button onClick={onClose}>Закрыть</Button>
            <span className={'username'}>
                {username}
            </span>
        </div>
    );
};

export default Header;