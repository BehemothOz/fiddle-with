import React from 'react';
import { Link } from 'react-router-dom';
import { Form } from 'formik';
import Button from '@material-ui/core/Button';
// import { Form, Icon } from 'antd';
import { FormItem, TextField } from '../../../../shared';
import { EMAIL, PASSWORD } from '../../../../constants/auth';
import styles from './styles.module.scss';

const AuthorizationForm = props => {
    const { handleSubmit } = props;

    return (
        <Form onSubmit={handleSubmit}>
            <FormItem
                name={EMAIL}
                component={TextField}
                placeholder="Username"
                autoComplete="username"
                helperText="la la la"
            />
            <FormItem
                name={PASSWORD}
                component={TextField}
                type="password"
                placeholder="Password"
                autoComplete="current-password"
                helperText="la la la"
            />
            <div className={styles.buttons}>
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
                <Button
                    component={Link}
                    to="/registration"
                    size="small"
                    fullWidth
                >
                    Registration
                </Button>
            </div>
        </Form>
    )
}

export default AuthorizationForm;