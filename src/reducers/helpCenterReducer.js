import { GETCATEGORIESHELP } from '../const/ConstTypes'

export const helpCenterReducer = (state = {}, action) => {

    switch (action.type) {
        case GETCATEGORIESHELP: {
            return {
                ...state,
                getCategories: action.getCategories
            }
        }
        default: return state;
    }
}