import React from 'react'

import "./App.css"
const NavBar = () => {
  return (
    <nav className = "nav1 "  >
        <div>
            <img className = ""src = {require("./images/logo.png")} alt = "Logo" width="50" height = "50"/>
            <a className = "anchorTag">Theraport</a>
        </div>
        <div>
            <a className='anchorTag'> For Practioner </a>
            <button className = "btn btn-info">Sign Up For Free</button>
        </div>
    </nav>
  )
}

export default NavBar