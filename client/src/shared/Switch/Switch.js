import React, { useContext } from 'react';
import MuiSwitch from '@material-ui/core/Switch';
import { ThemeStateContext, ThemeActionContext } from '../../contexts';

// import usePrevious from '../../hooks/utils/usePrevious';

const Switch = () => {
    const theme = useContext(ThemeStateContext);
    const actions = useContext(ThemeActionContext);

    // const prevAction = usePrevious(actions);
    // console.log('equal action to switch', prevAction === actions)

    const handleChange = (_, value) => {
        actions.toggleTheme(value)
    }

    return <MuiSwitch onChange={handleChange} checked={theme} />;
}

export default Switch;