import { withFormik } from 'formik';
import validationSchema from './validation';
import { USERNAME, EMAIL, PASSWORD } from '../../../../constants/auth';
import View from './View';

const mapPropsToValues = () => ({
    [USERNAME]: '',
    [EMAIL]: '',
    [PASSWORD]: ''
});

const handleSubmit = (values, bag) => {
    bag.props.onSubmit({
        body: values,
        formikBag: bag,
        useStatus: true,
        onSuccess: bag.props.onSubmitSuccess
    })
};

const displayName = 'RegistrationForm';

export default withFormik({
    mapPropsToValues,
    handleSubmit,
    validationSchema,
    displayName
})(View);