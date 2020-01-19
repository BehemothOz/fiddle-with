import { withFormik } from 'formik';
// import validationSchema from './validation';
// import { WORD, TRANSFER } from '../../../../constants/dictionary';
import View from './View';

const mapPropsToValues = () => ({
    word: '',
    transfer: ''
});

const handleSubmit = (values, bag) => {
    bag.props.onSubmit({
        body: values,
        formikBag: bag,
        useStatus: true,
        onSuccess: () => {
            // bag.props.onSubmitSuccess
            bag.setSubmitting(false);
        }
    });
};

const displayName = 'RegistrationForm';

export default withFormik({
    mapPropsToValues,
    handleSubmit,
    // validationSchema,
    displayName
})(View);