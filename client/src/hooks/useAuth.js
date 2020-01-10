import { useState } from "react";
import { useHistory } from "react-router-dom";

const useAuth = () => {
    const [isAuth, setIsAuth] = useState(false);
    const history = useHistory();

    const login = tk => {
        console.log(tk);
        history.push('/home');
    }

    return {
        isAuth,
        login,
        logout: () => setIsAuth(false)
    }
}

export default useAuth;