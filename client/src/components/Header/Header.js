import React from 'react';
import AppBar from '@material-ui/core/AppBar';

const Header = props => {
    console.count('<HEADER /> RENDER');
    return <AppBar>{props.children}</AppBar>
}

export default Header;