import { SIGN_IN, SIGN_OUT } from "../constants";
const initialState = {
    phone: "",
    token: "",
    otpVerified: false,
    type: "",
};
const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGN_IN:
            return {
                ...state,
                user: action.payload,
            };
        case SIGN_OUT:
            return {
                ...state,
                user: initialState,
            };
        default:
            return state;
    }
};
export default userReducer;
