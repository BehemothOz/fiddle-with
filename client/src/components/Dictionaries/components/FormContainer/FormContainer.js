import React, { useCallback, useContext } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import Form from '../Form';
import Transition from '../Transition';
import useSubmit from '../../../../hooks/async/useSubmit';
import {
    DictionariesStateContext,
    DictionariesActionsContext
} from '../../../../contexts/DictionariesContext';
import { DICTIONARY_POST } from '../../../../api/keys';
import { EDIT } from '../../../../constants/mode';

const FormContainer = React.memo(props => {
    const { getDictionaries } = props;

    const { visible, params } = useContext(DictionariesStateContext);
    const actions = useContext(DictionariesActionsContext);

    const [state, submit] = useSubmit({ key: DICTIONARY_POST });

    const handleSubmitSuccess = useCallback(() => {
        actions.closeModal();
        getDictionaries();
    }, [actions, getDictionaries]);

    const { mode, values } = params;
    return (
        <Dialog
            open={visible}
            maxWidth="xs"
            onClose={actions.closeModal}
            TransitionComponent={Transition}
        >
            <DialogTitle>{`${mode === EDIT ? 'Update' : 'Create'} dictionaty`}</DialogTitle>
            <DialogContent>
                <Form
                    initialValue={values}
                    fetching={state.fetching}
                    onSubmit={submit}
                    onSubmitSuccess={handleSubmitSuccess}
                />
            </DialogContent>
        </Dialog>
    )
})

export default FormContainer;
