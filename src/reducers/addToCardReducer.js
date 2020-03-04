import { ADDTOCARD } from '../const/ConstTypes'

const initialUserState = {
    item: []
}
export const addToCardReducer = (state = initialUserState, action) => {

    switch (action.type) {
        case ADDTOCARD: {
            return {
                ...state,
                item: [...state.item, action.item]
            }
        }
        default: return state;
    }
}