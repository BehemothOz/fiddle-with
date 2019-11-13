import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Icon, Input } from 'antd';
import { Button } from '../../../shared';
import styles from './styles.module.scss';

const AuthorizationForm = () => {
    const handleSubmit = () => {};

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Item>
                <Input
                    prefix={<Icon type="user" className={styles.iconInput} />}
                    placeholder="Username"
                />
            </Form.Item>
            <Form.Item>
                <Input.Password
                    prefix={<Icon type="lock" className={styles.iconInput} />}
                    type="password"
                    placeholder="Password"
                />
            </Form.Item>
            <div className={styles.buttons}>
                <Button type="primary" htmlType="submit" className={styles.loginButton} block>
                    Log in
                </Button>
                <Link to="/registration" className={styles.link}>Registration</Link>
            </div>
        </Form>
    )
}

export default AuthorizationForm;