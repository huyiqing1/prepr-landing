import React from 'react'
import "../../App.scss";
import logo from '../../images/logo.png';

const Navbar = () => {
  return (
    <section className="practitioners-section" id="practitioners-section-a">
        <div className="practitioners-content-wrap">
          <div id="img-wrap">
            <img src={logo}></img>
          </div>
          <h2>TheraPortHealth</h2>
          <section>
            <h5>For Clients</h5>
            <h5>Get Started For Free</h5>
          </section>
        </div>
    </section>
  )
}

export default Navbar;