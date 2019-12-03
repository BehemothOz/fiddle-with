import * as yup from 'yup';
import { EMAIL, PASSWORD } from '../../../constants/auth';

const validationSchema = yup.object().shape({
    [EMAIL]: yup.string().email().required(),
    [PASSWORD]: yup.string().required()
});

export default validationSchema;