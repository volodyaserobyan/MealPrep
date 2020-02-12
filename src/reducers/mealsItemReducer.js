export const mealsItemReducer = (state = {}, action) => {

    switch (action.type) {
        case 'GET_MEALS': {
            console.log(action)
            return {
                ...state,
                getMeals: action.getMeals
            }
        }
        case 'ADD_MEALS': {
            console.log(action)
            return {
                ...state,
                addMeals: action.addMeals
            }
        }
        case 'DELETE_MEALS': {
            console.log(action)
            return {
                ...state,
                deleteMeals: action.deleteMeals
            }
        }
        default: return state;
    }
}