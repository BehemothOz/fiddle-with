// const messages = {
//     400: 'Bad request',
//     401: 'Unauthorized',
//     404: 'Not found',
//     500: 'Internal server error'
// }

const globalHandlerError = (error, req, res, next) => {
    const { status, body } = error;
    return res.status(status).json({ message: body });
}

module.exports = globalHandlerError;