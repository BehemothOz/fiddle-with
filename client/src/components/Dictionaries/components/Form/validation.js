import * as yup from 'yup';
import { TITLE, DESCRIPTION } from '../../../../constants/dictionaries';

const validationSchema = yup.object().shape({
    [TITLE]: yup.string().min(2, 'Title must be at least 2 characters').required('Title is a required field'),
});

export default validationSchema;