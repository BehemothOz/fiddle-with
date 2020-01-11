import { useState, useCallback } from "react";

const useAuth = () => {
    const [isAuth, setIsAuth] = useState(false);

    const login = useCallback(tk => {
        console.log('call login function', tk);
        setIsAuth(true);
    })

    const logout = useCallback(() => {
        console.log('call logout function');
        setIsAuth(false);
    })

    return {
        isAuth,
        login,
        logout
    }
}

export default useAuth;