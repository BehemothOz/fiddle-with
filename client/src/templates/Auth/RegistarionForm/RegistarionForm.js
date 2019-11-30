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
    console.log(api)

    api.post('/registration', {
        body: JSON.stringify(values)
    });

    // setTimeout(() => {
    //     console.info(JSON.stringify(values, null, 2));
    //     bag.setSubmitting(false);
    // }, 0);
};

const displayName = 'RegistrationForm';

export default withFormik({
    mapPropsToValues,
    handleSubmit,
    validationSchema,
    displayName
})(View);