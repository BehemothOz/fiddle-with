import React from 'react';
import { Link } from 'react-router-dom';
import { Form } from 'formik';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { FormItem, TextField } from '../../../../shared';
import { EMAIL, PASSWORD } from '../../../../constants/auth';

const AuthorizationForm = props => {
    const { handleSubmit, isSubmitting } = props;

    return (
        <Grid container component={Form} onSubmit={handleSubmit} spacing={2}>
            <Grid item xs={12}>
                <FormItem
                    name={EMAIL}
                    component={TextField}
                    label="Username"
                    autoComplete="username"
                    disabled={isSubmitting}
                />
            </Grid>
            <Grid item xs={12}>
                <FormItem
                    name={PASSWORD}
                    component={TextField}
                    type="password"
                    label="Password"
                    autoComplete="current-password"
                    disabled={isSubmitting}
                />
            </Grid>
            <Grid item xs={12}>
                <Grid container spacing={1}>
                    <Grid item xs={12}>
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            size="small"
                            disabled={isSubmitting}
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
                            disabled={isSubmitting}
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