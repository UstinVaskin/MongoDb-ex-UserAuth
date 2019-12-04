import React from 'react'
import { Link } from 'react-router-dom'
import 'bulma'



const NavBar = () => {



  function logOut() {
    localStorage.clear()
  }
  function loggedIn() {

    return <Link className="navbar-item" to="/" onClick={(e) => logOut(e)}>Log out</Link>

  }

  return <div className="navbar is-warning" >
    <div className="container">
      <div className="navbar-brand">
        <Link className="navbar-item" to="/">🇮🇸HomePage 🇮🇩</Link>
      </div>
      <div className="navbar-menu is-active">

        <div className="navbar-end">
          <div className="navbar-item">
            <Link className="navbar-item" to="/countries">Countries</Link>
          </div>
          <div className="navbar-item">
            <Link className="navbar-item" to="/countries/new">Create a Country</Link>
          </div>
          <div className="navbar-item">
            <Link className="navbar-item" to="/register">Register</Link>
          </div>
          <div className="navbar-item">
            <Link className="navbar-item" to="/login">Login</Link>
          </div>
          <div className="navbar-item">
            {loggedIn()}
          </div>

        </div>
      </div>
    </div>
  </div>
}


export default NavBar