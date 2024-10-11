import React from 'react'
import './UmightLike.css'
import example from '../images/example_avatar2.jpg';
import example2 from '../images/example_avatar.jpg';
import { useTranslation } from 'react-i18next';

const UmightLike = ({ h3, titleName, btnWord }) => {
  const { t } = useTranslation();
  return (
   <div className='right_column_ads'>
     <div className='you_might_like_contain '>
      <h3 className='text-gray-600 font-bold'>{h3}</h3>
      <ul>
        <li className='first-child'>
          <div>
            <div><img src={example} alt="" /></div>
            <div>
              <h5> {titleName} </h5>
              <p>{t('UMight.Ad1Title1')}</p>
            </div>
          </div>
          <div>
            <button> {btnWord} </button>
          </div>
        </li>
        <li>
          <div>
            <div><img src={example2} alt="" /></div>
            <div>
              <h5>{t('UMight.Ad2Head1')}</h5>
              <p>{t('UMight.Ad2Title1')}</p>
            </div>
          </div>
          <div>
            <button>{btnWord}</button>
          </div>
        </li>
        <li className='last-child'>
          <h4>{t('UMight.ShowMore')}</h4>
        </li>
      </ul>
    </div>
   </div>
  )
}

export default UmightLike