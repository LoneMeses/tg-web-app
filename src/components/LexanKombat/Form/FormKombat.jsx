import React, {useEffect} from 'react';
import './FormKombat.css'
import {useTelegram} from "../../hooks/useTelegram";
import {useNavigate} from "react-router-dom";
const FormKombat = () => {
    const {tg} = useTelegram()
    const navigate = useNavigate()
    useEffect(() => {
        tg.BackButton.show()
        tg.BackButton.onClick(() => navigate(""))
        return () => {
            tg.BackButton.hide()
        }
    }, [])

    return (
        <div className={'kombat-form'}>
            <h2>Извините, этот раздел находится в доработке</h2>
        </div>
    );
};

export default FormKombat;