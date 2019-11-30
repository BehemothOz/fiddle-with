import React from 'react';
import { useField } from 'formik';
import { Input } from 'antd';

const TextField = props => {
    const { name, ...rest } = props;
    const [field] = useField(props.name);

    return <Input {...field} {...rest} />
}

export default TextField;