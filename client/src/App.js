import React, { useState } from 'react';
import { Switch, Route } from 'react-router';
import Auth from './templates/Auth';
import Home from './templates/Home/Home';
import { ThemeContext, themes } from './context';

const App = () => {
    const toggleTheme = (a) => {
        const nextTheme = a ? 'dark' : 'light';
        setTheme({ ...theme, theme: nextTheme });
    }

    const [theme, setTheme] = useState({
        theme: themes.light,
        toggleTheme
    });

    return <ThemeContext.Provider value={theme}>
        <Switch>
            <Route path="/home" component={Home} />
            <Route path="/" component={Auth} />
        </Switch>
    </ThemeContext.Provider>
}

export default App;
