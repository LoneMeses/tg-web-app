import React from 'react';
import {Spinner} from "react-bootstrap";

const LoadingPage = () => {
    return (
        <div className={'loading_page'}>
            <h3>Пожалуйста, подождите, игра загружается</h3>
            <span className={'loader'}></span>
        </div>
    );
};

export default LoadingPage;