import { FORGETPASSWORD, CHANGEPASSWORD } from '../const/ConstTypes'

export const passwordReducer = (state = {}, action) => {

    switch (action.type) {
        case FORGETPASSWORD: {
            return {
                ...state,
                forgetPassword: action.forgetPassword
            }
        }
        case CHANGEPASSWORD: {
            return {
                ...state,
                changePassword: action.changePassword
            }
        }
        default: return state;
    }
}