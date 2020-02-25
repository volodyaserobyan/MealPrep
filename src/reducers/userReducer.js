export const userReducer = (state = {}, action) => {

    switch (action.type) {
        case 'SUCCESS_USER': {
            return {
                ...state,
                userInfo: action.userInfo
            }
        }
        default: return state;
    }
}