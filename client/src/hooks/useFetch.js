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

export const useFetch = func => {
    const [state, dispatch] = React.useReducer(reducer, initialState);

    const trigger = args => {
        const { onSuccess, ...rest } = args;

        dispatch(action.request());

        return func(rest)
            .then(response => {
                console.log(10)
                dispatch(action.success(response));
                return response;
            })
            .then(data => {
                console.log(20)
                if (onSuccess) onSuccess(data);
            })
            .catch(errors => {
                console.log(30)
                dispatch(action.error(errors));
                message.error(errors.message);

                throw errors;
            })
    };

    return [state, trigger];
}

export const useFetchForm = func => {
    const [state, trigger] = useFetch(func);

    const submit = args => {
        const { formikBag, useStatus, ...rest } = args;

        return trigger(rest)
            .catch(errors => {
                if (useStatus) {
                    const { fields } = errors.body;
                    formikBag.setStatus(fields);
                }
            })
            .finally(() => formikBag.setSubmitting(false))
    }

    return [state, submit];
}
