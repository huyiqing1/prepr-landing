import React from 'react'
import {FaSearch} from 'react-icons/fa'
const Find = () => {
  return (
    <section className="patients-section" id="patients-section-b">
        <div className="patients-content-wrap">
        <div className='patients-img-container'>
          <div className='patients-sentence'>
            <p className = "firstP">TheraPort makes it easy to get the therapy you want, whenever
              you want
            </p>
            <p className = "secondP">Schedule a session now that fits in with your schedule</p>
            {/* <div className="form-group has-search">
              <span className="fa fa-search form-control-feedback"></span>
              <input type="text" className="form-control" placeholder="Search"/>
            </div> */}
            <div class="wrap">
              <div className="search">
                  <input type="text" className="searchTerm" placeholder="What are you looking for?"/>
                  <button type="submit" class="searchButton">
                  <FaSearch/>
                </button>
              </div>
            </div>
          </div>
        </div>
        </div>
    </section>
  )
}

export default Find;