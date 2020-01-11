import React from 'react';
import { FullHeight, Paper, Logo } from '../../shared';
import styles from './styles.module.scss';

const AuthTemplate = props => {
    console.count('<AuthTemplate /> RENDER');
    return (
        <FullHeight>
            <Paper className={styles.paper}>
                <div className={styles.logoContainer}>
                    <Logo />
                </div>
                {props.children}
            </Paper>
        </FullHeight>
    )
}

export default AuthTemplate;