import React, { useContext } from 'react';
import cn from 'classnames';
import AppBar from '@material-ui/core/AppBar';
// import { ThemeStateContext } from '../../contexts';
import styles from './styles.module.scss';

import Toolbar from '@material-ui/core/Toolbar';

const Header = props => {
    console.count('<HEADER /> RENDER');
    // const theme = useContext(ThemeStateContext);

    return (
        <AppBar className={cn(styles.root)}>
            <Toolbar>
                {props.children}
            </Toolbar>
        </AppBar>
    )
}

export default Header;