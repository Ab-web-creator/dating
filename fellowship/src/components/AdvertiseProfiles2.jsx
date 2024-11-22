import React from 'react'
import manImage from '../images/david.JPG';

const AdvertiseProfiles2 = () => {

  
  return (
          <div className='group hover:bg-slate-100 p-6 pb-4 cursor-pointer border border-1 rounded-md space-y-5'>
              <div className='flex gap-4 max-w-full mb-4'>
                <div className='profile_image w-full'>
                <img
                  src={manImage}
                  alt='sthing'
                  className='max-w-1/2'
                />
                </div>
                <div className=''>
                  <p className='font-bold text-sm'>David Schär</p>
                  <p className='green text-sm'>@david_schär</p>
                  <p className='text-sm'>Age: 58</p>
                  <p className='text-sm'>🌎: Weesp, Netherlands</p>
                  <p className='text-sm'>Age range: 60 - 80</p>
                </div>
              </div>
  

              <div className='flex flex-col gap-2'>
              <div className='h-[112px] overflow-y-scroll text-sm space-y-5'>
                <p>
                  Almost as fresh as before, just in an older shell. Are you the one?
                </p>

                <div className='group-hover:bg-blue-200 transition-colors duration-300 border bg-blue-50 border-gray-600 rounded-lg px-4 py-2 w-fit'>
                <p className='text-sm font-normal'>
                View the profile
                </p>
              </div>
              
                </div>
                {/* <p> . . . </p> */}
              </div>
          

          </div>
  )
}

export default AdvertiseProfiles2
