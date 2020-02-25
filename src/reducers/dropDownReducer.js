export const dropDownReducer = (state = {}, action) => {

    switch (action.type) {
        case 'OPEN_DROPDOWN': {
            return {
                ...state,
                isDropDown: action.isDropDown
            }
        }
        default: return state;
    }
}