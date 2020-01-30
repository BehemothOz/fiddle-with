import * as yup from 'yup';
import { USERNAME, EMAIL, PASSWORD } from '../../../../constants/auth';

const validationSchema = yup.object().shape({
    [USERNAME]: yup.string().min(2, 'Username must be at least 2 characters').required('Username is a required field'),
    [EMAIL]: yup.string().email().required('Email is a required field'),
    [PASSWORD]: yup.string().min(8, 'Password must be at least 8 characters').required('Password is a required field')
});

export default validationSchema;