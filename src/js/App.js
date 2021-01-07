import React from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import HomeView from './views/Home'
import Navbar from './components/Navbar'


const App = () => {

    return (
        <Router>
            <Navbar />
            <div className='content-wrapper'>
                <Switch>
                    <Route path="/settings">
                        <h1>Hello from settings view</h1>
                    </Route>
                    <Route path="/register">
                        <h1>Hello from register view</h1>
                    </Route>
                    <Route path="/login">
                        <h1>Hello from login view</h1>
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