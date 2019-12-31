import React, { useCallback } from 'react';
import RegistrationForm from '../RegistrationForm';
import { useFetchForm } from '../../../hooks/useFetch';
import api from '../../../api';

const AuthorizationPage = () => {
    const handleSubmit = useCallback(options => {
        return api.post('/login', options);
    });

    const handleSubmitSuccess = useCallback(() => {
        console.log('Success submit form!');
    });

    const [state, submit] = useFetchForm(handleSubmit);

    return (
        <RegistrationForm
            fetching={state.fetching}
            onSubmit={submit}
            onSubmitSuccess={handleSubmitSuccess}
        />
    )
}

export default AuthorizationPage;