import React from 'react'
import therapist from '../../images/therapist.jpg';
const Form = () => {
  return (
    <section className="practitioners-section" id="practitioners-section-b">
      <div className="practitioners-content-wrap">
        <div className = "practitioners-form" id = "practitionerSignupForm">
          {/* content here */}
        <form className = "form-practitioner">
            <input type = "text" className = "signUp" name = "fName" placeholder='First Name'/>
            <input type = "text" className = "signUp" name = "fName" placeholder='Last Name'/>
            <input type = "text" className = "signUp" name = "fName" placeholder='Area of Practice'/>
            <input type = "email" className = "signUp" name = "fName" placeholder='Email'/>
          </form>
          <h1>Build Your Practice With TheraPort Health</h1>
          <h4>Signup free and grow your business with thousands of customers 
            looking for your services</h4>
            <h5>Grow Your Business</h5>
            <div id='background-img'>
            </div>
        </div>
          
          
            
      </div>
    </section>
  )

}

export default Form;