import React from 'react';
import { useField, useFormikContext } from 'formik';
import { Form } from 'antd';
import useValidateStatus from '../../hooks/useValidateStatus';

const FormItem = props => {
    const { name, component: Component, help, ...rest } = props;

    const [ field, meta ] = useField(name);

    const { status = {} } = useFormikContext();
    const { error, touched } = meta;

    const [ validateStatus, message ] = useValidateStatus(
        error,
        touched,
        status[name]
    );

    const helperText = help || message;

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
