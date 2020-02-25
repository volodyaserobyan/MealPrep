export const signinReducer = (state = {}, action) => {

    switch (action.type) {
        case 'SIGNIN_USER': {
            return {
                ...state,
                signinUser: action.signinUser
            }
        }
        case 'LOGOUT_CALL': {
            return {
                ...state,
                logOutUser: action.logOutUser
            }
        }
        default: return state;
    }
}