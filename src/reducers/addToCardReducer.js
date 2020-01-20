const initialUserState = {
    item: []
}
export const addToCardReducer = (state = initialUserState, action) => {

    switch (action.type) {
        case 'ADD_TO_CARD': {
            return {
                ...state,
                item: [...state.item, action.item]
            }
        }
        default: return state;
    }
}