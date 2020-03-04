import { GETFILTERS } from '../const/ConstTypes'

export const filtersReducer = (state = {}, action) => {

    switch (action.type) {
        case GETFILTERS: {
            return {
                ...state,
                getFilters: action.getFilters
            }
        }
        default: return state;
    }
}