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
            console.log("hereererererer", state, action.payload);
            return {
                ...action.payload,
            };
        case SIGN_OUT:
            return {
                ...initialState,
            };
        default:
            return state;
    }
};
export default userReducer;
