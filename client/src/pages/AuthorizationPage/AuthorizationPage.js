import React, { useCallback, useContext } from 'react';
import AuthorizationForm from './components/AuthorizationForm';
import useSubmit from '../../hooks/async/useSubmit';
import api from '../../api';
import { AuthActionsContext } from '../../contexts/AuthContext';
import AuthTemplate from '../../templates/AuthTemplate';

const AuthorizationPage = () => {
    console.count('<AuthorizationPage /> RENDER');

    const actions = useContext(AuthActionsContext);

    const handleSubmit = useCallback(options => {
        return api.post('/login', options);
    }, []);

    const handleSubmitSuccess = useCallback((response) => {
        console.log('handleSubmitSuccess!');
        actions.login(response);
    }, [actions]);

    const [state, submit] = useSubmit(handleSubmit);

    return (
        <AuthTemplate>
            <AuthorizationForm
                fetching={state.fetching}
                onSubmit={submit}
                onSubmitSuccess={handleSubmitSuccess}
            />
        </AuthTemplate>
    )
}

export default AuthorizationPage;