import React from 'react'
import './eventThumbNail.css'
import { useTranslation } from 'react-i18next';

const EventThumbNail = () => {
  const { t } = useTranslation();
  return (
    <div className="event_thumbnail">
      <header>
        <div>
          <h2 className="">{t('EventThumb.Seminar')}</h2>
          <p>18/03/2024</p>
        </div>
        <button className='see_all_events' title='click to navigate'>
          <p style={{fontSize: '0.75rem'}}>{t('EventThumb.OtherEvents')}</p>
        </button>
      </header>
      <main className='container'>
        <div className="spacer10px"></div>
        <h5 style={{color: 'green'}}> <span style={{ fontWeight: '500', color: 'gray', marginRight: '10px'}}>{t('EventCreate.Speaker')} </span> Ruzmat Xorazmiy</h5>
        <h5> <span style={{ fontWeight: '500', color: 'gray', marginRight: '10px'}}>{t('EventCreate.Topic')} </span> {t('EventThumb.DiscoveringMarriage')} </h5>
        <div className="spacer10px"></div>
        <p style={{ fontSize: '0.75rem'}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum dolor similique odio aperiam ad placeat ue, dolore temporibus ab quibusdam repellat. Perferendis, eveniet illo.</p>
        <div className="spacer20px"></div>
        <button>{t('EventCreate.MoreInfo')}</button>
      </main>
    </div>
  )
}

export default EventThumbNail