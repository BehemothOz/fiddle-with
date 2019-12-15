import { withFormik } from 'formik';
import api from '../../../api';
import validationSchema from './validation';
import { USERNAME, EMAIL, PASSWORD } from '../../../constants/auth';
import View from './View';

const mapPropsToValues = () => ({
    [USERNAME]: '',
    [EMAIL]: '',
    [PASSWORD]: ''
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