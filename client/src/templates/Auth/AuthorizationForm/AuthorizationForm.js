import { withFormik } from 'formik';
import validationSchema from './validation';
import { EMAIL, PASSWORD } from '../../../constants/auth';
import View from './View';

const mapPropsToValues = () => ({
    [EMAIL]: '',
    [PASSWORD]: ''
});

const handleSubmit = (values, bag) => {
    bag.props.onSubmit({
        body: JSON.stringify(values),
        redirect: '/home'
    })
};

const displayName = 'AuthorizationForm';

export default withFormik({
    mapPropsToValues,
    handleSubmit,
    validationSchema,
    displayName
})(View);