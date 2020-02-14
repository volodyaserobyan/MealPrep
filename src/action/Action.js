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

export const handlingFilters = data => {
    return {
        type: 'HANDLING_FILTERS',
        filtersHandle: data
    }
}

export const addItemsToDB = (url, data) => {

    return (dispatch) => {
        fetch(url, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }).then((response) => response.json())
            .then(addMeals => {
                dispatch({
                    type: "ADD_MEALS",
                    addMeals: addMeals
                })
            }
            ).catch(error => {
                dispatch({
                    type: 'ERROR',
                    data: error
                })
            })
    }
}

export const getItemsFromDB = url => {

    return (dispatch) => {
        fetch(url, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            }
        }).then((response) => response.json())
            .then(getMeals => {
                console.log(getMeals)
                dispatch({
                    type: "GET_MEALS",
                    getMeals: getMeals
                })
            }
            ).catch(error => {
                console.log(error)
                dispatch({
                    type: 'ERROR',
                    data: error
                })
            })
    }
}

export const getFiltersFromDB = url => {
    return (dispatch) => {
        fetch(url, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            }
        }).then((response) => response.json())
            .then(getFilters => {
                dispatch({
                    type: "GET_FILTERS",
                    getFilters: getFilters
                })
            }
            ).catch(error => {
                dispatch({
                    type: 'ERROR',
                    data: error
                })
            })
    }
}

export const addFiltersToDB = (url, data) => {
    return (dispatch) => {
        fetch(url, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }).then((response) => response.json())
            .then(setFilters => {
                dispatch({
                    type: "ADD_FILTERS",
                    setFilters: setFilters
                })
            }
            ).catch(error => {
                dispatch({
                    type: 'ERROR',
                    data: error
                })
            })
    }
}

export const deleteItemsFromDB = url => {

    return (dispatch) => {
        fetch(url, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json"
            }
        }).then((response) => response.json())
            .then(deleteMeals => {
                dispatch({
                    type: "DELETE_MEALS",
                    deleteMeals: deleteMeals
                })
            }
            ).catch(error => {
                dispatch({
                    type: 'ERROR',
                    data: error
                })
            })
    }
}

export const addRangeToDB = (url, data) => {

    return (dispatch) => {
        fetch(url, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }).then((response) => response.json())
            .then(addRange => {
                dispatch({
                    type: "ADD_RANGE",
                    addRange: addRange
                })
            }
            ).catch(error => {
                dispatch({
                    type: 'ERROR',
                    data: error
                })
            })
    }
}