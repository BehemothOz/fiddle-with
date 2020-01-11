import React, { useContext } from 'react';
import { AuthStateContext } from './contexts/AuthContext';
import getRoutes from './routes';

const App = () => {
    console.count('<APP /> RENDER');

    const isAuth = useContext(AuthStateContext);
    console.log('isAuth', isAuth);
    const routes = getRoutes(isAuth);

    return (
        <div>
            {routes}
        </div>
    );
}

export default App;
