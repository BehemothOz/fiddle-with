import React, { useState, useMemo, useCallback } from 'react';
import {
    DictionariesStateContext,
    DictionariesActionsContext
} from '../../contexts/DictionariesContext';
import { CREATE, EDIT } from '../../constants/mode';

const createValue = { mode: CREATE, values: {} }
const editValue = { mode: EDIT, values: {} }

const DictionariesProvider = props => {
    const [visible, setVisible] = useState(false);
    const [params, setParams] = useState({});

    const values = {
        visible,
        params
    }

    const openCreateModal = useCallback(() => {
        setVisible(true);
        setParams(createValue);
    }, [])

    const openEditModal = useCallback(params => {
        setVisible(true);
        setParams({ ...editValue, values: params });
    }, []);

    const closeModal = useCallback(() => {
        setVisible(false);
    }, []);

    const actions = useMemo(() => ({
        openCreateModal,
        openEditModal,
        closeModal
    }), []);

    console.log('params', params)

    return (
        <DictionariesStateContext.Provider value={values}>
            <DictionariesActionsContext.Provider value={actions}>
                {props.children}
            </DictionariesActionsContext.Provider>
        </DictionariesStateContext.Provider>
    )
}

export default DictionariesProvider;
