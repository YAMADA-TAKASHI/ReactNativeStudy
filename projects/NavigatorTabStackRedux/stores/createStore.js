import { createStore as reduxCreateStore, combineReducers, compose, applyMiddleware } from "redux";
import { stackReducer } from "../reducers/stackReducer";
import { tabReducer } from "../reducers/tabReducer";
import userReducer from "../reducers/userReducer";

export default function createStore(){
    const store = reduxCreateStore(
        combineReducers({
            stack: stackReducer,
            tab: tabReducer,
            user: userReducer
        }),
    );
    return store;
}