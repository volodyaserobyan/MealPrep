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

const appReducer = combineReducers({
    blogItemReducer,
    addToCardReducer,
    mealsItemReducer,
    filtersReducer,
    handleFiltersReducer,
    signupReducer,
    signinReducer,
    dropDownReducer,
    userReducer
})

const rootReducer = (state, action) => {
    if (action.type === 'LOGOUT_CALL') {
        state.signinReducer = undefined;
    }

    return appReducer(state, action)
}

export default rootReducer