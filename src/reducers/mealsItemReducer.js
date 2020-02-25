const initialUserState = {
    getMeals: []
}
export const mealsItemReducer = (state = initialUserState, action) => {

    switch (action.type) {
        case 'GET_MEALS': {
            return {
                ...state,
                getMeals: state.getMeals.concat(action.getMeals.meals),
                count: action.getMeals.totalCount
            }
            // [...state.getMeals, action.getMeals.meals]
            // state.getMeals.concat(action.getMeals.meals)
        }
        case 'GET_MEALS_FILTER': {
            if (state.getMeals.length > action.getMeals.totalCount) {
                state.getMeals.length = 0
            }
            return {
                ...state,
                getMeals: state.getMeals.concat(action.getMeals.meals),
                count: action.getMeals.totalCount
            }
        }
        case 'ADD_MEALS': {
            return {
                ...state,
                addMeals: action.addMeals
            }
        }
        case 'DELETE_MEALS': {
            return {
                ...state,
                deleteMeals: action.deleteMeals
            }
        }
        default: return state;
    }
}