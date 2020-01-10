import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import AuthTemplate from '../templates/AuthTemplate';
import BaseTemplate from '../templates/BaseTemplate';

const getRoutes = isAuth => {
    if (isAuth) {
        console.log('BaseTemplate')
        return (
            <Switch>
                <Route path="/home" component={BaseTemplate} exact />
                <Redirect to="/" />
            </Switch>
        )
    }

    console.log('AuthTemplate')
    return (
        <Switch>
            <Route component={AuthTemplate} />
        </Switch>
    )
}

export default getRoutes;