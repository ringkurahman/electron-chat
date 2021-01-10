import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import HomeView from './views/Home'
import SettingsView from './views/Settings'
import WelcomeView from './views/Welcome'
import ChatView from './views/Chat'
import LoadingView from './components/shared/LoadingView'
import { listenToAuthChanged } from './actions/authActions'
import { listenToConnectionChanges } from './actions/appStatusAction'
import StoreProvider from './store/StoreProvider'
import PrivateRoute from './components/PrivateRoute'


const ChatApp = () => {

    const dispatch = useDispatch()
    const isChecking = useSelector(({ auth }) => auth.isChecking)
    const isOnline = useSelector(({app}) => app.isOnline)

    useEffect(() => {
      
        const unsubFromAuth = dispatch(listenToAuthChanged())
        const unsubFromConnection = dispatch(listenToConnectionChanges())

        return () => {
        unsubFromAuth()
        unsubFromConnection()
        }
  }, [dispatch])

    if (isChecking) {
        return <LoadingView />
    }

    return (
        <Router>
            <div className='content-wrapper'>
                <Switch>
                    <Route exact path="/">
                        <WelcomeView />
                    </Route>
                    <PrivateRoute path="/home">
                        <HomeView />
                    </PrivateRoute>
                    <PrivateRoute path="/settings">
                        <SettingsView />
                    </PrivateRoute>
                    <PrivateRoute path="/chat/:id">
                        <ChatView />
                    </PrivateRoute>
                </Switch>
            </div>
        </Router>
    )
}


const App = () => {
    return (
        <StoreProvider>
            <ChatApp />
        </StoreProvider>
    )
}

export default App