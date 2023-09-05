import {
    ALERT,
    HISTORY_PUSH,
    LOGIN_ACTION,
    SIGN_IN,
    SIGN_IN_FAIL,
    SIGN_IN_SUCCESS,
    SIGN_UP,
    SIGN_UP_FAIL
} from "../types/authTypes";
import {store} from "../redux/store";
import {API} from "../apis";
import axios from "axios";

export const signUp = client => async dispatch => {

    dispatch({
        type: SIGN_UP
    });

    await axios.post(`${API}/clients/signup`, client)
        .then(response => {
            const {data: {success, message}} = response;
            if (success) {

                dispatch(setPath('signIn'));
                dispatch(alert({open: false, message}));

                setTimeout(() => {
                    dispatch(alert({open: undefined, message: undefined}));
                }, 5000);
            } else {
                dispatch(alert({open: true, message}));
                setTimeout(() => {
                    dispatch(alert({open: undefined, message: undefined}));
                }, 5000);
            }
        })
        .catch(() => {
            dispatch({
                type: SIGN_UP_FAIL
            });
        });
};

export const signIn = (payload) => async dispatch => {

    dispatch({
        type: SIGN_IN
    });

    await axios.post(`${API}/clients/login`, payload)
        .then(response => {
            if (response.data && response.data.success) {
                dispatch({
                    type: SIGN_IN_SUCCESS,
                    payload: response.data.connectedUser
                });
            }
        })
        .catch(() => {
            dispatch({
                type: SIGN_IN_FAIL
            });
        });
};

export const logout = () => async dispatch => {
    dispatch(setLoggedIn(false));
    window.location.pathname = '/';
};

export const setLoggedIn = (payload) => {
    return {
        type: LOGIN_ACTION,
        payload
    }
}
export const setPath = (payload) => {
    return {
        type: HISTORY_PUSH,
        payload
    }
}
export const alert = (payload) => {
    return {
        type: ALERT,
        payload
    }
}

export function getCurrentUser() {
    return store.getState().authReducer.profile;
}

export function hasAuthority(authorities) {
    const connectedUser = getCurrentUser();
    if (connectedUser === null || connectedUser === undefined) {
        return false;
    }

    if (!authorities.includes(connectedUser.role)) {
        return false;
    }

    return true;
}
