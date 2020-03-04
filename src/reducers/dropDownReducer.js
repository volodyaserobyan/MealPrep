import { OPENDROPDOWN } from '../const/ConstTypes'

export const dropDownReducer = (state = {}, action) => {

    switch (action.type) {
        case OPENDROPDOWN: {
            return {
                ...state,
                isDropDown: action.isDropDown
            }
        }
        default: return state;
    }
}