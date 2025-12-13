import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

// Aguardar M estar disponível antes de renderizar
const waitForMaterialize = () => {
    return new Promise((resolve) => {
        const checkM = () => {
            if (typeof window !== 'undefined' && typeof window.M !== 'undefined') {
                resolve();
                return true;
            }
            return false;
        };
        
        if (checkM()) {
            return;
        }
        
        const checkInterval = setInterval(() => {
            if (checkM()) {
                clearInterval(checkInterval);
            }
        }, 50);
        
        setTimeout(() => {
            clearInterval(checkInterval);
            resolve();
        }, 3000);
        
        if (typeof window !== 'undefined') {
            window.addEventListener('load', () => {
                if (checkM()) {
                    clearInterval(checkInterval);
                }
            });
        }
    });
};

waitForMaterialize().then(() => {
    ReactDOM.render((
        <BrowserRouter>
            <App />
        </BrowserRouter>
    ), document.getElementById('root'));
});