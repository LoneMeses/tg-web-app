import React, {useEffect, useState} from 'react';
import './Form.css'
import {useTelegram} from "../hooks/useTelegram";
const Form = () => {
    const [country, setCountry] = useState('');
    const [street, setStreet] = useState('');
    const [subject, setSubject] = useState('physical');
    const {tg} = useTelegram()

    useEffect(() => {
        tg.MainButton.setParams({
            text: 'Отправить данные'
        })
    }, [])
    useEffect(() => {
        if(!country || !street) {
            tg.MainButton.hide()
        } else {
            tg.MainButton.show()
        }
    }, [country, street])
    const onChangeCountry = (e) => {
        setCountry(e.target.value)
    }
    const onChangeStreet = (e) => {
        setStreet(e.target.value)
    }
    const onChangeSubject = (e) => {
        setSubject(e.target.value)
    }
    return (
        <div className={'form'}>
            <h3>Введите ваши данные</h3>
            <input type="text" className={'input'} placeholder={'Страна'} onChange={onChangeCountry} value={country}/>
            <input type="text" className={'input'} placeholder={'Улица'} onChange={onChangeStreet} value={street}/>
            <select className={'select'} value={subject} onChange={onChangeSubject}>
                <option value="physical">Физ. лицо</option>
                <option value="legal">Юр. лицо</option>
            </select>
        </div>
    );
};

export default Form;