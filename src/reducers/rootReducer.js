import { combineReducers } from 'redux'
import { blogItemReducer } from './blogItemReducer'
import { addToCardReducer } from './addToCardReducer'
import { mealsItemReducer } from './mealsItemReducer'
import { filtersReducer } from './filtersReducer'
import { handleFiltersReducer } from './handleFiltersReducer'
import { signupReducer } from './signupReducer'
import { signinReducer } from './signinReducer'
import { dropDownReducer } from './dropDownReducer'
import { userReducer } from './userReducer'
import { testimonialsReducer } from './testimonialsReducer'

const appReducer = combineReducers({
    blogItemReducer,
    addToCardReducer,
    mealsItemReducer,
    filtersReducer,
    handleFiltersReducer,
    signupReducer,
    signinReducer,
    dropDownReducer,
    userReducer,
    testimonialsReducer
})

const rootReducer = (state, action) => {
    if (action.type === 'LOGOUT_CALL') {
        state.signinReducer = undefined;
    }

    if (action.type === 'RESET_MEALS') {
        state.mealsItemReducer = undefined
    }

    return appReducer(state, action)
}

export default rootReducer