import { combineReducers } from 'redux'
import { blogItemReducer } from './blogItemReducer'
import { addToCardReducer } from './addToCardReducer'
import { mealsItemReducer } from './mealsItemReducer'
import { filtersReducer } from './filtersReducer'
import { handleFiltersReducer } from './handleFiltersReducer'

const rootReducer = combineReducers({
    blogItemReducer,
    addToCardReducer,
    mealsItemReducer,
    filtersReducer,
    handleFiltersReducer
})
export default rootReducer