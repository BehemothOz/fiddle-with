import React from 'react';
import Switch from '../Switch';

const Header = () => {
    return (
        <header style={{
            display: 'flex',
            alignItems: 'center',
            padding: '0 30px',
            height: 50,
            borderBottom: '1px solid #d6d6d6'
        }}>
            <Switch />
        </header>
    )
}

export default Header;