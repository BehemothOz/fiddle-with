import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";

import App from './App';

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
