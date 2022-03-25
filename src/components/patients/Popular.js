import React from 'react'

const Popular = () => {
  return (
    <section className="patients-section" id="patients-section-d">
        <div className="patients-content-wrap">
          <h2><bold>Popular Practitioners</bold></h2>
          <div className='flex-item'>
            <div id="image-wrap"></div>
            <h4>Linda John</h4>
            <h4>Chiropractor</h4>
          </div>
          <div className='flex-item'>
            <div id="image-wrap">
              <h4>Julia Santos</h4>
              <h4>Massage Therapy</h4>
            </div>
          </div>
          <div className='flex-item'>
            <div id="image-wrap">
              <h4>Jordan Sky</h4>
              <h4>Physiotherapy</h4>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Popular;