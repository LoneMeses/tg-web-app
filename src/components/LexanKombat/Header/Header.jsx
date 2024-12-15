import React from 'react';
import {useTelegram} from "../../hooks/useTelegram";

const Header = () => {
    const {user} = useTelegram()
    return (
        <div>
            <img src={user.photo_url} alt='user_photo'/>
            <span>{user.username} (CEO)</span>
        </div>
    );
};

export default Header;