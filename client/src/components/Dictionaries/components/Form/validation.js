import * as yup from 'yup';
import { TITLE, DESCRIPTION } from '../../../../constants/dictionaries';

const validationSchema = yup.object().shape({
    [TITLE]: yup.string().required(),
    [DESCRIPTION]: yup.string().required()
});

export default validationSchema;