import React, { useState } from 'react';
import { Switch, Route } from 'react-router';
import AuthTemplate from './templates/AuthTemplate';
import BaseTemplate from './templates/BaseTemplate';
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
            <Route path="/home" component={BaseTemplate} />
            <Route path="/" component={AuthTemplate} />
        </Switch>
    </ThemeContext.Provider>
}

export default App;
