import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import authReducer from "../reducers/authReducer";
import thunk from "redux-thunk";


const reducers = combineReducers({
    authReducer
});

export const store = createStore(reducers, compose(applyMiddleware(thunk)));
