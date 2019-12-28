import config from './config';

const methods = ['GET', 'POST', 'PATCH', 'DELETE'];

const createError = response => {
    const { status, statusText, body } = response;
    const error = new Error(statusText);

    error.body = body;
    error.status = status;

    return error;
};

const parseResponse = response => {
    const { ok, status, statusText, headers } = response;
    return response.json().then(body => {
        return { ok, status, statusText, headers, body };
    });
};

const checkResponse = response => {
    if (response.ok) {
        console.log('response.ok')
        return response.body;
    }

    const error = createError(response);
    console.dir(error);
    throw error;
};

const create = method => (url, options = {}) => {
    return fetch(`${config.url}${url}`, {
        method,
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },
        ...options
    })
    .then(parseResponse)
    .then(checkResponse)
};

const request = () => {
    return methods.reduce((acc, method) => {
        return {
            ...acc,
            [method.toLocaleLowerCase()]: create(method)
        }
    }, {});
};

const api = request();

export default api;