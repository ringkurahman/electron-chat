import React from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import HomeView from './views/Home'
import NavbarView from './components/Navbar'
import SettingsView from './views/Settings'
import RegisterView from './views/Register'
import LoginView from './views/Login'
import ChatView from './views/Chat'


const App = () => {

    return (
        <Router>
            <NavbarView />
            <div className='content-wrapper'>
                <Switch>
                    <Route path="/settings">
                        <SettingsView />
                    </Route>
                    <Route path="/register">
                        <RegisterView />
                    </Route>
                    <Route path="/login">
                        <LoginView />
                    </Route>
                    <Route path="/chat/:id">
                        <ChatView />
                    </Route>
                    <Route path="/">
                        <HomeView />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default App