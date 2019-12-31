import React from 'react';
import * as action from '../actions';
import { REQUEST, SUCCESS, ERROR } from '../constants';

import { message } from 'antd';

const initialState = {
    response: {},
    fetching: false,
    errors: null
};

const reducer = (state, action) => {
    switch (action.type) {
        case REQUEST: {
            return {
                ...state,
                fetching: true
            }
        }
        case SUCCESS: {
            return {
                response: action.payload,
                fetching: false,
                errors: null
            }
        }
        case ERROR: {
            return {
                ...state,
                fetching: false,
                errors: action.payload
            }
        }
    }
};

const useFetch = func => {
    const [state, dispatch] = React.useReducer(reducer, initialState);

    const trigger = args => {
        const { redirect, ...rest } = args;

        dispatch(action.request());

        return func(rest)
            .then(data => {
                setTimeout(() => dispatch(action.success(data)), 1000)
            })
            .catch(errors => {
                dispatch(action.error(errors));
                message.error(errors.message);
            });
    };

    return [state, trigger];
}

export default useFetch;