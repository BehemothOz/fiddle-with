import { request } from '../core';

const createMethods = methods => {
    return methods.reduce((acc, method) => {
        return {
            ...acc,
            [method.toLocaleLowerCase()]: request(method)
        }
    }, {});
};

export default createMethods;