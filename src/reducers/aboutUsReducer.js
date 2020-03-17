import { GETMEMBERSABOUTUS } from '../const/ConstTypes'

export const aboutUsReducer = (state = {}, action) => {

    switch (action.type) {
        case GETMEMBERSABOUTUS: {
            return {
                ...state,
                members: action.getMembers
            }
        }
        default: return state;
    }
}