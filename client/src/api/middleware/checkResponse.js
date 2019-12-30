import createError from '../utils/createError';

const checkResponse = response => {
    if (response.ok) {
        return response.body;
    }

    throw createError(response);
};

export default checkResponse;