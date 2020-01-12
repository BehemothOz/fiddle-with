import checkResponse from './middleware/checkResponse';
import parseResponse from './middleware/parseResponse';
import abortableFetch from './utils/abortableFetch';
import { addHeaders, addBody } from './utils/enchancers';
import config from './config';

let timeoutId;

export const timeout = abort => new Promise(() => {
    timeoutId = setTimeout(abort, config.timeout);
});

export const request = method => (url, options = {}) => {
    console.log(url, options)
    const fetch = abortableFetch(`${config.url}${url}`, {
        method,
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            "Accept": 'application/json',
            ...addHeaders(options)
        },
        ...addBody(options)
    });

    return Promise.race([
        fetch.start()
            .then(parseResponse)
            .then(checkResponse),
        timeout(fetch.abort)
    ])
    .finally(() => clearTimeout(timeoutId));
};
