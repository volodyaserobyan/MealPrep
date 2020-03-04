import { GETUSER } from '../const/ConstTypes'

export const userReducer = (state = {}, action) => {

    switch (action.type) {
        case GETUSER: {
            return {
                ...state,
                userInfo: action.userInfo
            }
        }
        default: return state;
    }
}