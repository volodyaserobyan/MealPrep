import { SIGNINUSER, LOGOUTCALL } from '../const/ConstTypes'

export const signinReducer = (state = {}, action) => {

    switch (action.type) {
        case SIGNINUSER: {
            return {
                ...state,
                signinUser: action.signinUser
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