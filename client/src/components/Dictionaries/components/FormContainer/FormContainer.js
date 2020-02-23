import React, { useCallback, useContext } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import Button from '@material-ui/core/Button';
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
            onClose={actions.closeModal}
            TransitionComponent={Transition}
            fullScreen
        >
            <DialogTitle>{`${mode === EDIT ? 'Update' : 'Create'} dictionaty`}</DialogTitle>
            <DialogContent>
                <Form
                    initialValue={values}
                    fetching={state.fetching}
                    onSubmit={submit}
                    onSubmitSuccess={handleSubmitSuccess}
                />
                <Button onClick={actions.closeModal}>Close</Button>
            </DialogContent>
        </Dialog>
    )
})

export default FormContainer;
