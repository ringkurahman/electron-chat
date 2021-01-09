import * as api from '../api/auth'


// Register new user
export const registerUser = formData => dispatch =>
    api.register(formData)
        .then(_ => dispatch({ type: 'AUTH_REGISTER_SUCCESS' }))


// Logout user
export const logout = () => dispatch =>
    api.logout()
        .then(_ => dispatch({ type: 'AUTH_LOGOUT_SUCCESS' }))


// Login with email and password
export const loginUser = formData => dispatch =>
    api.login(formData)
        .then(_ => dispatch({ type: 'AUTH_LOGIN_SUCCESS' }))


// Get logged in user
export const listenToAuthChanged = () => dispatch => {
    dispatch({ type: 'AUTH_ON_INIT'})
    api.onAuthStateChanges(authUser => {
        if (authUser) {
            dispatch({ type: 'AUTH_ON_SUCCESS', user: authUser })
            
        } else {
            dispatch({ type: 'AUTH_ON_ERROR'})
        }
    })
}