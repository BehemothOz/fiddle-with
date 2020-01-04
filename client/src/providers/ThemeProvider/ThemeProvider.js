import React, { useState, useMemo } from 'react';
import { ThemeStateContext, ThemeActionContext } from '../../contexts';
import { LIGHT, DARK } from '../../constants/theme';

const ThemeProvider = props => {
    const [theme, setTheme] = useState(LIGHT);

    const toggleTheme = value => {
        const nextValue = value ? DARK : LIGHT;
        setTheme(nextValue);
    };

    const actions = useMemo(() => ({
        toggleTheme
    }), []);

    return (
        <ThemeStateContext.Provider value={theme}>
            <ThemeActionContext.Provider value={actions}>
                {props.children}
            </ThemeActionContext.Provider>
        </ThemeStateContext.Provider>
    )
}

export default ThemeProvider;
