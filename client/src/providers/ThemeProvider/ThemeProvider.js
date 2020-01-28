import React, { useState, useMemo } from 'react';
import { createMuiTheme, makeStyles, ThemeProvider as ThemeProvider2 } from '@material-ui/core/styles';
import { ThemeStateContext, ThemeActionContext } from '../../contexts';
import { LIGHT, DARK } from '../../constants/theme';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
import CssBaseline from '@material-ui/core/CssBaseline';

const theme3 = createMuiTheme({
    palette: {
        type: 'dark'
    },
});

const theme2 = createMuiTheme({
    palette: {
        type: 'light'
    },
});

const ThemeProvider = props => {
    const [theme, setTheme] = useState(theme2);

    const toggleTheme = value => {
        console.log(value)
        const nextValue = value ? theme2 : theme3;
        setTheme(nextValue);
    };

    const actions = useMemo(() => ({
        toggleTheme
    }), []);
    console.log(theme)
    return (
        <ThemeProvider2 theme={theme}>
            <ThemeActionContext.Provider value={actions}>
                <CssBaseline />
                {props.children}
            </ThemeActionContext.Provider>
        </ThemeProvider2>
    )
}

export default ThemeProvider;
