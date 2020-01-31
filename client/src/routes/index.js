import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import AuthorizationPage from '../pages/AuthorizationPage';
import RegistrationPage from '../pages/RegistrationPage';
import HomePage from '../pages/HomePage';
import BaseTemplate from '../templates/BaseTemplate'

const getRoutes = isAuth => {
    if (isAuth) {
        console.log('SELECT ROUTES: BaseTemplate')
        return (
            <BaseTemplate>
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Redirect to="/home" />
                </Switch>
            </BaseTemplate>
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