import React from 'react';
import { useField, useFormikContext } from 'formik';
import useValidateStatus from '../../hooks/useValidateStatus';

const FormItem = props => {
    const { name, component: Component, helperText, ...rest } = props;
    const [ field, meta ] = useField(name);

    const { status = {} } = useFormikContext();
    const { error, touched } = meta;

    const [ hasError, message ] = useValidateStatus(
        error,
        touched,
        status[name]
    );

    const help = message || helperText;

    return <Component {...field} {...rest} helperText={help} error={hasError} />
}

export default FormItem;
