import React from 'react';
import { useField } from 'formik';
import MuiTextField from '@material-ui/core/TextField';

const TextField = props => {
    const { name, ...rest } = props;
    const [field] = useField(props.name);

    return <MuiTextField {...field} {...rest} fullWidth />
}

export default TextField;