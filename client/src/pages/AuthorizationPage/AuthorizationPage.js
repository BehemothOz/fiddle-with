import React, { useCallback } from 'react';
import AuthorizationForm from './components/AuthorizationForm';
import useSubmit from '../../hooks/async/useSubmit';
import api from '../../api';

const AuthorizationPage = props => {
    const handleSubmit = useCallback(options => {
        return api.post('/login', options);
    });

    const handleSubmitSuccess = useCallback(() => {
        props.history.push('/home');
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