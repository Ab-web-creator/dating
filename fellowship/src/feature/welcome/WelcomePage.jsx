import React from 'react'
import UmightLike from '../../components/UmightLike'
import './welcomePage.css'

import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../../components/LanguageSwitcher'

const WelcomePage = () => {
  const { t } = useTranslation();

  return (
    <div className='minister-home  welcome_page'>
      <div className='topbar'>
        <div className='middle_part1'>
          <div className='icon_and_h2' >
            <h1>
              S<span>e</span>arch profil<span>e</span>s
            </h1>
            <LanguageSwitcher />
          </div>
        </div>
        <div className="middle_part2">
        </div>
      </div>

      <div className="separate_into_two_columns">
        <div className='sep_part1'>
            <div className='px-4 sm:px-5 py-6'>
              <p>
              Here you can search for profiles that match specific criteria. Leaving a field blank will disregard it in the search.
              </p>
            </div>

            <form className='px-4 space-y-4 '>
             <section className='grid grid-cols-10 gap-1 w-full'>
                <label className='col-span-10 ux:col-span-7   sm:col-span-6'>Profile number: 
                  <span className='sm:hidden'> if you know  </span>
                  </label>
                <input type="text" className='col-span-10 ux:col-span-3 xs:col-span-3 sm:col-span-2  border border-gray-400  px-3 rounded-md' id='searchHeightFrom'/>
                <p className='pl-2 hidden sm:block sm:col-span-2'> if you know  </p>
              </section>

             <section className='grid grid-cols-10 gap-1 w-full'>
                <label className='col-span-2 ux:col-span-4 sm:col-span-6'>
                  Age
                </label>
                <div className='col-span-4 ux:col-span-3 sm:col-span-2 flex gap-2'>
                  <p>from</p>
                  <input type="text" className='w-full border border-gray-400  px-3 rounded-md' id='searchHeightFrom'/>
                </div>
                <div className='col-span-4 ux:col-span-3 sm:col-span-2 flex gap-2'>
                  <p className='pl-2'>to</p>
                  <input type="text" className='w-full border border-gray-400  px-3 rounded-md' id='searchHeightTo' />
                </div>
              </section>

              <section className='sm:pt-3 space-y-4'>
                <div className='grid grid-cols-10 gap-1 w-full'>
                  <label className='border border-gray-200 bg-gray-100 px-4 mb-2 rounded-md ux:border-0 ux:p-0 ux:mb-0  ux:bg-white col-span-10 ux:col-span-2'>
                    Height
                  </label>
                  <p className='col-span-2 sm:col-span-4'>
                    feet
                  </p>
                  <div className='col-span-4 ux:col-span-3  sm:col-span-2 flex gap-2'>
                    <p>from</p>
                    <input type="text" className='w-full border border-gray-400  px-3 rounded-md' id='searchHeightFrom'/>
                  </div>
                  <div className='col-span-4 ux:col-span-3 sm:col-span-2 flex gap-2'>
                  <p className='pl-2'>to</p>
                  <input type="text" className='w-full border border-gray-400  px-3 rounded-md' id='searchHeightTo' />
                  </div>
                </div>

                <div className='grid grid-cols-10 gap-1 w-full'>
                <label className='col-span-10 ux:col-span-2'></label>
                  <p className='col-span-2 sm:col-span-4'>
                    cm</p>
                  <div className='col-span-4 ux:col-span-3  sm:col-span-2 flex gap-2'>
                    <p>from</p>
                    <input type="text" className='w-full border border-gray-400  px-3 rounded-md' id='searchHeightFrom'/>
                  </div>
                  <div className='col-span-4 ux:col-span-3 sm:col-span-2 flex gap-2'>
                  <p className='pl-2'>to</p>
                  <input type="text" className='w-full border border-gray-400  px-3 rounded-md' id='searchHeightTo' />
                  </div>
                </div>
              </section>
              <section>
                dll
              </section>
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

export default WelcomePage