import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Icon, FormItem } from 'antd';
import { Button, TextField } from '../../../shared';
import api from '../../../api/index'
import styles from './styles.module.scss';

const AuthorizationForm = props => {
    const { handleSubmit } = props;

    return (
        <Form onSubmit={handleSubmit}>
            <FormItem
                 name="email"
                prefix={<Icon type="user" className={styles.iconInput} />}
                placeholder="Username"
            />
            <FormItem
                name="password"
                type="password"
                prefix={<Icon type="lock" className={styles.iconInput} />}
                placeholder="Password"
            />
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