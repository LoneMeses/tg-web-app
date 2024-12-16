import React from 'react';
import './ButtonKombat.css'
const ButtonKombat = (props) => {
    return (
        <button {...props} className={'Kombat-btn'}>
            <img src="/src/components/assets/OpRw4K-MlZU.jpg" alt="lexan" className={'btn-img'}/>
        </button>
    );
};

export default ButtonKombat;