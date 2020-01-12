import React, { useMemo } from 'react';
import useAuth from '../../hooks/useAuth';
import { AuthStateContext, AuthActionsContext } from '../../contexts/AuthContext';

const AuthProvider = props => {
    const { isAuth, login, logout } = useAuth();

    const actions = useMemo(() => ({
        login,
        logout
    }), [login, logout]);

    return (
        <AuthStateContext.Provider value={isAuth}>
            <AuthActionsContext.Provider value={actions}>
                {props.children}
            </AuthActionsContext.Provider>
        </AuthStateContext.Provider>
    )
}

export default AuthProvider;