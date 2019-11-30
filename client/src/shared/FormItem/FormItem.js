import React from 'react';
import { useField } from 'formik';
import { Form } from 'antd';

const SUCCESS = 'success';
const ERROR = 'error';
const DEFAULT = '';

const getValidateStatus = (error, touched) => {
    if (!touched) return DEFAULT;
    if (error && touched) return ERROR;

    return SUCCESS;
}

const FormItem = props => {
    const [field, meta] = useField(props.name);

    const { name, component: Component, help, ...rest } = props;
    const { error, touched } = meta;

    const hasError = error && touched;
    const errorMessage = hasError && error;
    const validateStatus = getValidateStatus(error, touched);

    const helperText = help || errorMessage;

    return (
        <Form.Item
            hasFeedback
            validateStatus={validateStatus}
            help={helperText}
        >
            <Component {...field} {...rest} />
        </Form.Item>
    )
}

export default FormItem;
