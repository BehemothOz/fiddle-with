import * as yup from 'yup';
import { USERNAME, EMAIL, PASSWORD } from '../../../../constants/auth';

const validationSchema = yup.object().shape({
    [USERNAME]: yup.string().required(),
    [EMAIL]: yup.string().email().required(),
    [PASSWORD]: yup.string().required()
});

export default validationSchema;