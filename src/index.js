import React from 'react';
import { createRoot } from 'react-dom/client';

import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import config from './config';

import { store } from './contexts/store';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter basename={config.basename}>
                <App />
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);
