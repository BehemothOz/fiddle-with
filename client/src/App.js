import { useContext } from 'react';
import { AuthStateContext } from './contexts/AuthContext';
import getRoutes from './routes';

const App = () => {
    console.count('<APP /> RENDER');

    const isAuth = useContext(AuthStateContext);
    const routes = getRoutes(isAuth);

    return routes;
}

export default App;
