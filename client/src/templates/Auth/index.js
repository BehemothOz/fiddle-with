import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router';
import { FullHeight, Paper, Logo } from '../../shared';
import AuthorizationForm from './AuthorizationForm';
import RegistarionForm from './RegistarionForm';
import styles from './styles.module.scss';

const Auth = () => {
    console.log(useRouteMatch())
    let { path } = useRouteMatch();

    return (
        <FullHeight>
            <Paper className={styles.paper}>
                <div className={styles.logoContainer}>
                    <Logo />
                </div>
                <Switch>
                    <Route exact path={path} component={AuthorizationForm} />
                    <Route path='/registration' component={RegistarionForm} />
                </Switch>
            </Paper>
        </FullHeight>
    )
}

export default Auth;