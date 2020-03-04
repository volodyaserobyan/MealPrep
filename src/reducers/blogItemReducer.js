import { BLOGITEMS } from '../const/ConstTypes'

export const blogItemReducer = (state = {}, action) => {

    switch (action.type) {
        case BLOGITEMS:
            return {
                ...state,
                blog: action.blog
            }
        default: return state;
    }
}