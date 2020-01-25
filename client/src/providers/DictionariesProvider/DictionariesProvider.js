import React, { useState, useMemo, useCallback } from 'react';
import { Modal } from 'antd';
import {
    DictionariesStateContext,
    DictionariesActionsContext
} from '../../contexts/DictionariesContext';

const DictionariesProvider = props => {
    const [visible, setVisible] = useState(false);

    const toggleModal = useCallback(() => {
        setVisible(visible => !visible);
    }, [setVisible])

    const actions = useMemo(() => ({
        toggleModal
    }), []);

    return (
        <DictionariesStateContext.Provider value={visible}>
            <DictionariesActionsContext.Provider value={actions}>
                {props.children}
                <Modal
                    title="Vertically centered modal dialog"
                    centered
                    visible={visible}
                    onOk={toggleModal}
                    onCancel={toggleModal}
                    >
                    <p>some contents...</p>
                    <p>some contents...</p>
                    <p>some contents...</p>
                </Modal>
            </DictionariesActionsContext.Provider>
        </DictionariesStateContext.Provider>
    )
}

export default DictionariesProvider;
