import React, { useContext, useCallback } from 'react';
import Button from '@material-ui/core/Button';
import Item from '../Item';
import { DictionariesActionsContext } from '../../../../contexts/DictionariesContext';
import styles from './styles.module.scss';

const Row = props => {
    const { dictionaries } = props;
    const { openCreateModal, openEditModal } = useContext(DictionariesActionsContext);

    const handleEditClick = params => openEditModal(params);
    const handleCreateClick = () => openCreateModal();

    return (
        <>
            {/* <Button type="primary" block onClick={handleCreateClick}>Add</Button> */}
            {dictionaries.map(dictionary => {
                return (
                    <div key={dictionary._id} className={styles.row}>
                        <Item
                            onEditClick={handleEditClick}
                            {...dictionary}
                        />
                    </div>
                )
            })}
        </>
    )
}

export default Row;