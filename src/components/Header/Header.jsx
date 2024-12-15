import React from 'react';
import Button from "../Button/Button";
import {useTelegram} from "../hooks/useTelegram";
import './Header.css'

/*<span className={'username'}>
                {user.username}
            </span>*/
const Header = () => {
    const {onClose, user} = useTelegram()
    return (
        <div className={'header'}>
            <Button onClick={onClose}>Закрыть</Button>

        </div>
    );
};

export default Header;