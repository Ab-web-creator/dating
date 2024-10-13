import React from 'react'
import UmightLike from '../../components/UmightLike'
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../../components/LanguageSwitcher'

const SearchPage = () => {
  const { t } = useTranslation();

  return (
    <div className='page-root'>
      <div className='topbar'>
        <div className='middle_part1'>
            <h1>
              S<span>e</span>arch profil<span>e</span>s
            </h1>
            <LanguageSwitcher />
        </div>
        <div className="middle_part2">
        </div>
      </div>

      <div className="separate_into_two_columns">
        <div className='sep_part1 overflow-y-auto'>
            <div className='px-4 sm:px-5 py-6'>
              <p>
              Here you can search for profiles that match specific criteria. Leaving a field blank will disregard it in the search.
              </p>
            </div>

            <form className='px-4 space-y-4'>
             <section className='grid grid-cols-12 gap-1'>
                <label className='col-span-12 ux:col-span-5 sm:col-span-3'>Profile number: 
                  <span className='ux:hidden'> only if you know  </span>
                  </label>
                <input type="text" placeholder='only if you know' 
                  className='col-span-12 ux:col-span-7 sm:col-span-4 border border-gray-400  px-3 rounded-md' 
                  id='searchHeightFrom'/>
                <p className='hidden sm:block ml-3 sm:col-start-8 sm:col-span-5'>you can click now "enter"</p>
              </section>

              <section className='grid grid-cols-12 gap-1'>
                 <label className='col-span-3'>
                  City 
                </label>
                  <input type="text" placeholder='his town or village' 
                   className='col-span-9 border border-gray-400  px-3 rounded-md' 
                   id='searchHeightFrom'/>
              </section>

              <section className='grid grid-cols-12 gap-1'>
                 <label className='col-span-3'>
                  Country 
                </label>
                  <input type="text" placeholder='' 
                   className='col-span-9 border border-gray-400  px-3 rounded-md' 
                   id='searchHeightFrom'/>
              </section>
              
              <section className='grid grid-cols-12 gap-4'>
                <div className='col-span-12 sm:col-span-3
                  w-full border-b pb-1 sm:border-0 flex gap-1'>
                  <label>
                    Distance 
                  </label>
                  <label className='sm:hidden' htmlFor="">within from</label>
                </div>

                <div className='col-span-12 sm:col-span-9 flex gap-2'>
                  <p className='hidden sm:block truncate '>within from</p>
                  <input type="text" placeholder='postal code' 
                    className='max-w-40 w-full  border border-gray-400  px-3 rounded-md' 
                    id='searchHeightFrom'/>
                  <input type="text" className='w-full max-w-16 border border-gray-400  px-3 rounded-md' id='searchHeightTo' />
                  <label>km</label>  
                </div>
         
              </section>

              <hr className='hidden sm:block'/>

             <section className='grid grid-cols-12 gap-4'>
              <div className='col-span-12 sm:col-span-4
              w-full border-b pb-1 sm:border-0'>
                  <div className='flex gap-1'>
                    <label className=''>
                      Age 
                    </label>
                    <p>range</p>
                  </div>
              </div>
              <div className='col-span-5 sm:col-span-3 flex gap-2'>
                <p>from</p>
                <input type="text" className='w-full max-w-16 border border-gray-400  px-3 rounded-md' id='searchHeightFrom'/>
              </div>
              <div className='col-span-5 sm:col-span-3   flex gap-2'>
                <p>to</p>
                <input type="text" className='w-full max-w-16 border border-gray-400  px-3 rounded-md' id='searchHeightTo' />
              </div>
              <div className='col-span-2 flex gap-2'>
                <p className='truncate'>y.o.</p>  
              </div>
            </section>

            <section className='grid grid-cols-12 gap-4'>
              <div className='col-span-12 sm:col-span-4
              w-full border-b pb-1 sm:border-0'>
                    <div className='flex gap-1'>
                      <label className=''>
                        Partnered status 
                      </label>
                    </div>
                </div>
                <div className='col-span-12 sm:col-span-8 flex gap-6'>
                <div className='flex gap-2'>
                  <input type="radio" className='w-fit border border-gray-400  px-3 rounded-md' id='searchHeightFrom'/>
                  <label htmlFor="">any</label>
                </div>
                <div className='flex gap-2'>
                  <input type="radio" className='w-fit border border-gray-400  px-3 rounded-md' id='searchHeightFrom'/>
                  <label htmlFor="">no</label>
                </div>
                <div className='flex gap-2'>
                  <input type="radio" className='w-fit border border-gray-400  px-3 rounded-md' id='searchHeightFrom'/>
                  <label htmlFor="">yes</label>
                </div>
                </div>
              </section>

              <section className='grid grid-cols-12 gap-4'>
                <label className='col-span-12 sm:col-span-4
                w-full border-b pb-1 sm:border-0'>
                  Profile name / nick 
                </label>
                  <input type="text" placeholder='' className='w-full  border border-gray-400 col-span-12 sm:col-span-8 px-3 rounded-md' id='searchHeightFrom'/>
              </section>
              
              <section className='grid grid-cols-12 gap-4'>
                <label className='col-span-12 sm:col-span-4
                w-full border-b pb-1 sm:border-0'>
                  Words in profile txt 
                </label>
                  <input type="text" placeholder='' className='w-full  border border-gray-400 col-span-12 sm:col-span-8 px-3 rounded-md' id='searchHeightFrom'/>
              </section>

            <hr className='hidden sm:block'/>

            <section className='grid grid-cols-12 gap-4'>
              <div className='col-span-12 sm:col-span-4
              w-full border-b pb-1 sm:border-0'>
                  <div className='flex gap-1'>
                    <label className=''>
                      Weight 
                    </label>
                    <p>in pounds</p>
                  </div>
              </div>
              <div className='col-span-5 sm:col-span-3 flex gap-2'>
                <p>from</p>
                <input type="text" className='w-full max-w-16 border border-gray-400  px-3 rounded-md' id='searchHeightFrom'/>
              </div>
              <div className='col-span-5 sm:col-span-3   flex gap-2'>
                <p>to</p>
                <input type="text" className='w-full max-w-16 border border-gray-400  px-3 rounded-md' id='searchHeightTo' />
              </div>
              <div className='col-span-2 flex gap-2'>
                <p className='truncate'>or</p>  
              </div>
            </section>

            <section className='grid grid-cols-12 gap-4'>
              <div className='col-span-12 sm:col-span-4
              w-full'>
                  <div className='flex gap-1'>
                    <label className=''>
                      Weight 
                    </label>
                    <p>in kg</p>
                  </div>
              </div>
              <div className='col-span-5 sm:col-span-3 flex gap-2'>
                <p>from</p>
                <input type="text" className='w-full max-w-16 border border-gray-400  px-3 rounded-md' id='searchHeightFrom'/>
              </div>
              <div className='col-span-5 sm:col-span-3   flex gap-2'>
                <p>to</p>
                <input type="text" className='w-full max-w-16 border border-gray-400  px-3 rounded-md' id='searchHeightTo' />
              </div>
              <div className='col-span-2 flex gap-2'>
                <p className='truncate'></p>  
              </div>
            </section>

            <hr className='hidden sm:block'/>

            <section className='grid grid-cols-12 gap-4'>
              <div className='col-span-12 sm:col-span-4
              w-full border-b pb-1 sm:border-0'>
                  <div className='flex gap-1'>
                    <label className=''>
                      Height 
                    </label>
                    <p>in feet</p>
                  </div>
              </div>
              <div className='col-span-5 sm:col-span-3 flex gap-2'>
                <p>from</p>
                <input type="text" className='w-full max-w-16 border border-gray-400  px-3 rounded-md' id='searchHeightFrom'/>
              </div>
              <div className='col-span-5 sm:col-span-3   flex gap-2'>
                <p>to</p>
                <input type="text" className='w-full max-w-16 border border-gray-400  px-3 rounded-md' id='searchHeightTo' />
              </div>
              <div className='col-span-2 flex gap-2'>
                <p className='truncate'>or</p>  
              </div>
            </section>

            <section className='grid grid-cols-12 gap-4'>
            <div className='col-span-12 sm:col-span-4
              w-full'>
                  <div className='flex gap-1'>
                    <label className=''>
                      Height 
                    </label>
                    <p>in cm</p>
                  </div>
              </div>
              <div className='col-span-5 sm:col-span-3 flex gap-2'>
                <p>from</p>
                <input type="text" className='w-full max-w-16 border border-gray-400  px-3 rounded-md' id='searchHeightFrom'/>
              </div>
              <div className='col-span-5 sm:col-span-3   flex gap-2'>
                <p>to</p>
                <input type="text" className='w-full max-w-16 border border-gray-400  px-3 rounded-md' id='searchHeightTo' />
              </div>
              <div className='col-span-2 flex gap-2'>
                <p className='truncate'></p>  
              </div>
            </section>


            <hr className='hidden sm:block'/>

            <section className='grid grid-cols-12 gap-4'>
              <div className='col-span-12 sm:col-span-4
                w-full flex gap-1 border-b pb-1 sm:pb-0 sm:border-0'>
                <p className=' truncate'>
                  His/her character is ...
                </p>
              </div>

             <div className='w-full col-span-12 flex gap-2 justify-between border p-2'>
             <div className='w-full flex flex-col gap-2'>
                <div className='flex  gap-1'>
                  <input type="radio" />
                  <label htmlFor="">any of the following</label>
                </div>
                <div className='flex  gap-1'>
                  <input type="radio" />
                  <label htmlFor="">all of the following</label>
                </div>
                <div className='flex  gap-1'>
                  <input type="radio" />
                  <label htmlFor="">exactly the following</label>
                </div>
              </div>

              <div className='w-full flex flex-col gap-2'>
                <div className='flex  gap-1'>
                  <input type="checkbox" />
                  <label htmlFor="">dominat</label>
                </div>
                <div className='flex  gap-1'>
                  <input type="checkbox" />
                  <label htmlFor="">submissive</label>
                </div>
                <div className='flex  gap-1'>
                  <input type="checkbox" />
                  <label htmlFor="">melancholic</label>
                </div>
              </div>
             </div>
            
            </section>

    

            <section className='grid grid-cols-12 gap-4'>
              <div className='col-span-12 sm:col-span-4
                w-full flex gap-1 border-b pb-1 sm:pb-0 sm:border-0'>
                <p className=' truncate'>
                  (S)he must seek 
                </p>
              </div>

             <div className='w-full col-span-12 flex gap-2 justify-between border p-2'>
             <div className='w-full flex flex-col gap-2'>
                <div className='flex  gap-1'>
                  <input type="radio" />
                  <label htmlFor="">any of the following</label>
                </div>
                <div className='flex  gap-1'>
                  <input type="radio" />
                  <label htmlFor="">all of the following</label>
                </div>
                <div className='flex  gap-1'>
                  <input type="radio" />
                  <label htmlFor="">exactly the following</label>
                </div>
              </div>

              <div className='w-full flex flex-col gap-2'>
                <div className='flex  gap-1'>
                  <input type="checkbox" />
                  <label htmlFor="">a date</label>
                </div>
                <div className='flex  gap-1'>
                  <input type="checkbox" />
                  <label htmlFor="">a relationship</label>
                </div>
                <div className='flex  gap-1'>
                  <input type="checkbox" />
                  <label htmlFor="">friends</label>
                </div>
              </div>
             </div>
            
            </section>

            <hr className='hidden sm:block'/>

              <section className='grid grid-cols-12 gap-4'>
              <label className='col-span-10 sm:col-span-7'>
                  Only profiles with profile text 
                </label>
                  <input type="checkbox" placeholder='' className='w-fit  border border-gray-400 col-span-1 rounded-md' id='searchHeightFrom'/>
              </section>

              <section className='grid grid-cols-12 gap-4'>
              <label className='col-span-10 sm:col-span-7'>
                  Only profiles with image
                </label>
                  <input type="checkbox" placeholder='' className='w-fit  border border-gray-400 col-span-1 rounded-md' id='searchHeightFrom'/>
              </section>

              <section className='grid grid-cols-12 gap-4'>
              <label className='col-span-10 sm:col-span-7'>
                  Only those who are online
                </label>
                  <input type="checkbox" placeholder='' className='w-fit  border border-gray-400 col-span-1 rounded-md' id='searchHeightFrom'/>
              </section>

              <section className='grid grid-cols-12 gap-4'>
                <label className='col-span-10 sm:col-span-7'>
                Only those who prefer (wo)men my age
                </label>
                  <input type="checkbox" placeholder='' className='w-fit  border border-gray-400 col-span-1 rounded-md' id='searchHeightFrom'/>
              </section>

              <section className='grid grid-cols-12 gap-4'>
                <label className='col-span-10 sm:col-span-7'>
                Include travelers
                </label>
                  <input type="checkbox" placeholder='' className='w-fit  border border-gray-400 col-span-1 rounded-md' id='searchHeightFrom'/>
              </section>

              <section className='grid grid-cols-12 gap-4'>
                <label className='col-span-10 sm:col-span-7'>
                Include future travelers
                </label>
                  <input type="checkbox" placeholder='' className='w-fit justify-end border border-gray-400 col-span-1 rounded-md' id='searchHeightFrom'/>
              </section>

              <section className='grid grid-cols-12 gap-4'>
                <label className='col-span-10 sm:col-span-7'>
                  Show only travelers
                </label>
                  <input type="checkbox" placeholder='' className='w-fit  border border-gray-400 col-span-1 rounded-md' id='searchHeightFrom'/>
              </section>

              <hr className='hidden sm:block'/>

              <section className='grid grid-cols-12 gap-4'>
                <label className='col-span-4 sm:col-span-7'>
                  Sort by
                </label>
                  <div className='w-full sm:w-1/2 sm:min-w-fit  border border-gray-400 col-span-8  sm:col-span-5 px-2 rounded-md'>
                  <select className='w-full outline-none'  id='searchHeightFrom'>
                    <option value="aga">Default</option>
                    <option value="aga">Latest login</option>
                    <option value="aga">Newest profiles</option>
                    <option value="aga">Age decreasing</option>
                  </select>
                  </div>
              </section>
              <div className='flex py-5 gap-2 w-full justify-end'>
                <button className='w-full xs:w-fit bg-yellow-300 text-black hover:text-white hover:bg-yellow-600'>Clear all</button>
                <button className='w-full xs:w-fit bg-blue-500 hover:bg-blue-700'>Search</button>
              </div>
            </form>

        </div>

        <aside>
          <div className="right_column_contain">
            <div className="right_column_posts">
              <h3>
              {t('Wel.RightColHead1')}
              </h3>
              <div className="spacer10px"></div>
              <p className='text-sm'>
              {t('Wel.RightColP1')}
              </p>
            </div>
            <div className="right_column_ads">
              <UmightLike
                h3={t('Wel.RightColAd1Head1')}
                titleName={t('Wel.RightColAd1Title1')}
                btnWord={t('Wel.RightColAd1ButtonWord1')} />
            </div>
          </div>
        </aside>

      </div>
    </div>
  )
}

export default SearchPage