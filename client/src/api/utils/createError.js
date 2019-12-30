const createError = response => {
    const { status, statusText, body } = response;
    const error = new Error(statusText);

    error.body = body;
    error.status = status;

    return error;
};

export default createError;