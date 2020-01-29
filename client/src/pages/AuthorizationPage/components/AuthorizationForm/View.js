import React from 'react';
import { Link } from 'react-router-dom';
import { Form } from 'formik';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { FormItem, TextField } from '../../../../shared';
import { EMAIL, PASSWORD } from '../../../../constants/auth';
import styles from './styles.module.scss';

const AuthorizationForm = props => {
    const { handleSubmit } = props;

    return (
        <Grid container component={Form} onSubmit={handleSubmit} spacing={2}>
            <Grid item xs={12}>
                <FormItem
                    name={EMAIL}
                    component={TextField}
                    label="Username"
                    autoComplete="username"
                />
            </Grid>
            <Grid item xs={12}>
                <FormItem
                    name={PASSWORD}
                    component={TextField}
                    type="password"
                    label="Password"
                    autoComplete="current-password"
                />
            </Grid>
            <Grid item xs={12}>
                <Grid container spacing={1}>
                    <Grid item xs={12}>
                        <Button
                            className={styles.loginButton}
                            type="submit"
                            variant="contained"
                            color="primary"
                            size="small"
                            disabled={props.fetching}
                            fullWidth
                        >
                            Log in
                        </Button>
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            component={Link}
                            to="/registration"
                            size="small"
                            fullWidth
                        >
                            Registration
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default AuthorizationForm;