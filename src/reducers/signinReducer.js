import {
    SIGNINUSER,
    LOGOUTCALL,
    SIGNINUSERFB
} from '../const/ConstTypes'

export const signinReducer = (state = {}, action) => {

    switch (action.type) {
        case SIGNINUSER: {
            return {
                ...state,
                signinUser: action.signinUser
            }
        }
        case SIGNINUSERFB: {
            return {
                ...state,
                signinUserFB: action.signinUserFB
            }
        }
        case LOGOUTCALL: {
            return {
                ...state,
                logOutUser: action.logOutUser
            }
        }
        default: return state;
    }
}