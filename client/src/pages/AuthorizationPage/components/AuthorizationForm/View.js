import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Icon } from 'antd';
import { Button, TextField, FormItem } from '../../../../shared';
import { EMAIL, PASSWORD } from '../../../../constants/auth';
import styles from './styles.module.scss';

const AuthorizationForm = props => {
    const { handleSubmit } = props;

    return (
        <Form onSubmit={handleSubmit}>
            <FormItem
                name={EMAIL}
                component={TextField}
                prefix={<Icon type="user" className={styles.iconInput} />}
                placeholder="Username"
                autoComplete="username"
            />
            <FormItem
                name={PASSWORD}
                type="password"
                component={TextField}
                prefix={<Icon type="lock" className={styles.iconInput} />}
                placeholder="Password"
                autoComplete="current-password"
            />
            <div className={styles.buttons}>
                <Button
                    className={styles.loginButton}
                    type="primary"
                    htmlType="submit"
                    loading={props.fetching}
                    block
                >
                    Log in
                </Button>
                <Link to="/registration" className={styles.link}>Registration</Link>
            </div>
        </Form>
    )
}

export default AuthorizationForm;