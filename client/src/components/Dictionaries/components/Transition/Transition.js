import React, { forwardRef } from 'react';
import Slide from '@material-ui/core/Slide';

const Transition = forwardRef((props, ref) => {
    return <Slide direction="down" ref={ref} {...props} />;
});

export default Transition;