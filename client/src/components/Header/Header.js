import React from 'react';
import AppBar from '@material-ui/core/AppBar';

const Header = props => {
    return <AppBar>{props.children}</AppBar>
}

export default Header;