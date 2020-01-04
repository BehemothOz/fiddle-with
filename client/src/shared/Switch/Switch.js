import React, { useContext, useCallback } from 'react';
import { Switch as AntSwitch } from 'antd';
import { ThemeActionContext } from '../../contexts';

import usePrevious from '../../hooks/usePrevious';

const Switch = () => {
    console.count('<SWITCH /> RENDER');

    const actions = useContext(ThemeActionContext);

    const prevAction = usePrevious(actions);

    console.log('equal action to switch', prevAction === actions)

    const handleChange = (value = true) => {
        actions.toggleTheme(value)
    }

    return <AntSwitch onChange={handleChange} />;
}

export default Switch;