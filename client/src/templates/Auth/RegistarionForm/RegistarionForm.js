import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Icon, Input } from 'antd';
import { Button } from '../../../shared';
import styles from './styles.module.scss';

const RegistarionForm = () => {
    const handleSubmit = () => {};

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Item hasFeedback>
                <Input
                    prefix={<Icon type="user" className={styles.iconInput} />}
                    placeholder="Username"
                />
            </Form.Item>
            <Form.Item>
                <Input
                    prefix={<Icon type="mail" className={styles.iconInput} />}
                    placeholder="Email"
                />
            </Form.Item>
            <Form.Item>
                <Input
                    prefix={<Icon type="lock" className={styles.iconInput} />}
                    placeholder="Password"
                />
            </Form.Item>
            <Form.Item>
                <Input
                    prefix={<Icon type="unlock" className={styles.iconInput} />}
                    placeholder="Re-password"
                />
            </Form.Item>
            <div className={styles.buttons}>
                <Button type="primary" htmlType="submit" className={styles.loginButton} block>
                    Registration
                </Button>
                <Link to="/" className={styles.link}>Cancel</Link>
            </div>
        </Form>
    )
}

export default RegistarionForm;