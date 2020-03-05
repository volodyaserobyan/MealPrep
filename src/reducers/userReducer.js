import { GETUSER, DELETEUSER } from '../const/ConstTypes'

export const userReducer = (state = {}, action) => {

    switch (action.type) {
        case GETUSER: {
            return {
                ...state,
                userInfo: action.userInfo
            }
        }
        case DELETEUSER: {
            return {
                ...state,
                deleteUser: action.deleteUser
            }
        }
        default: return state;
    }
}