import React, { useContext, useCallback } from 'react';
import { Switch as VanillaSwitch } from 'antd';
import { ThemeContext } from '../../../../context';

const Switch = () => {
    const theme = useContext(ThemeContext);

    const handleChange = useCallback((a, b) => {
        theme.toggleTheme(a)
    }, [theme.theme])

    return <VanillaSwitch onChange={handleChange} />;
}

export default Switch;