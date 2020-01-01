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

const useAsync = func => {
    const [state, dispatch] = React.useReducer(reducer, initialState);

    const trigger = args => {
        const { onSuccess, onError, ...rest } = args;

        dispatch(action.request());

        return func(rest)
            .then(response => {
                dispatch(action.success(response))

                if (onSuccess) onSuccess(response);
            })
            .catch(error => {
                dispatch(action.error(error));

                if (onError) onError(error);

                throw error;
            });
    }

    return [state, trigger];
}

export default useAsync;