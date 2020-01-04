import React, { useContext } from 'react';
import { ThemeStateContext } from '../../../../contexts';
import { root } from './styles.module.scss';

const style = {
    display: 'block',
    padding: 10,
    backgroundColor: 'rgba(255, 165, 0, 0.23)',
    border: '1px solid orange'
}

const Span = () => {
    console.count('<SPAN /> RENDER');
    const theme = useContext(ThemeStateContext);

    const handleClick = () => {
        console.log('this is handler span');
    }

    const styles = {
        backgroundColor: theme === 'dark' ? 'red' : 'green'
    }

    return <span role="button" className={root} style={styles} onClick={handleClick}>Span</span>;
}

export default Span;