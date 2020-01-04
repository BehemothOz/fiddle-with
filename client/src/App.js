import React from 'react';
import { Switch, Route } from 'react-router';
import AuthTemplate from './templates/AuthTemplate';
import BaseTemplate from './templates/BaseTemplate';

const App = () => {
    console.count('<APP /> RENDER');
    return (
        <Switch>
            <Route path="/home" component={BaseTemplate} />
            <Route path="/" component={AuthTemplate} />
        </Switch>
    );
}

export default App;
