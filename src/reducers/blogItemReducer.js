export const blogItemReducer = (state = {}, action) => {

    switch (action.type) {
        case 'BLOG_ITEMS':
            return {
                ...state,
                blog: action.blog
            }
        default: return state;
    }
}