export const isAuth = () => localStorage.getItem('token') != undefined
export const isVerified = () => localStorage.getItem('verify') == 'Your account now verifyed'