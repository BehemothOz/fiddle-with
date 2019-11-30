const formatValidationErrors = error => {
    const { details } = error;
    return details.reduce((acc, { context, message }) => ({...acc, [context.label]: message }), {});
}

const validationHandlerError = (error, req, res, next) => {
    const { type = '', body } = error;

    if (type === 'validation') {
        return res.status(400).json({
            message: 'Validation error',
            fields: formatValidationErrors(body)
        });
    }

    next(error);
}

module.exports = validationHandlerError;