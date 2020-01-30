import React, { useContext } from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { DictionariesActionsContext } from '../../../../contexts/DictionariesContext';
import useStyles from './styles';

const Empty = () => {
    const styles = useStyles();
    const actions = useContext(DictionariesActionsContext);
    const handleClick = () => actions.openCreateModal();

    return (
        <Box className={styles.root}>
            <Typography gutterBottom color="textSecondary">You don't have a dictionary yet</Typography>
            <Button variant="contained" color="primary" size="small" onClick={handleClick}>Create Dictionary</Button>
        </Box>
    )
}

export default Empty;