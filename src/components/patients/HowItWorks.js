import React from 'react'
import {CgProfile} from 'react-icons/cg'
import {GrSelect} from 'react-icons/gr';
import {FaMoneyCheckAlt} from 'react-icons/fa';

const HowItWorks = () => {
  return (
    <section className="patients-section" id="patients-section-c">
      <h2>How It Works</h2>
        <div className="patients-content-wrap">
        
          <div className="flex-item">
          <CgProfile style={{fontSize:'4em', marginBottom:'0.5em'}}/>
          <h3>Sign-Up</h3>
          <p>Create a free health profile to receive treatment details, appointment reminders
            and much more.
          </p>
          </div>
          <div className="flex-item">
          <GrSelect style={{fontSize:'4em', marginBottom:'0.5em'}}/>
          <h3>Set-Up</h3>
          <p>Browse from a list of paramedical practitioners that best suit your health needs and book online</p>
          </div>
          <div className="flex-item">
          <FaMoneyCheckAlt style={{fontSize:'4em', marginBottom:'0.5em'}}/>
          <h3>Grow</h3>
          <p>Subscribe to save time and money on in-office or at-home treatment services</p>
          </div>

        </div>
    </section>
  )
}

export default HowItWorks;