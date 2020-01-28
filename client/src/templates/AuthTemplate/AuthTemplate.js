import React from 'react';
import { FullHeight, Paper, Logo } from '../../shared';
import useStyles from './styles';

const AuthTemplate = props => {
    console.count('<AuthTemplate /> RENDER');
    const styles = useStyles();

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