import { withFormik } from 'formik';
import View from './View';

const mapPropsToValues = () => ({
    email: '',
    password: ''
});

const handleSubmit = (values, bag) => {
    setTimeout(() => {
        console.info(JSON.stringify(values, null, 2));
        bag.setSubmitting(false);
    }, 1000);
};

const displayName = 'AuthorizationForm';

export default withFormik({
    mapPropsToValues,
    handleSubmit,
    displayName
})(View);