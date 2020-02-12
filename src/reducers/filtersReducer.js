export const filtersReducer = (state = {}, action) => {

    switch (action.type) {
        case 'GET_FILTERS': {
            console.log(action)
            return {
                ...state,
                getFilters: action.getFilters
            }
        }
        case 'ADD_FILTERS': {
            console.log(action)
            return {
                ...state,
                setFilters: action.setFilters
            }
        }
        case 'ADD_RANGE': {
            console.log(action)
            return {
                ...state,
                addRange: action.addRange
            }
        }
        default: return state;
    }
}