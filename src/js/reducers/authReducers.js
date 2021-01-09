

const DEFAULT_STATE = {
    user: null,
    isChecking: false
}


export default function authReducers(state = DEFAULT_STATE, action) {
    switch (action.type) {
        case 'AUTH_ON_INIT':
            return { user: null, isChecking: true }
        
        case 'AUTH_ON_SUCCESS':
            return { user: action.user, isChecking: false }
        
        case 'AUTH_ON_ERROR':
            return { user: action.user, isChecking: false }
        
        default: { return state }
    }
}