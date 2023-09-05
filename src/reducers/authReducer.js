import {
    ALERT,
    HISTORY_PUSH,
    LOGIN_ACTION,
    SIGN_IN,
    SIGN_IN_FAIL,
    SIGN_IN_SUCCESS,
    SIGN_UP,
    SIGN_UP_FAIL,
    SIGN_UP_SUCCESS
} from "../types/authTypes";

const initialState = {
    isLoggedIn: false,
    path: 'signIn',
    alert: {
        open: undefined,
        message: undefined
    },
    profile: undefined,
    loading: false
};

export default function authReducer(state = initialState, {type, payload}) {
    switch (type) {
        case ALERT:
            return {
                ...state,
                alert: payload,
            }
        case HISTORY_PUSH:
            return {
                ...state,
                path: payload,
            }
        case LOGIN_ACTION:
            return {
                ...state,
                isLoggedIn: payload,
            }
        case SIGN_IN:
            return {
                ...state,
                loading: true
            }
        case SIGN_IN_SUCCESS:
            return {
                ...state,
                loading: false,
                isLoggedIn: true,
                profile: {...payload, role: payload.roles[0].roleName}
            }
        case SIGN_IN_FAIL:
            return {
                ...state,
                loading: false,
                isLoggedIn: false,
                profile: null
            }
        case SIGN_UP:
            return {
                ...state,
                loading: true
            }
        case SIGN_UP_SUCCESS:
            return {
                ...state,
                loading: false,
            }
        case SIGN_UP_FAIL:
            return {
                ...state,
                loading: false
            }
        default:
            return state;
    }
}
