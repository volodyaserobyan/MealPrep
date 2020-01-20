export const blogItems = data => {
    return {
        type: 'BLOG_ITEMS',
        blog: data
    }
}

export const addToCard = data => {
    return {
        type: 'ADD_TO_CARD',
        item: data
    }
}