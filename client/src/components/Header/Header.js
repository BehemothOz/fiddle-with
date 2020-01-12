import React, { useContext } from 'react';
import cn from 'classnames';
import { ThemeStateContext } from '../../contexts';
import styles from './styles.module.scss';

const Header = props => {
    console.count('<HEADER /> RENDER');
    const theme = useContext(ThemeStateContext);

    return (
        <header className={cn(styles.root, styles[`theme-${theme}`])}>
            {props.children}
        </header>
    )
}

export default Header;