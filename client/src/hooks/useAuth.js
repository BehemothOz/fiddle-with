import { useState, useCallback } from "react";
import { useHistory } from "react-router-dom";

const useAuth = () => {
    const [isAuth, setIsAuth] = useState(false);
    const history = useHistory();

    const login = useCallback(tk => {
        console.log('call login function', tk);
        setIsAuth(true);

        // Temp: need route redirect (??)
        history.push('/home');
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