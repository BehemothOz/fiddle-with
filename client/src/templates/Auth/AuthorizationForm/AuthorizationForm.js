import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Icon, Input } from 'antd';
import { Button } from '../../../shared';
import styles from './styles.module.scss';

const AuthorizationForm = () => {
    const handleSubmit = () => {};

    const post = () => {
        fetch('http://localhost:4444/registration', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({ name: 'Name', email: 'email@mail.com', password: '1234' })
        }).then(r => console.log(r))
    }

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
                <Button type="primary" onClick={post} className={styles.loginButton} block>
                    Log in
                </Button>
                <Link to="/registration" className={styles.link}>Registration</Link>
                <Link to="/home" className={styles.link}>temp home</Link>
            </div>
        </Form>
    )
}

export default AuthorizationForm;