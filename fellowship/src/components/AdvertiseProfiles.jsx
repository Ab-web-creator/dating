import React from 'react'
import manImage from '../images/zoom4.png';

const AdvertiseProfiles = () => {

  
  return (
          <div className='group p-6 border border-1 rounded-md space-y-5'>
              <div className='flex gap-4 max-w-full mb-4'>
                <img
                  src={manImage}
                  alt='sthing'
                  className='w-1/2'
                />
                <div className=''>
                  <p className='font-bold text-sm'>Mike Pense</p>
                  <p className='green text-sm'> @best_in_sport</p>
                  <p className='text-sm'>Age: 58</p>
                  <p className='text-sm'>🌎: California, USA</p>
                  <p className='text-sm'>Age range: 44 - 90</p>
                </div>
              </div>
  

              <div className=''>
                <p className='h-[100px] overflow-y-scroll text-sm'>
                  I live in California.  After a long period of secluded living, and yes, because the earth keeps turning, I'm back on the singles market. Almost as fresh as before, just in an older shell. Are you the one who has the potential to spend the rest of his life with me? Then read on, no matter where you live.

                  I'm about to retire, financially secure, goal-oriented and monogamous. I'm looking for a classic lifetime relationship, with someone who appreciates good conversation, shared interests and comfortable silence with his head on my lap. You don't have to be hairy or bald, athletic or not. It doesn't matter if you're younger or older, rich or poor, etc. I have no physical preferences. What really captivates me is your attentiveness and your extraordinary personality. Bonus points if you want to get married at some point. You know what I mean?
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

export default AdvertiseProfiles
