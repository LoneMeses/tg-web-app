import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import KombatApp from "./KombatApp";
import {BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <KombatApp/>
        </BrowserRouter>
    </React.StrictMode>
);

