export const signupReducer = (state = {}, action) => {

    switch (action.type) {
        case 'SIGNUP_USER': {
            return {
                ...state,
                signupUser: action.signupUser
            }
        }
        case 'VERIFY_USER': {
            return {
                ...state,
                verifyUser: action.verifyUser
            }
        }
        default: return state;
    }
}