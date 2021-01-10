import { combineReducers } from 'redux'



function createAppStatusReducer() {
  const { onLine } = navigator

  const isOnline = (state = onLine, action) => {
    switch(action.type) {
      case 'APP_IS_ONLINE':
      case 'APP_IS_OFFLINE':
          return action.isOnline
      default: {
        return state
      }
    }
  }

  return combineReducers({
    isOnline
  })
}

export default createAppStatusReducer()