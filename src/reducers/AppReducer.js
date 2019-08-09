
import { combineReducers } from "redux";
import login from "./authReducer/Login";
const appReducer = combineReducers({
    login
});

export default appReducer;