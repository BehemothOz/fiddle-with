import React, { useContext } from 'react';
// import { AuthStateContext } from './contexts/AuthContext';
import getRoutes from './routes';

const App = () => {
    console.count('<APP /> RENDER');

    // const isAuth = useContext(AuthStateContext);
    // console.log('isAuth', isAuth);
    // const routes = getRoutes(isAuth);
    const routes = getRoutes(false);

    return routes;
}

export default App;
