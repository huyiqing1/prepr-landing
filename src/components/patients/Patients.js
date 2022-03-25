import React from 'react';
import Navbar from './Navbar';
import Find from './Find';
import How from './HowItWorks';
import Popular from './Popular';
import Testimonial from './Testimonial';
import Notsure from './Notsure';
import './Patients.scss'

const Patients = () => {
  return (
    <div className="Patients">
      <Navbar/>
      <Find/>
      <How/>
      <Popular/>
      <Testimonial/>
      <Notsure/>
    </div>
  )
}

export default Patients;