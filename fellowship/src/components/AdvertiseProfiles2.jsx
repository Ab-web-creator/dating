import React from 'react'
import manImage from '../images/abeke.png';

const AdvertiseProfiles2 = () => {

  
  return (
          <div className='group p-6 border border-1 rounded-md space-y-5'>
              <div className='flex gap-4 max-w-full mb-4'>
                <img
                  src={manImage}
                  alt='sthing'
                  className='w-1/2'
                />
                <div className=''>
                  <p className='font-bold text-sm'>David Schär</p>
                  <p className='green text-sm'>@david_shaer1967</p>
                  <p className='text-sm'>Age: 58</p>
                  <p className='text-sm'>🌎: Weesp, Netherlands</p>
                  <p className='text-sm'>Age range: 60 - 80</p>
                </div>
              </div>
  

              <div className=''>
                <p className='h-[100px] overflow-y-scroll text-sm'>
                  Almost as fresh as before, just in an older shell. Are you the one who has the potential to spend the rest of his life with me? 

                  I'm financially secure, goal-oriented and monogamous. I'm looking for a classic lifetime relationship, with someone who appreciates good conversation, shared interests. You don't have to be athletic or not. What really captivates me is your attentiveness and your extraordinary personality. Bonus points if you want to get married at some point.
                </p>
                <p> . . . </p>
              </div>
              <div className='group-hover:bg-green-200 transition-colors duration-300 border bg-gray-50 border-gray-600 rounded-lg px-4 py-2 w-fit'>
                <p className='text-sm font-normal'>
                View the profile
                </p>
              </div>

          </div>
  )
}

export default AdvertiseProfiles2
