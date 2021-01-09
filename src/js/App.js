import React, { useEffect } from 'react'
import { Provider } from 'react-redux'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import HomeView from './views/Home'
import NavbarView from './components/Navbar'
import SettingsView from './views/Settings'
import WelcomeView from './views/Welcome'
import ChatView from './views/Chat'
import configureStore from './store/index'
import { listenToAuthChanged } from './actions/authActions'


const store = configureStore()


const App = () => {

    useEffect(() => {
        store.dispatch(listenToAuthChanged())
    }, [])

    return (
        <Provider store={store}>
            <Router>
                <NavbarView />
                <div className='content-wrapper'>
                    <Switch>
                        <Route exact path="/">
                            <WelcomeView />
                        </Route>
                        <Route path="/home">
                            <HomeView />
                        </Route>
                        <Route path="/settings">
                            <SettingsView />
                        </Route>
                        <Route path="/chat/:id">
                            <ChatView />
                        </Route>
                    </Switch>
                </div>
            </Router>
        </Provider>
    )
}

export default App