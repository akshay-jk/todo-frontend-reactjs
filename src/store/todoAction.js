import { LOG_IN, LOG_OUT, SIGN_UP, TOGGLE_VIEW } from './todoActionTypes';

export const logIn = () => ({
    type: LOG_IN
});

export const logOut = () => ({
    type: LOG_OUT
})

export const signUp = credentials => ({
    type: SIGN_UP,
    payload: {
        credentials
    }
});

export const toggleView = () => ({
    type: TOGGLE_VIEW
})