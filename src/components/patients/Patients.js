import React from 'react';
import Find from './Find';
import How from './HowItWorks';
import Popular from './Popular';
import Testimonial from './Testimonial';
import Notsure from './Notsure';


const Patients = () => {
  return (
    <div className="Patients">
      <Find/>
      <How/>
      <Popular/>
      <Testimonial/>
      <Notsure/>
    </div>
  )
}

export default Patients;