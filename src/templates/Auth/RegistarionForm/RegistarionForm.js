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
                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="Username"
                />
            </Form.Item>
            <Form.Item>
                <Input
                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="Email"
                />
            </Form.Item>
            <Form.Item>
                <Input
                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="Password"
                />
            </Form.Item>
            <Form.Item>
                <Input
                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="Re-password"
                />
            </Form.Item>
            <div className={styles.actions}>
                <Button type="primary" htmlType="submit" className={styles.loginButton} block>
                    Registration
                </Button>
                <Link to="/">Cancel</Link>
            </div>
        </Form>
    )
}

export default RegistarionForm;