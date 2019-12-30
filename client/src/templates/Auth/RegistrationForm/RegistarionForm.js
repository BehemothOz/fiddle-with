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
    }).then(res => {
        if (res.status === 200) {
            return bag.props.history.push('/')
        };
    });
};

const displayName = 'RegistrationForm';

export default withFormik({
    mapPropsToValues,
    handleSubmit,
    validationSchema,
    displayName
})(View);