import { useState, useCallback, useEffect } from "react";
import useLocalStorage from './utils/useLocalStorage';

const useAuth = () => {
    const storage = useLocalStorage('token');

    const [isAuth, setIsAuth] = useState(Boolean(storage.value));

    const login = useCallback(tk => {
        console.log('call login function', tk);
        storage.set(tk.token);
        setIsAuth(true);
    })

    const logout = useCallback(() => {
        console.log('call logout function');
        storage.remove();
        setIsAuth(false);
    })

    return { isAuth, login, logout }
}

export default useAuth;