import { SIGNUPUSER, VERIFYUSER, VERIFYREFRESH } from '../const/ConstTypes'

export const signupReducer = (state = {}, action) => {

    switch (action.type) {
        case SIGNUPUSER: {
            return {
                ...state,
                signupUser: action.signupUser
            }
        }
        case VERIFYUSER: {
            return {
                ...state,
                verifyUser: action.verifyUser
            }
        }
        case VERIFYREFRESH: {
            return {
                ...state,
                refresh: action.refresh
            }
        }
        default: return state;
    }
}