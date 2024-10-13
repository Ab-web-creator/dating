import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './communities.css';

import useAuth from '../../hooks/useAuth'

import Search from '../../components/Search'
import UmightLike from '../../components/UmightLike'
import ChatThumb from './components/ChatThumb';
import CommunCreate from './components/CommunCreate';

import EventThumbNail from '../../components/EventThumbNail';
import { useTranslation } from 'react-i18next';

const Communities = () => {
  const { t } = useTranslation();
  const [search, setSearch] = useState('')
  const [isTempNotesPopupOpen, setTempNotesPopupOpen] = useState(false);

  const navigate = useNavigate();

  const handleChatRoomDeleted = () => {
    navigate('/home');
  };

  const { auth } = useAuth()
  const allowedRoles = [1111, 4444, 5555]
  const isUserAllowed = allowedRoles.some(role => auth.role.includes(role));

  const actionWrapper = (
    isUserAllowed && (
      <CommunCreate />
    )
  );

  return (

    <div className="page-root">
      <div className='topbar'>
        <div className='middle_part1'>

          <div className='icon_and_h2'>
            <div className="h2_icon_container">
              <svg version="1.1" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                <path d="m225 503c-72-9.1-135-48-174-107-8-12-12-20-12-23 0-5.7 9.2-10 14-6.4 0.91 0.76 4.6 6.2 8.2 12 41 68 116 110 195 110 79 0 152-41 194-109 8.4-13 11-16 17-14 5.8 2.4 6.8 7.1 3 15-4.8 9.5-19 29-29 41-39 46-96 76-159 82-14 1.5-43 1.3-57-0.52zm14-51c-41-4.9-72-17-102-40-17-13-35-33-35-38 0-4.8 1-6.6 4.6-8.5 4.7-2.5 8.2-0.61 15 8 13 16 32 31 52 41 72 37 162 20 212-40 8.6-10 11-12 16-10 3.8 1.6 5.3 4.1 5.3 8.7 0 2.5-1.6 5.3-6.4 11-29 34-70 58-115 65-10 1.7-41 3-48 2.1zm-57-70c-13-2.1-26-12-32-24-1.5-3.2-3.4-9-4-13l-1.2-7.3h-51c-57 0-58-0.11-68-7-7.2-5-13-14-15-23-1.6-6.5-1.6-8.6-0.49-15 3.6-20 26-44 50-56 4.1-1.9 7.6-3.6 7.9-3.8 0.25-0.2-2.1-3-5.1-6.3-16-17-19-43-7.7-65 18-35 72-37 93-3.8 14 22 12 51-5.8 70-3 3.1-5.3 5.8-5.1 5.9 0.18 0.1 3.5 1.7 7.4 3.5 11 4.9 19 11 28 19 5.8 5.7 13 14 16 19 0.087 0.15 4.1-2 8.8-4.7s9-5 9.4-5c0.42 0 3-0.97 5.7-2.1l5-2.1-7.5-7.7c-21-21-24-53-9.2-79 14-24 46-36 74-27 22 6.8 38 25 42 48 2.2 12 2.1 18-0.54 28-3 12-8.1 21-17 30l-7.3 7.6 5 2.1c2.7 1.2 5.3 2.1 5.7 2.1 0.42 0 4.7 2.2 9.4 5 4.8 2.7 8.7 4.9 8.8 4.7 2.4-4.2 9.8-13 16-19 8.4-8.2 17-14 28-19 3.9-1.8 7.2-3.4 7.4-3.5 0.18-0.1-2.1-2.7-5.1-5.9-11-11-16-27-15-41 2.8-31 25-52 55-52 32-0.05 55 24 55 55-0.023 15-4.8 27-15 38-4.2 4.5-5.2 6.2-4 6.6 0.91 0.31 5.6 2.6 11 5.2 25 13 45 37 47 57 1.6 12-5.8 28-16 36-10 6.8-11 6.9-68 6.9h-51l-1.2 7.3c-3.3 19-18 34-37 37-8.6 1.4-137 1.4-146-0.062zm147-18c12-3.5 20-16 18-28-1.5-13-21-38-39-48-18-11-31-14-53-14-22 0-35 3.6-53 14-11 6.5-27 23-34 34-4.6 8.2-4.9 9.4-4.9 17 0.039 9.2 2.6 15 9 20 7.9 6.6 7.5 6.6 82 6.6 59 0.067 69-0.16 74-1.7zm-176-49c3.4-6.7 11-17 18-24l5.2-5.4-3-4.6c-4.3-6.6-18-19-25-24-15-9.3-29-13-48-12-19 0.77-33 6.2-49 18-12 9.5-24 27-24 35 0 7.7 5.8 17 13 20 2.6 1.2 15 1.5 57 1.5l54 0.043 2.6-5.3zm318 4.1c7.1-2.7 13-12 14-20 0.052-8.5-12-26-24-36-15-12-30-18-49-18-18-0.75-33 2.8-48 12-7.2 4.3-21 17-25 24l-3 4.6 5.2 5.4c6.7 6.9 14 17 18 24l2.6 5.3h53c35 0 54-0.4 56-1.2zm-195-69c23-11 33-40 21-63-14-27-52-33-73-11-17 18-18 48-0.19 65 9.6 9.7 19 13 35 13 9.7-0.26 12-0.7 18-3.8zm-156-27c7.8-3.8 14-9.6 17-18 3.2-6.5 3.6-8.5 3.6-16-1e-3 -11-3.3-19-11-26-6.9-7-14-10-25-11-12-0.63-20 2.2-28 9.9-26 25-5.1 69 31 64 3.2-0.42 7.9-1.8 11-3.1zm305-0.58c23-12 27-43 8.2-60-8.3-7.6-16-10-27-9.7-11 0.58-18 3.6-25 11-7.4 7.4-11 16-11 26-7.7e-4 7.8 0.44 9.8 3.6 16 9.2 19 32 27 51 17zm-283-106c-3.6-2.6-5-6.8-3.5-11 1.6-4 18-15 34-23 54-26 114-26 167-0.02 16 7.7 33 19 34 23 2.4 5.8-3.4 13-9.3 12-1.5-0.37-6.7-3.4-12-6.7-34-23-78-33-119-28-28 3.7-57 15-78 30-6.3 4.6-11 5.6-14 3.1zm-71-6c-2.9-1.7-4.5-6.9-3.2-10 1.4-3.8 22-25 33-34 33-27 78-47 123-52 17-2.2 48-2.2 65-0.0033 45 5.9 89 25 123 52 11 8.8 31 30 33 34 0.83 2.2 0.79 3.9-0.15 6.2-1.5 3.7-4 5.3-8.5 5.3-2.7 0-4.9-1.8-13-11-45-49-111-76-181-71-60 3.7-114 29-152 71-8.2 9.1-10 11-13 11-1.9-0.018-4.2-0.51-5.2-1.1z" strokeWidth="5" />
              </svg>

            </div>
            <h1>{t('Com.MainHeading')}</h1>
            {/*<h1>COMMUN<span>I</span>T<span>I</span>ES</h1>*/}
          </div>
          <button
            className='temp_notes'
            title='toggle temporary dev notes'
            onClick={() => setTempNotesPopupOpen(!isTempNotesPopupOpen)}
          >
            {t('Com.DevNotesButton')}
          </button>

          <div className={`dev_notes_div temp-notes-popup ${isTempNotesPopupOpen ? 'open' : ''}`}>
            {isTempNotesPopupOpen && (
              <div className='position_relative'>
                <div className='arrow'>
                  ⬇
                </div>

                <button onClick={() => setTempNotesPopupOpen(!isTempNotesPopupOpen)}
                  className='close_temp_dev_notes'>
                  &times;
                </button>

                <div className='dev_notes2'>
                  <p className='dev_notes'>{t('Com.DevNotesHead1')}
                  </p>
                  <br />
                  <p>
                  {t('Com.DevNotesP1')}
                    <br /> <br />
                    {t('Com.DevNotesP1second')}
                  </p>
                  <br />
                  <p className=''>{t('Com.DevNotesP2')} 
                  </p>
                  <br />
                  <p className=''>{t('Com.DevNotesP3')}  </p>
                  <br />
                  <p className=''>{t('Com.DevNotesP4')}  </p>
                  <br />
                  <p className='dev_notes'>{t('Com.DevNotesHead2')}</p>
                  <br />
                  <p>
                  {t('Com.DevNotesP5')}
                  </p>
                  <br />
                  <p>
                  {t('Com.DevNotesP6')}
                  </p>
                  <br />
                  <p>
                  {t('Com.DevNotesP7')}
                  </p>
                </div>
              </div>
            )}
          </div>

          <div className='network_icons_topbar'>
            {actionWrapper}
          </div>
        </div>

        <div className="middle_part2">
          <Search setSearch={setSearch} />
        </div>
      </div>

      <div className="separate_into_two_columns">
        <main className="sep_part1">
          <div>
            <ChatThumb onChatRoomDeleted={handleChatRoomDeleted} />
          </div>
        </main>

        <aside>
          <div className="right_column_contain">
            <EventThumbNail />
            <div className="right_column_ads">
              <UmightLike
                h3="Want to attend?"
                titleName="Sport event: Volleyball"
                btnWord="Join" />
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Communities;