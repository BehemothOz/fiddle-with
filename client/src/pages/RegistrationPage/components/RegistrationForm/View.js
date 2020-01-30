import React from 'react';
import { Form } from 'formik';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { TextField, FormItem } from '../../../../shared';
import { USERNAME, EMAIL, PASSWORD } from '../../../../constants/auth';
import useStyles from './styles';

const RegistrationForm = props => {
    const styles = useStyles();
    const { handleSubmit, isSubmitting } = props;

    return (
        <Grid container spacing={2} component={Form} onSubmit={handleSubmit} autoComplete="off">
            <input autoComplete="off" name="hidden" type="text" className={styles.hidden}></input>
            <Grid item xs={12}>
                <FormItem
                    name={USERNAME}
                    component={TextField}
                    label="Username"
                    helperText="Least 2 characters"
                    disabled={isSubmitting}
                />
            </Grid>
            <Grid item xs={12}>
                <FormItem
                    name={EMAIL}
                    component={TextField}
                    label="Email"
                    helperText="Example, mail@mail.com"
                    disabled={isSubmitting}
                />
            </Grid>
            <Grid item xs={12}>
                <FormItem
                    name={PASSWORD}
                    type="password"
                    component={TextField}
                    label="Password"
                    autoComplete="new-password"
                    helperText="Least 2 characters"
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
                            Registration
                        </Button>
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            component={Link}
                            to="/"
                            size="small"
                            fullWidth
                        >
                            Cancel
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default RegistrationForm;