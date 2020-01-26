export const initialState = {
    response: null,
    fetching: false,
    errors: null
}

export const arrayState = {
    response: [],
    fetching: true,
    errors: null
};

export const objectState = {
    response: {},
    fetching: true,
    errors: null
};

export const authState = {
    ...objectState,
    fetching: false,
}