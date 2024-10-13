import React from 'react'
import './resourceShablon.css'
import resourcesArray from './resourcesArray'

const ResourceShablon = () => {

  return (
    <>
      {resourcesArray?.map((element) => (
        <div key={element._id} className='bookThumb_container'>
          <div className="thumb">
            <img src={element.outlook} alt="" />
            <article>
              <div className='descr-contain'>
                <div className="descr">
                  <p>{element.description} </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      ))}
    </>
  )
}

export default ResourceShablon