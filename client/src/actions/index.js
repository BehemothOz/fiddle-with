import { REQUEST, SUCCESS, ERROR } from '../constants';

export const request = () => ({
    type: REQUEST
});

export const success = data => ({
    type: SUCCESS,
    payload: data
});

export const error = errors => ({
    type: ERROR,
    payload: errors
});
