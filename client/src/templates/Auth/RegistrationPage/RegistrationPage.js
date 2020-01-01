import React, { useCallback } from 'react';
import RegistrationForm from '../RegistrationForm';
import useSubmit from '../../../hooks/async/useSubmit';
import api from '../../../api';

const RegistrationPage = () => {
    const handleSubmit = useCallback(options => {
        return api.post('/registration', options);
    });

    const handleSubmitSuccess = useCallback(() => {
        console.log('Success submit form!');
    });

    const [state, submit] = useSubmit(handleSubmit);

    return (
        <RegistrationForm
            fetching={state.fetching}
            onSubmit={submit}
            onSubmitSuccess={handleSubmitSuccess}
        />
    )
}

export default RegistrationPage;