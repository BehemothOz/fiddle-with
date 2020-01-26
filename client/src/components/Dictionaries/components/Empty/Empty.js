import React, { useContext } from 'react';
import { Empty as AntEmpty } from 'antd';
import { Button, Paper } from '../../../../shared';
import { DictionariesActionsContext } from '../../../../contexts/DictionariesContext';

const Empty = () => {
    const actions = useContext(DictionariesActionsContext);
    const handleClick = () => actions.openModal({});

    return (
        <Paper>
            <AntEmpty description="You don't have a dictionary yet">
                <Button type="primary" onClick={handleClick}>Create Dictionary</Button>
            </AntEmpty>
        </Paper>
    )
}

export default Empty;