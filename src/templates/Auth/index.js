import React from 'react';
import { Switch, Route } from 'react-router';
import { FullHeight, Paper, Logo } from '../../shared';
import AuthorizationForm from './AuthorizationForm';
import RegistarionForm from './RegistarionForm';
import styles from './styles.module.scss';

const Auth = () => {
    return (
        <FullHeight>
            <Paper className={styles.paper}>
                <div className={styles.logoContainer}>
                    <Logo />
                </div>
                <Switch>
                    <Route exact path="/" component={AuthorizationForm} />
                    <Route path="/registration" component={RegistarionForm} />
                </Switch>
            </Paper>
        </FullHeight>
    )
}

export default Auth;