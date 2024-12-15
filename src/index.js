import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import KombatApp from "./KombatApp";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <KombatApp/>
    </React.StrictMode>
);

