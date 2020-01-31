import React, { useContext } from 'react';
import Item from '../Item';
import { DictionariesActionsContext } from '../../../../contexts/DictionariesContext';
import useStyles from './styles';

const Row = props => {
    const { dictionaries } = props;
    const styles = useStyles();

    const { openEditModal } = useContext(DictionariesActionsContext);

    const handleEditClick = params => openEditModal(params);

    return (
        dictionaries.map(dictionary => {
            return (
                <div key={dictionary._id} className={styles.row}>
                    <Item
                        onEditClick={handleEditClick}
                        {...dictionary}
                    />
                </div>
            )
        })
    )
}

export default Row;