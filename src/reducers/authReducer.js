import {LOGIN_ACTION, SIGN_IN, SIGN_IN_FAIL, SIGN_IN_SUCCESS} from "../types/authTypes";

const initialState = {
    isLoggedIn: false,
    profile: {
        id: 1,
        firstname: 'Hafid',
        lastname: 'Ait oubouhou',
        email: 'hafid.aitoubouhou@gmail.com',
        phone: '0798897665',
        username: 'hafid',
        password: 'hafid123',
        role: 'ROLE_ADMIN',
        status: 'active'
    },
    loading: false
};

export default function authReducer(state = initialState, {type, payload}) {
    switch (type) {
        case LOGIN_ACTION:
            return {
                ...state,
                isLoggedIn: payload
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
                profile: payload
            }
        case SIGN_IN_FAIL:
            return {
                ...state,
                loading: false,
                profile: null
            }
        default:
            return state;
    }
}
