import React from 'react';

const style = {
    padding: 20,
    backgroundColor: 'rgba(0, 128, 0, 0.18)',
    border: '1px solid green'
}

const P = props => {
    return (
        <p style={style}>
            P
            {props.children}
        </p>
    )
}

export default P;