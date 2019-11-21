/*
    Headers:
    - content-type
    - authorization
*/

// for patch + '/3'
const url = 'https://jsonplaceholder.typicode.com/users';

// fetch(url, [options])

// Promise.race([promise1, promise2]);

/*
    fetch(url, {
        method: {{ 'GET', 'POST', 'PATCH', 'DELETE' }},
        headers: {},
        body: {JSON} // for 'POST' or 'PATCH'
    })
*/

const methods = ['GET', 'POST', 'PATCH', 'DELETE'];

const create = method => (url, options = {}) => {
    return fetch(url, {
        method,
        ...options
    }).then(res => res.json()).then(json => console.log(`method: ${method}`, json));
}

const request = () => {
    return methods.reduce((acc, method) => {
        return {
            ...acc,
            [method.toLocaleLowerCase()]: create(method)
        }
    }, {});
};

const api = request();

// api.get(url)
// api.post(url, {
//     headers: {
//         "Content-Type": "application/json; charset=utf-8"
//     },
//     body: JSON.stringify({
//         username: 'Elon Musk',
//         email: 'elonmusk@gmail.com'
//     })
// })

export default api;