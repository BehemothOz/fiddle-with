import React from 'react';
import { Switch, Route, useRouteMatch, Redirect } from 'react-router';
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
                <>
                    <Route path={path} component={AuthorizationPage} exact />
                    <Route path='/registration' component={RegistrationPage} exact />
                    <Redirect to="/" />
                </>
            </Paper>
        </FullHeight>
    )
}

export default Auth;