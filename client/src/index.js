import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import './assets/styles/index.scss';

import App from './App';
import * as serviceWorker from './serviceWorker';

import ThemeProvider from './providers/ThemeProvider';
import AuthProvider from './providers/AuthProvider';

ReactDOM.render(
    <Router>
        <AuthProvider>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </AuthProvider>
    </Router>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
