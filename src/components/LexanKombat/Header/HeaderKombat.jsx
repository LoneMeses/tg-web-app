import React from 'react';
import {useTelegram} from "../../hooks/useTelegram";
import './HeaderKombat.css'
const HeaderKombat = () => {
    const {user} = useTelegram()
    return (
        <header>
            <div className="img">
                <img src={user.photo_url} alt='user_photo'/>
            </div>
            <div className="username">
                <h6>{user.first_name} (CEO)</h6>
            </div>
        </header>
    );
};

export default HeaderKombat;