import React from 'react';

const style = {
    width: 400,
    padding: 30,
    backgroundColor: 'rgba(255, 0, 0, 0.26)',
    border: '1px solid red'
}

const Div = props => {
    const handleClick = event => {
        console.log('Div', event);
        console.log({
            'event.target': event.target,
            'event.currentTarget': event.currentTarget
        })
    }

    return (
        <div style={style} onClick={handleClick}>
            Div
            {props.children}
        </div>
    )
}

export default Div;