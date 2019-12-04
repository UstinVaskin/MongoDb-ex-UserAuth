import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'

const Log = () => {

  function logOut() {
    localStorage.clear()
  }

  function log() {
    if (localStorage !== 0) {

      Navbar.setStatus(true)
      return <Link className="navbar-item" to="/" onClick={(e) => logOut(e)}>Log out</Link>
    }
  }

  return log()

}

export default Log