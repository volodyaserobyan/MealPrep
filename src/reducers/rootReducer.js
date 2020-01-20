import { combineReducers } from 'redux'
import { blogItemReducer } from './blogItemReducer'
import { addToCardReducer } from './addToCardReducer'

const rootReducer = combineReducers({
    blogItemReducer,
    addToCardReducer
})
export default rootReducer