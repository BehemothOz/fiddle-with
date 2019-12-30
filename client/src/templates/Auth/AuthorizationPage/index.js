import React from 'react';
import AuthorizationForm from '../AuthorizationForm';
import useFetch from '../../../hooks/useFetch';
import api from '../../../api';

const AuthorizationPage = () => {
    const handleSubmit = options => {
        console.log(10000000, options);
        return api.post('/login', options);
    }

    const [state, trigger] = useFetch(handleSubmit)

    console.log(state);

    return <AuthorizationForm onSubmit={trigger} />
}

export default AuthorizationPage;