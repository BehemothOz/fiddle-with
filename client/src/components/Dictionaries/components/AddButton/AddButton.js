import React, { useContext } from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import useStyles from './styles';

import { DictionariesActionsContext } from '../../../../contexts/DictionariesContext';

const AddButton = props => {
    const styles = useStyles();
    const actions = useContext(DictionariesActionsContext);

    console.log(actions)

    const handleClick = () => actions.openCreateModal();

    return (
        <Fab color="primary" className={styles.fab} onClick={handleClick}>
        <AddIcon />
        </Fab>
    )
}

export default AddButton;