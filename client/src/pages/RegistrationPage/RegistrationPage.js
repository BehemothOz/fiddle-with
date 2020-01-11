import React, { useCallback } from 'react';
import RegistrationForm from './components/RegistrationForm';
import RegistrationComplete from './components/RegistrationComplete';
import useSubmit from '../../hooks/async/useSubmit';
import api from '../../api';
import AuthTemplate from '../../templates/AuthTemplate';

const RegistrationPage = () => {
    console.count('<RegistrationPage /> RENDER');

    const [complete, setComplete] = React.useState(false);

    const handleSubmit = useCallback(options => {
        return api.post('/registration', options);
    });

    const handleSubmitSuccess = useCallback(() => {
        console.log('Success submit form!');
        setComplete(true);
    });

    const [state, submit] = useSubmit(handleSubmit);

    if (complete) {
        return (
            <AuthTemplate>
                <RegistrationComplete />
            </AuthTemplate>
        )
    }

    return (
        <AuthTemplate>
            <RegistrationForm
                fetching={state.fetching}
                onSubmit={submit}
                onSubmitSuccess={handleSubmitSuccess}
            />
        </AuthTemplate>
    )
}

export default RegistrationPage;