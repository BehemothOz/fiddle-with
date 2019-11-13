import React from 'react';
import { Switch, Route } from 'react-router';
import Auth from './templates/Auth';
import Home from './templates/Home/Home';

const App = () => (
    <Switch>
        <Route path="/home" component={Home} />
        <Route path="/" component={Auth} />
    </Switch>
)

export default App;
