
const INITIAL_STATE = {
    loading: false,
    loginData: []
};

function loginReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case "LOGIN_REQUEST":
            return Object.assign({}, state, {
                loading: true,
                loginData: action.payload
            });
        case "LOGIN_SUCCESS":
            return Object.assign({}, state, {
                loading: false
            });
        case "LOGIN_FAIL":
            return Object.assign({}, state, {
                loading: false
            });
        case "SAVE_USER":
            return Object.assign({}, state, {});
        case "LOGOUT":
            return INITIAL_STATE;
        default:
            return state;
    }
}

export default loginReducer;
