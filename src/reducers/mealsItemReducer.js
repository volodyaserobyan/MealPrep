import { GETMEALS, GETMEALSFILTER } from '../const/ConstTypes'

const initialUserState = {
    getMeals: [],
    getMealsFilter: []
}
export const mealsItemReducer = (state = initialUserState, action) => {

    switch (action.type) {
        case GETMEALS: {
            console.log(action.getMeals)
            return {
                ...state,
                getMeals: state.getMeals.concat(action.getMeals.meals),
                count: action.getMeals.totalCount,
                message: action.getMeals.meassage
            }
        }
        case GETMEALSFILTER: {
            return {
                ...state,
                getMealsFilter: state.getMealsFilter.concat(action.getMeals.meals),
                count: action.getMeals.totalCount
            }
        }
        default: return state;
    }
}