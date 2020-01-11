import React, { useCallback } from 'react';
import * as action from '../../actions';
import { REQUEST, SUCCESS, ERROR } from '../../constants';
import useLocalStorage from '../utils/useLocalStorage';

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

    const storage = useLocalStorage('token');

    // TODO: temporary solution
    const addAuthorizationHeader = useCallback(() => {
        if (!storage.value) return {};

        return {
            headers: {
                Authorization: storage.value
            },
        }
    }, [storage.value]);


    const trigger = args => {
        const { onSuccess, onError, ...rest } = args;

        const requestOptions = {
            ...addAuthorizationHeader(),
            ...rest
        }

        dispatch(action.request());

        return func(requestOptions)
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