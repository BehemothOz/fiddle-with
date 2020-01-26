import { withFormik } from 'formik';
import validationSchema from './validation';
import { TITLE, DESCRIPTION } from '../../../../constants/dictionaries';
import View from './View';

const mapPropsToValues = ({ initialValue }) => {
    const { title, description } = initialValue;
    return {
        [TITLE]: title ? title : '',
        [DESCRIPTION]: description ? description : ''
    }
};

const handleSubmit = (values, bag) => {
    bag.props.onSubmit({
        body: values,
        formikBag: bag,
        useStatus: true,
        onSuccess: () => {
            bag.props.onSubmitSuccess();
            bag.setSubmitting(false);
        }
    });
};

const displayName = 'CreateDictionariesForm';

export default withFormik({
    mapPropsToValues,
    handleSubmit,
    validationSchema,
    displayName
})(View);