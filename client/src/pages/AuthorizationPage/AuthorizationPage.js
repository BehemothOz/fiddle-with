import React, { useCallback, useContext } from 'react';
import AuthorizationForm from './components/AuthorizationForm';
import useSubmit from '../../hooks/async/useSubmit';
import AuthTemplate from '../../templates/AuthTemplate';
import { AuthActionsContext } from '../../contexts/AuthContext';
import { LOGIN } from '../../api/keys';

const AuthorizationPage = () => {
    const actions = useContext(AuthActionsContext);

    const handleSubmitSuccess = useCallback((response) => {
        console.log('handleSubmitSuccess!');
        actions.login(response);
    }, [actions]);

    const [state, submit] = useSubmit({ key: LOGIN });

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