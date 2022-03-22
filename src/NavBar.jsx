import React from 'react'

import "./App.css"
const NavBar = () => {
  return (
    <nav className = "nav1 "  >
        <div className = "logoDiv">
            <img className = ""src = {require("./images/logo.png")} alt = "Logo" width="80" height = "80"/>
            <a className = "anchorTag">Theraport</a>
        </div>
        <div className = "signUp">
            <a className='anchorTag'> For Practioner </a>
            <button className = "tealBtn">Sign Up For Free</button>
        </div>
    </nav>
  )
}

export default NavBar