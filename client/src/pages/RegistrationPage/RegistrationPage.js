import React, { useCallback } from 'react';
import RegistrationForm from './components/RegistrationForm';
import RegistrationComplete from './components/RegistrationComplete';
import useSubmit from '../../hooks/async/useSubmit';
import AuthTemplate from '../../templates/AuthTemplate';
import { REGISTRATION } from '../../api/keys';

const RegistrationPage = () => {
    console.count('<RegistrationPage /> RENDER');

    const [complete, setComplete] = React.useState(false);

    const handleSubmitSuccess = useCallback(() => {
        console.log('Success submit form!');
        setComplete(true);
    }, []);

    const [state, submit] = useSubmit({ key: REGISTRATION });

    if (!complete) {
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