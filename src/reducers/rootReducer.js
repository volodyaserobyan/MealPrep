import { LOGOUTCALL, RESETMEALS, DELETEUSER } from '../const/ConstTypes'
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
import { passwordReducer } from './passwordReducer'
import { helpCenterReducer } from './helpCenterReducer'
import { aboutUsReducer } from './aboutUsReducer'

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
    testimonialsReducer,
    passwordReducer,
    helpCenterReducer,
    aboutUsReducer
})

const rootReducer = (state, action) => {
    if (action.type === LOGOUTCALL) {
        state.signinReducer = undefined;
    }

    if (action.type === RESETMEALS) {
        state.mealsItemReducer = undefined
    }

    if (action.type === DELETEUSER) {
        state.userReducer.userInfo = undefined
    }

    return appReducer(state, action)
}

export default rootReducer