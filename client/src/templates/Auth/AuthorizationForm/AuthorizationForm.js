import { withFormik } from 'formik';
import api from '../../../api';
import validationSchema from './validation';
import { EMAIL, PASSWORD } from '../../../constants/auth';
import View from './View';

const mapPropsToValues = () => ({
    [EMAIL]: '',
    [PASSWORD]: ''
});

const handleSubmit = (values, bag) => {
    api.post('/login', {
        body: JSON.stringify(values)
    });
};

const displayName = 'AuthorizationForm';

export default withFormik({
    mapPropsToValues,
    handleSubmit,
    validationSchema,
    displayName
})(View);