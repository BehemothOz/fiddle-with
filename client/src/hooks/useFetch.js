import React from 'react';
import * as action from '../actions';
import { REQUEST, SUCCESS, ERROR } from '../constants';

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
                fetching: true,
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

    const trigger = (...args) => {
        dispatch(action.request());

        return func(...args)
            .then(data => dispatch(action.success(data)))
            .catch(errors => dispatch(action.error(errors)));
    };

    return [state, trigger];
}

export default useFetch;