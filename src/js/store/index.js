import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
// import { composeWithDevTools } from 'redux-devtools-extension'
import chatReducers from '../reducers/chatReducers'
import createAuthReducer from '../reducers/authReducers'
import createAppStatusReducer from '../reducers/appStatusReducers'
import appMiddleware from '../middlewares/appStatusMiddlewares'



export default function configureStore() {

    const middleware = [thunk, appMiddleware]

    const store = createStore(
        combineReducers({
            chats: chatReducers,
            auth: createAuthReducer,
            app: createAppStatusReducer
        }), applyMiddleware(...middleware))

    return store
}



// const reducer = combineReducers({})

// const userInfoFromStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null


// const initialState = {
//     message: 'Hello World',
//     data1: 'Just some testing data',
//     data2: 'Just some testing data2',
//     userLogin: { userInfo: userInfoFromStorage}
// }

// const middleware = [thunk]

// const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))


// export default store
