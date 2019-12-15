import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Icon } from 'antd';
import { Button, TextField, FormItem } from '../../../shared';
import { EMAIL, PASSWORD } from '../../../constants/auth';
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
            />
            <FormItem
                name={PASSWORD}
                type="password"
                component={TextField}
                prefix={<Icon type="lock" className={styles.iconInput} />}
                placeholder="Password"
            />
            <div className={styles.buttons}>
                <Button type="primary" htmlType="submit" className={styles.loginButton} block>
                    Log in
                </Button>
                <Link to="/registration" className={styles.link}>Registration</Link>
                <Link to="/home" className={styles.link}>temp home</Link>
            </div>
        </Form>
    )
}

export default AuthorizationForm;