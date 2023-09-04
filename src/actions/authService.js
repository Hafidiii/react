import {LOGIN_ACTION} from "../types/authTypes";
import {store} from "../redux/store";

export const signIn = (login, password) => async dispatch => {
    console.log(login);
    console.log(password);
    // await axiosInstance.post(`${API}/signIn`, payload);
    dispatch(setLoggedIn(true));
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

export function getCurrentUser() {
    return store.getState().authReducer.profile;
}

export function hasAuthority(authorities) {
    let connectedUser = getCurrentUser();
    if (connectedUser === null || connectedUser === undefined) {
        return false;
    }

    if (!authorities.includes(connectedUser.role)) {
        return false;
    }

    return true;
}
