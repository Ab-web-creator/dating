import React, { useState } from 'react'
import './lazyBoardMembers.css'


const LazyBoardMembers = ({ className, userName, userAge }) => {

  return (
    // <div className='lazy_servants_container'>
    <div className={`lazy_servants_container ${className}`}>
      <div className="lazy_servants" >
        <div className='gray1'>
          <div className='oval-container'>
            <p>👤</p>
          </div>
        </div>

        <div className='marine1'> </div>

        <div className='white_main1'>
          <div className='name'>
            <h4>
              &#3894;  <span> {userName} </span>  &#3894;
            </h4>
            <p> @born_in_1930</p>
          </div>
        </div>
        <div className='white_main2'>
          <div className='bio'>
            <p className='zametki'>
              Lorem ipsum dolor sit go amet cons ectetur adip ...
            </p>
          </div>
        </div>

        <div className='show_me'>
          <div className=''>
            <p className=''>
              &#8226; &#8226; &#8226;
            </p>
          </div>
        </div>
        <div className='marine1a'> </div>
        <div className='gray2' >
          <p>
            &#3894;
            age: {userAge} y.o.
            &#3894;
          </p>
        </div>
        <div className='marine2'></div>
      </div>
    </div >
  )
}

export default LazyBoardMembers
