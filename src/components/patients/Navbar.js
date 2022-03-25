import React from 'react'
import logo from "../../images/logo.png"
import "../../App.scss"
const Navbar = () => {
  return (
    <section className="practitioners-section" id="practitioners-section-a">
        <div className="practitioners-content-wrap">
          <div id='img-wrap'>
          <img src={logo}></img>
          </div>
          <h2>TheraPortHealth</h2> 
          <section>
          <h5>For Practitioners</h5>
          <h5>Sign up for free</h5>
          </section>
      </div>
    </section>
  )
}

export default Navbar;