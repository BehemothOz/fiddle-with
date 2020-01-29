import React, { useCallback, useContext } from 'react';
// import { Modal } from 'antd';
import Form from '../Form';
import useSubmit from '../../../../hooks/async/useSubmit';
import {
    DictionariesStateContext,
    DictionariesActionsContext
} from '../../../../contexts/DictionariesContext';
import { DICTIONARY_POST } from '../../../../api/keys';
import { EDIT } from '../../../../constants/mode';

const FormContainer = React.memo(props => {
    const { visible, params } = useContext(DictionariesStateContext);
    const actions = useContext(DictionariesActionsContext);

    const [state, submit] = useSubmit({ key: DICTIONARY_POST });

    const handleSubmitSuccess = useCallback(() => {
        actions.closeModal();
        props.getDictionaries();
    }, []);

    console.count('<FormContainer />')

    const { mode, values } = params;

    return (
        // <Modal
        //     title={`${mode === EDIT ? 'Update' : 'Create'} dictionaty`}
        //     centered
        //     visible={visible}
        //     onCancel={actions.closeModal}
        //     destroyOnClose
        // >
            <Form
                initialValue={values}
                fetching={state.fetching}
                onSubmit={submit}
                onSubmitSuccess={handleSubmitSuccess}
            />
        // </Modal>
    )
})

export default FormContainer;
