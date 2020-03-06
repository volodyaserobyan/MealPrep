export const isAuth = () => {
    if (
        localStorage.getItem('token') != undefined || localStorage.getItem('token') != null) {
        // localStorage.getItem('token') != ''
        //     localStorage.getItem('token') != "undefined" ||
        // localStorage.getItem('token') != 'null' ||
        // localStorage.getItem('token') != null ||
        return true
    }
    else {
        return false
    }
}
export const isVerified = () => localStorage.getItem('verify') == 'Your account now verifyed'