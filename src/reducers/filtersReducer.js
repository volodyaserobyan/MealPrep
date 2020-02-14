export const filtersReducer = (state = {}, action) => {

    switch (action.type) {
        case 'GET_FILTERS': {
            return {
                ...state,
                getFilters: action.getFilters
            }
        }
        case 'ADD_FILTERS': {
            return {
                ...state,
                setFilters: action.setFilters
            }
        }
        case 'ADD_RANGE': {
            return {
                ...state,
                addRange: action.addRange
            }
        }
        default: return state;
    }
}