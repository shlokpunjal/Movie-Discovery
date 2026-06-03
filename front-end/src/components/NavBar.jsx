import React from 'react'
import { Link } from 'react-router-dom'
import "../css/NavBar.css"

function NavBar() {
  return (
    <nav className="navbar">
        <div className="navbar-brand">
            <Link to = "/" onClick={() => window.location.href = "/"}>Movie App</Link>
        </div>
        <div className="navbar-links">
            <Link to = "/" onClick={() => window.location.href = "/"} className="nav-link">Home</Link>
            <Link to = "/favorites" className="nav-link">Favorites</Link>
        </div>
    </nav>
  )
}

export default NavBar