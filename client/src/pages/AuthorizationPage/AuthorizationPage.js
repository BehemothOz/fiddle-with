import React, { useCallback, useContext } from 'react';
import AuthorizationForm from './components/AuthorizationForm';
import useSubmit from '../../hooks/async/useSubmit';
import api from '../../api';
import { AuthActionsContext } from '../../contexts/AuthContext';

const AuthorizationPage = props => {
    const actions = useContext(AuthActionsContext);

    const handleSubmit = useCallback(options => {
        return api.post('/login', options);
    });

    const handleSubmitSuccess = useCallback((response) => {
        // props.history.push('/home');
        console.log('handleSubmitSuccess!');
        actions.login(response);
    });

    const [state, submit] = useSubmit(handleSubmit);

    return (
        <AuthorizationForm
            fetching={state.fetching}
            onSubmit={submit}
            onSubmitSuccess={handleSubmitSuccess}
        />
    )
}

export default AuthorizationPage;