import { withFormik } from 'formik';
import api from '../../../api';
import validationSchema from './validation';
import View from './View';

const mapPropsToValues = () => ({
    username: '',
    email: '',
    password: ''
});

const handleSubmit = (values, bag) => {
    api.post('/registration', {
        body: JSON.stringify(values)
    });
};

const displayName = 'RegistrationForm';

export default withFormik({
    mapPropsToValues,
    handleSubmit,
    validationSchema,
    displayName
})(View);