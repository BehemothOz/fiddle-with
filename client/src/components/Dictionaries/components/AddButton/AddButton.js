import React from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import useStyles from './styles';

const AddButton = props => {
    const styles = useStyles();
    return (
        <Fab color="primary" className={styles.fab}>
        <AddIcon />
        </Fab>
    )
}

export default AddButton;