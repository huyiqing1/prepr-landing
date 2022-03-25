import React from 'react';
import {ImProfile} from 'react-icons/im'
import {BsFillCalendarCheckFill} from 'react-icons/bs';
import {MdAutoGraph} from 'react-icons/md';

const HowItWorks = () => {
  return (
    <section className="practitioners-section" id="practitioners-section-c">
        <div className="practitioners-content-wrap">
          <h2><bold>How It Works</bold></h2>
          <div className="flex-item">
          <ImProfile style={{fontSize:'4em', marginBottom:'0.5em'}}/>
          <h3>Create Profile</h3>
          <p>Create a free profile to showcase your expertise to prospective clients.</p>
          </div>
          <div className="flex-item">
          <BsFillCalendarCheckFill style={{fontSize:'4em', marginBottom:'0.5em'}}/>
          <h3>Set-Up</h3>
          <p>Add your subscription rates and availability to start attracting clients.</p>
          </div>
          <div className="flex-item">
          <MdAutoGraph style={{fontSize:'4em', marginBottom:'0.5em'}}/>
          <h3>Grow</h3>
          <p>Clients have the option to rate and review your services to increase your visibility.</p>
          </div>
        </div>
    </section>
  )
}

export default HowItWorks;