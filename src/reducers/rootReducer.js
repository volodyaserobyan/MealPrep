import { combineReducers } from 'redux'
import { blogItemReducer } from './blogItemReducer'
import { addToCardReducer } from './addToCardReducer'
import { mealsItemReducer } from './mealsItemReducer'
import { filtersReducer } from './filtersReducer'

const rootReducer = combineReducers({
    blogItemReducer,
    addToCardReducer,
    mealsItemReducer,
    filtersReducer
})
export default rootReducer