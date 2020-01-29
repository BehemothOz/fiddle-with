import React from 'react';
import PropTypes from 'prop-types';
import { useField } from 'formik';
import MuiTextField from '@material-ui/core/TextField';

const TextField = props => {
    const { name, error, helperText, ...rest } = props;
    const [field] = useField(props.name);

    return (
        <MuiTextField
            {...field}
            {...rest}
            error={error}
            helperText={helperText}
            fullWidth
        />
    )
}

TextField.defaultProps = {
    error: false,
    helperText: ''
}

TextField.propTypes = {
    name: PropTypes.string.isRequired,
    error: PropTypes.bool,
    helperText: PropTypes.string
}

export default TextField;