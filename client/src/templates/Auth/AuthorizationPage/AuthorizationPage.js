import React from 'react';
import AuthorizationForm from '../AuthorizationForm';
import useFetch from '../../../hooks/useFetch';
import api from '../../../api';

const AuthorizationPage = () => {
    const handleSubmit = options => {
        return api.post('/login', options);
    }

    const [state, trigger] = useFetch(handleSubmit)

    return <AuthorizationForm onSubmit={trigger} fetching={state.fetching} />
}

export default AuthorizationPage;