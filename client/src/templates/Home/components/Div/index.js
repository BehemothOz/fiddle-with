import React from 'react';

const style = {
    width: 400,
    padding: 30,
    backgroundColor: 'rgba(255, 0, 0, 0.26)',
    border: '1px solid red'
}

const Div = props => {
    return (
        <div style={style}>
            Div
            {props.children}
        </div>
    )
}

export default Div;