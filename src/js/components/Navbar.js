import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
    return (
        <div className="chat-navbar">
        <nav className="chat-navbar-inner">
          <div className="chat-navbar-inner-left">
            <Link to="/settings" className="btn btn-outline-success ml-2">Settings</Link>
          </div>
          <div className="chat-navbar-inner-right">
            <span className="logged-in-user">Hi User</span>
            <span><Link
              to="/register"
              className="btn btn-sm btn-outline-danger ml-2">Register</Link></span>
            <span>
              <Link
              to="/login"
              className="btn btn-sm btn-outline-success ml-2">Login</Link>
            </span>
          </div>
        </nav>
      </div>
    )
}

export default Navbar