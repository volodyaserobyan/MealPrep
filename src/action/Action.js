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

export const removeItemFromArr = item => {
    return {
        type: 'REMOVE_ITEM',
        item: item
    }
}

export const openDropDown = bool => {
    return {
        type: 'OPEN_DROPDOWN',
        isDropDown: bool
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
                console.log(getMeals, 'meals action')
                if (url.includes('filteredBy')) {
                    dispatch({
                        type: "GET_MEALS_FILTER",
                        getMeals: getMeals
                    })
                } else {
                    dispatch({
                        type: "GET_MEALS",
                        getMeals: getMeals
                    })
                }
            }
            ).catch(error => {
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

    return dispatch => {
        fetch(url, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }).then(response => response.json())
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

export const signUpLocal = (url, data) => {

    return dispatch => {
        fetch(url, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }).then(response => response.json())
            .then(signupUser => {
                dispatch({
                    type: 'SIGNUP_USER',
                    signupUser: signupUser
                })
            })
            .catch(error => {
                dispatch({
                    type: 'ERROR',
                    data: error
                })
            })
    }
}

export const signInCall = (url, data) => {

    return dispatch => {
        fetch(url, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }).then(response => response.json())
            .then(signinUser => {
                dispatch({
                    type: 'SIGNIN_USER',
                    signinUser: signinUser
                })
            })
            .catch(error => {
                dispatch({
                    type: 'ERROR',
                    data: error
                })
            })
    }
}

export const verifyCall = (url, token) => {

    return dispatch => {
        fetch(url, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(token)
        }).then(response => response.json())
            .then(verifyUser => {
                dispatch({
                    type: 'VERIFY_USER',
                    verifyUser: verifyUser
                })
            })
            .catch(error => {
                dispatch({
                    type: 'ERROR',
                    data: error
                })
            })
    }
}

export const UserInfo = url => {
    return dispatch => {
        fetch(url, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "Authorization": localStorage.getItem('token')
            },
        }).then(response => response.json())
            .then(userInfo => {
                dispatch({
                    type: 'SUCCESS_USER',
                    userInfo: userInfo
                })
            })
            .catch(error => {
                dispatch({
                    type: 'ERROR',
                    data: error
                })
            })
    }
}

export const SignOutCall = url => {
    return dispatch => {
        fetch(url, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Authorization": localStorage.getItem('token')
            },
        }).then(response => response.json())
            .then(logOutUser => {
                dispatch({
                    type: 'LOGOUT_CALL',
                    logOutUser: logOutUser
                })
            })
            .catch(error => {
                dispatch({
                    type: 'ERROR',
                    data: error
                })
            })
    }
}