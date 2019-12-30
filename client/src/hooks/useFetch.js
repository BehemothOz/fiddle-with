import React from 'react';

const REQUEST = 'REQUEST';
const SUCCESS = 'SUCCESS';
const ERROR = 'ERROR';

const request = () => {
    return {
        type: REQUEST,
    }
}

const success = data => {
    return {
        type: 'SUCCESS',
        payload: data
    }
}

const error = errors => {
    return {
        type: 'ERROR',
        payload: errors
    }
}

const initialState = {
    response: {},
    fetching: false,
    errors: null
};

const reducer = (state, action) => {
    console.log('>>>>>>', state, action);
    switch (action.type) {
        case REQUEST: {
            return {
                ...state,
                fetching: true
            }
        }
        case SUCCESS: {
            return {
                fetching: true,
                response: action.payload,
                errors: {}
            }
        }
        case ERROR: {
            return {
                ...state,
                fetching: false,
                errors: action.errors
            }
        }
    }
}

const useFetch = (handler) => {
    const [state, dispatch] = React.useReducer(reducer, initialState);

    const trigger = (...args) => {
        // dispatch(actions.request());
        console.log(1, ...args)
        return handler(...args).then(a => console.log('done', a))
        .catch(error => {
            console.dir(error)
            console.log(error)
        });
    };

    return [state, trigger];
}

export default useFetch;