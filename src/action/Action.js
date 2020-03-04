import * as All from '../const/ConstTypes'

export const blogItems = data => {
    return {
        type: All.BLOGITEMS,
        blog: data
    }
}

export const addToCard = data => {
    return {
        type: All.ADDTOCARD,
        item: data
    }
}

export const handlingFilters = data => {
    return {
        type: All.HANDLINGFILTERS,
        filtersHandle: data
    }
}

export const removeItemFromArr = item => {
    return {
        type: All.REMOVEITEMARR,
        item: item
    }
}

export const openDropDown = bool => {
    return {
        type: All.OPENDROPDOWN,
        isDropDown: bool
    }
}

export const getMealsFromDB = url => {

    return (dispatch) => {
        fetch(url, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            }
        }).then((response) => response.json())
            .then(getMeals => {
                if (url.includes('filteredBy')) {
                    dispatch({
                        type: All.GETMEALSFILTER,
                        getMeals: getMeals
                    })
                } else {
                    dispatch({
                        type: All.GETMEALS,
                        getMeals: getMeals
                    })
                }
            }
            ).catch(error => {
                dispatch({
                    type: All.ERROR,
                    data: error
                })
            })
    }
}

export const resetMeals = () => {
    return {
        type: All.RESETMEALS
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
                    type: All.GETFILTERS,
                    getFilters: getFilters
                })
            }
            ).catch(error => {
                dispatch({
                    type: All.ERROR,
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
                    type: All.SIGNUPUSER,
                    signupUser: signupUser
                })
            })
            .catch(error => {
                dispatch({
                    type: All.ERROR,
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
                    type: All.SIGNINUSER,
                    signinUser: signinUser
                })
            })
            .catch(error => {
                dispatch({
                    type: All.ERROR,
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
                    type: All.VERIFYUSER,
                    verifyUser: verifyUser
                })
            })
            .catch(error => {
                dispatch({
                    type: All.ERROR,
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
                    type: All.GETUSER,
                    userInfo: userInfo
                })
            })
            .catch(error => {
                dispatch({
                    type: All.ERROR,
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
                    type: All.LOGOUTCALL,
                    logOutUser: logOutUser
                })
            })
            .catch(error => {
                dispatch({
                    type: All.ERROR,
                    data: error
                })
            })
    }
}

export const refreshVerification = url => {
    return dispatch => {
        fetch(url, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Authorization": localStorage.getItem('token')
            },
        }).then(response => response.json())
            .then(refresh => {
                dispatch({
                    type: All.VERIFYREFRESH,
                    refresh: refresh
                })
            })
            .catch(error => {
                dispatch({
                    type: All.ERROR,
                    data: error
                })
            })
    }
}

export const getTestimonials = url => {
    return dispatch => {
        fetch(url, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
            },
        }).then(response => response.json())
            .then(testimonial => {
                dispatch({
                    type: All.GETTESTIMONIALS,
                    testimonial: testimonial
                })
            })
            .catch(error => {
                dispatch({
                    type: All.ERROR,
                    data: error
                })
            })
    }
}