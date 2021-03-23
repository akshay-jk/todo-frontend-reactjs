import { LOG_IN, LOG_OUT, SIGN_UP, TOGGLE_VIEW } from './todoActionTypes';

const intialState = {
    isAuthenticated: false,
    toggleView: false,
    todoList: []
};

export default function (state = intialState, action) {
    switch (action.type) {
        case LOG_IN: {
            return {
                ...state,
                isAuthenticated: true
            }
        }
        case LOG_OUT: {
            return {
                ...state,
                isAuthenticated: false
            }
        }
        case TOGGLE_VIEW: {
            return {
                ...state,
                toggleView: !state.toggleView
            }
        }
        default:
            return state;
    }
}