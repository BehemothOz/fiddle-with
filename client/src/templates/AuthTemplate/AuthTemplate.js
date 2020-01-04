import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router';
import { FullHeight, Paper, Logo } from '../../shared';
import AuthorizationPage from '../../pages/AuthorizationPage';
import RegistrationPage from '../../pages/RegistrationPage';
import styles from './styles.module.scss';

const Auth = () => {
    const { path } = useRouteMatch();

    return (
        <FullHeight>
            <Paper className={styles.paper}>
                <div className={styles.logoContainer}>
                    <Logo />
                </div>
                <Switch>
                    <Route exact path={path} component={AuthorizationPage} />
                    <Route path='/registration' component={RegistrationPage} />
                </Switch>
            </Paper>
        </FullHeight>
    )
}

export default Auth;