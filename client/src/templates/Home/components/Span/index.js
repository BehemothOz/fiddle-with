import React from 'react';

const style = {
    display: 'block',
    padding: 10,
    backgroundColor: 'rgba(255, 165, 0, 0.23)',
    border: '1px solid orange'
}

const Span = () => {
    const handleClick = () => {
        console.log('this is handler span');
    }

    return <span role="button" style={style} onClick={handleClick}>Span</span>;
}

export default Span;