import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import countReducer from "../reducers/countReducer";
import userReducer from "../reducers/userReducer";

const rootReducer = combineReducers({ count: countReducer, user: userReducer });
const storeConf = () => {
    return configureStore({ reducer: rootReducer });
};
export default storeConf;
