import { REQUEST, SUCCESS, ERROR } from '../constants';

// TODO: dynamic inital state
export const initialState = {
    response: [],
    fetching: true,
    errors: null
};

export const reducer = (state, action) => {
    switch (action.type) {
        case REQUEST: {
            return {
                ...state,
                // fetching: true
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
        default: {
            return state;
        }
    }
};
