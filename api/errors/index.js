// const messages = {
//     400: 'Bad request',
//     401: 'Unauthorized',
//     404: 'Not found',
//     500: 'Internal server error'
// }

/*
    Создать 2 промежуточных обработчиков
    1. Обработчик ошибок валидации
    2. Обрабочтик остальных ошибок
*/

const formatValidationErrors = error => {
    const { details } = error;

    return details.reduce((acc, item) => {
        const { label } = item.context;
        return {...acc, [label]: item.message }
    }, {});
}

const errorHandler = (error, req, res, next) => {
    const { status, type = '', body } = error;

    if (status === 400 && type === 'validation') {
        return res.status(status).json({
            message: 'Validation error',
            fields: formatValidationErrors(body)
        });
    }

    if (status === 400) {
        return res.status(status).json({ message: body });
    }

    return res.status(500).json({ message: body });
}

module.exports = errorHandler;