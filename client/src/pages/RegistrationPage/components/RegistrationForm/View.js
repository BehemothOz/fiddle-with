import React from 'react';
import { Form } from 'formik';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { TextField, FormItem } from '../../../../shared';
import { USERNAME, EMAIL, PASSWORD } from '../../../../constants/auth';
import styles from './styles.module.scss';

const RegistrationForm = props => {
    const { handleSubmit, isSubmitting } = props;

    return (
        <Form onSubmit={handleSubmit} autoComplete="off">
            <input autoComplete="off" name="hidden" type="text" className={styles.hidden}></input>
            <FormItem
                name={USERNAME}
                component={TextField}
                placeholder="Username"
                disabled={isSubmitting}
            />
            <FormItem
                name={EMAIL}
                component={TextField}
                placeholder="Email"
                disabled={isSubmitting}
            />
            <FormItem
                name={PASSWORD}
                type="password"
                component={TextField}
                placeholder="Password"
                autoComplete="new-password"
                disabled={isSubmitting}
            />
            {/* <Form.Item>
                <Input
                    prefix={<Icon type="unlock" className={styles.iconInput} />}
                    placeholder="Re-password"
                />
            </Form.Item> */}
            <div className={styles.buttons}>
                <Button
                    className={styles.loginButton}
                    type="submit"
                    variant="contained"
                    color="primary"
                    size="small"
                    disabled={isSubmitting}
                    fullWidth
                >
                    Registration
                </Button>
                <Button
                    component={Link}
                    to="/"
                    size="small"
                    fullWidth
                >
                    Cancel
                </Button>
            </div>
        </Form>
    )
}

export default RegistrationForm;