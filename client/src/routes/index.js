import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import AuthorizationPage from '../pages/AuthorizationPage';
import RegistrationPage from '../pages/RegistrationPage';
import HomePage from '../pages/HomePage';

const getRoutes = isAuth => {
    if (isAuth) {
        console.log('SELECT ROUTES: BaseTemplate')
        return (
            <Switch>
                <Route path="/home" component={HomePage} exact />
                <Redirect to="/home" />
            </Switch>
        )
    }

    console.log('SELECT ROUTES: AuthTemplate')
    return (
        <Switch>
            <Route path="/" component={AuthorizationPage} exact />
            <Route path="/registration" component={RegistrationPage} exact />
            <Redirect to="/" />
        </Switch>
    )
}

export default getRoutes;