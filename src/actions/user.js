import { SIGN_IN, SIGN_OUT } from "../constants";

export function signIn(user) {
    return {
        type: SIGN_IN,
        payload: user,
    };
}
export function signOut(user) {
    return {
        type: SIGN_OUT,
        payload: user,
    };
}
