import React, { useMemo } from 'react';
import { createMuiTheme, ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { ThemeStateContext, ThemeActionContext } from '../../contexts';
import CssBaseline from '@material-ui/core/CssBaseline';
import useLocalStorage from '../../hooks/utils/useLocalStorage';

const darkTheme = createMuiTheme({
    palette: {
        type: 'dark'
    },
});

const lightTheme = createMuiTheme({
    palette: {
        type: 'light'
    },
});

const selectTheme = value => value ? darkTheme : lightTheme;

const ThemeProvider = props => {
    const storage = useLocalStorage('theme', false);

    const toggleTheme = value => {
        storage.set(value);
    };

    const actions = useMemo(() => ({
        toggleTheme
    }), []);

    return (
        <MuiThemeProvider theme={selectTheme(storage.value)}>
            <ThemeStateContext.Provider value={storage.value}>
                <ThemeActionContext.Provider value={actions}>
                    <CssBaseline />
                    {props.children}
                </ThemeActionContext.Provider>
            </ThemeStateContext.Provider>
        </MuiThemeProvider>
    )
}

export default ThemeProvider;
