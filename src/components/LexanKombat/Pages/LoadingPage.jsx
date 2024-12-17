import React from 'react';
import {Spinner} from "react-bootstrap";

const LoadingPage = () => {
    return (
        <div className={'loading_page'}>
            <h3>Пожалуйста, подождите, игра загружается</h3>
            <Spinner animation={'border'} variant={'info'}/>
        </div>
    );
};

export default LoadingPage;