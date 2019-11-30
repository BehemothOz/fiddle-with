import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Icon } from 'antd';
import { Button, TextField, FormItem } from '../../../shared';
import { USERNAME, EMAIL, PASSWORD } from '../../../constants/auth';
import styles from './styles.module.scss';

const RegistarionForm = props => {
    const { handleSubmit } = props;

    return (
        <Form onSubmit={handleSubmit} autoComplete="off">
            <input autoComplete="off" name="hidden" type="text" className={styles.hidden}></input>
            <FormItem
                name={USERNAME}
                component={TextField}
                prefix={<Icon type="user" className={styles.iconInput} />}
                placeholder="Username"
            />
            <FormItem
                name={EMAIL}
                component={TextField}
                prefix={<Icon type="mail" className={styles.iconInput} />}
                placeholder="Email"
            />
            <FormItem
                name={PASSWORD}
                type="password"
                component={TextField}
                prefix={<Icon type="lock" className={styles.iconInput} />}
                placeholder="Password"
                autoComplete="new-password"
            />
            {/* <Form.Item>
                <Input
                    prefix={<Icon type="unlock" className={styles.iconInput} />}
                    placeholder="Re-password"
                />
            </Form.Item> */}
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