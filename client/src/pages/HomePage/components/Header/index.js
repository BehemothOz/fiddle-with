import React, { useContext } from 'react';
import { ThemeContext } from '../../../../context';
import Switch from '../Switch';

const Header = () => {
    const themeContext = useContext(ThemeContext);

    return (
        <header style={{
            display: 'flex',
            alignItems: 'center',
            padding: '0 30px',
            height: 50,
            borderBottom: '1px solid #d6d6d6',
            transition: 'all 0.2s ease',
            backgroundColor: themeContext.theme === 'light' ? '#fff' : '#282c33'
        }}>
            <Switch />
        </header>
    )
}

export default Header;