import React, { useCallback } from 'react';
import * as action from '../../actions';
import useLocalStorage from '../utils/useLocalStorage';
import dictionary from '../../api/dictionary';
import { reducer, initialState } from '../../reducers';

const useAsync = options => {
    const { key } = options;
    if (!key) throw Error('key is required field for request');

    const { method, url } = dictionary[key];
    if (!method || !url) throw Error('add method and url to dictionary object');

    const storage = useLocalStorage('token');

    const [state, dispatch] = React.useReducer(reducer, initialState);

    // TODO: temporary solution
    const addAuthorizationHeader = useCallback(() => {
        if (!storage.value) return {};

        return {
            headers: {
                Authorization: storage.value
            },
        }
    }, [storage.value]);


    const trigger = useCallback((args = {}) => {
        console.log('useAsync args', args);
        const { onSuccess, onError, ...rest } = args;

        const requestOptions = {
            ...addAuthorizationHeader(),
            ...rest
        }
        console.log('requestOptions', requestOptions);
        dispatch(action.request());

        return method(url, requestOptions)
            .then(response => {
                dispatch(action.success(response))

                if (onSuccess) onSuccess(response);
            })
            .catch(error => {
                dispatch(action.error(error));

                if (onError) onError(error);

                throw error;
            });
    }, [dispatch, addAuthorizationHeader, method]);

    return [state, trigger];
}

export default useAsync;