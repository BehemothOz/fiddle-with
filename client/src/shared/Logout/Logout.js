import React, { useContext } from 'react';
// import { Button } from 'antd';
import IconButton from '@material-ui/core/IconButton'
import { AuthActionsContext } from '../../contexts/AuthContext';

import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';

const Logout = () => {
    console.count('<Logout /> RENDER');
    const auth = useContext(AuthActionsContext);

    return (
        <IconButton aria-label="logout" onClick={auth.logout} size="medium">
            <PowerSettingsNewIcon fontSize="inherit" />
        </IconButton>
    )
}

export default Logout;