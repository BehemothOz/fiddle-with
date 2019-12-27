import React, { useContext } from 'react';
import { Switch as VanillaSwitch } from 'antd';
import { AppContext } from '../../../../reducer';

const Switch = () => {
    const theme = useContext(AppContext);
    console.log(theme);
    const handleChange = (a, b) => {
        console.log(`switch to ${a, b}`);
    }

    return <VanillaSwitch onChange={handleChange} />;
}

export default Switch;