import React, { useState } from 'react';
import { format } from 'date-fns';
import './eventCreate.css'

import report from '../images/flag.png';
import share from '../images/share.png';
import create_event from '../images/create_event.png';
import { useTranslation } from 'react-i18next';

const EventCreate = () => {

  const { t } = useTranslation();
  const [formattedDate, setFormattedDate] = useState('');

  const [isPopOn, setPopOn] = useState(false);
  const [selectedColor, setSelectedColor] = useState('black');

  const [realTimeEventName, setRealTimeEventName] = useState(t('EventCreate.ExEventName'));
  const [realTimeGroupName, setRealTimeGroupName] = useState(t('EventCreate.ExSpeakersName'));
  const [realTimeDate, setRealTimeDate] = useState(t('EventCreate.ExDate'));
  const [realTimeDescription, setRealTimeDescription] = useState(t('EventCreate.ExDescription'));
  const [realTimeCommonInterest, setRealTimeCommonInterest] = useState(t('EventCreate.ExTopic'));

  const [nameError, setNameError] = useState('');
  const [descriptionError, setDescriptionError] = useState('');
  const [commonInterestError, setCommonInterestError] = useState('');

  const [formData, setFormData] = useState({
    eventName: '',
    groupName: '',
    groupDescription: '',
    commonInterest: '',
    selectedColor: 'black',
    selectedImage: '',
    selectedTheme: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if there are errors, and if so, prevent form submission
    if (nameError || descriptionError || commonInterestError) {
      return;
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === 'eventDate') {
      setRealTimeDate(value);
      const formattedDate = format(new Date(value), '29/02/2024');
      setFormattedDate(formattedDate);  // Update the formattedDate state
      setFormData({
        ...formData,
        [name]: formattedDate,
      });
    }
    else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }

    if (name === 'selectedColor') {
      setSelectedColor(value);
    }


    if (name === 'groupName') {
      if (value.length < 4 || value.length > 17) {
        setNameError(t('EventCreate.Enter4or17Caracters'));
      } else {
        setNameError('');
      }
    }

    if (name === 'groupDescription') {
      if (value.length < 5 || value.length > 100) {
        setDescriptionError(t('EventCreate.Enter4or57Caracters'));
      } else {
        setDescriptionError('');
      }
    }

    if (name === 'commonInterest') {
      if (value.length < 4 || value.length > 57) {
        setCommonInterestError(t('EventCreate.Enter4or57Caracters'));
      } else {
        setCommonInterestError('');
      }
    }

    setFormData({
      ...formData,
      [name]: value,
    });

    if (name === 'groupName') {
      setRealTimeGroupName(value);
    } else if (name === 'eventName') {
      setRealTimeEventName(value);
    } else if (name === 'groupDescription') {
      setRealTimeDescription(value);
    } else if (name === 'commonInterest') {
      setRealTimeCommonInterest(value);
    }
    // } else if (name === 'commonInterest') {
    //   setRealTimeCommonInterest(value);
    // }
  };

  return (
    <div style={{ margin: 'auto', marginRight: '0px' }}>
  
      <button
        title= {t('EventCreate.CreateNewButton')}
        className="event_open_button"
        onClick={() => {
          setPopOn(true);
        }}
      >
        {t('EventCreate.EventButton')}
      </button>
    

      {isPopOn && (
        <div className='event_create_container'
          onClick={() => setPopOn(false)} >
          <div className='event_create' onClick={(e) => {
            e.stopPropagation();
          }} >

            <button className="close_event_create" onClick={() => setPopOn(false)}>
              &times;
            </button>

            <div className="two_column_contain">
              <form onSubmit={handleSubmit} className='webinar_form'>
              <h2> 
                {t('EventCreate.MainHeading')}
                {/* Cr<span>e</span>at<span>e</span> an <span>e</span>v<span>e</span>nt */}
              </h2>
                <div>
                  <div className='container_of_two'>
                    <div>
                      <label> <span className='mandatory'>* </span > {t('EventCreate.WhatKind')} </label>
                      <input
                        type="text"
                        name="eventName"
                        // style={{ textAlign: "center" }}
                        placeholder={t('EventCreate.WhatKindPlaceholder')}
                        value={formData.eventName}
                        maxLength="17"
                        onChange={handleInputChange}
                        autoComplete="off"
                      // dir="rtl"
                      />

                      <div className="for_error">

                      </div>
                    </div>

                    <div className="event_date_container">
                      <p className='enter_the_date'>  <span className='mandatory'>* </span > {t('EventCreate.EnterDate')} </p>
                      <div className='date_of_event_div'>
                        <label htmlFor='date_of_event' className='even_date'>
                          <span className='mandatory'>* </span > {t('EventCreate.WhenHappens')} </label>
                        <input
                          id='date_of_event'
                          type='date'
                          name='eventDate'
                          value={formData.eventDate}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>


                  </div>

                  <div className='container_of_two topic_describing'>
                    <div>
                      <label><span className='mandatory'>* </span > {t('EventCreate.Topic')}</label>
                      <input
                        type="text"
                        name="commonInterest"
                        placeholder={t('EventCreate.TopicPlaceholder')}
                        value={formData.commonInterest}
                        onChange={handleInputChange}
                        maxLength="57"
                        autoComplete="off"
                      />
                      <div className="for_error">
                        {commonInterestError && <p className="error-message">{commonInterestError}</p>}
                      </div>
                    </div>

                    <div>
                      <label> <span className='mandatory'>* </span > {t('EventCreate.WhoSpeakers')} </label>
                      <input
                        type="text"
                        name="groupName"
                        // style={{ textAlign: "center" }}
                        placeholder={t('EventCreate.WhoSpeakersPlaceholders')}
                        value={formData.groupName}
                        maxLength="17"
                        onChange={handleInputChange}
                        autoComplete="off"
                      // dir="rtl"
                      />
                      <div className="for_error">
                        {nameError && <p className="error-message">{nameError}</p>}
                      </div>
                    </div>
                  </div>

                  <div className="container_of_two event_describing">
                    <div>
                      <label> <span className='mandatory'>* </span > {t('EventCreate.EventDescription')}</label>
                      <input
                        type="text"
                        name="groupDescription"
                        placeholder={t('EventCreate.EventDescriptionPlaceholders')}
                        value={formData.groupDescription}
                        onChange={handleInputChange}
                        maxLength="140"
                        autoComplete="off"
                      />

                      <div className="for_error">
                        {descriptionError && <p className="error-message">{descriptionError}</p>}
                      </div>

                    </div>

                    <div className='pick_color'>
                      <label htmlFor="">{t('EventCreate.PickColor')}</label>
                      <select
                        name="selectedColor"
                        value={formData.selectedColor}
                        onChange={handleInputChange}
                      >
                        <option value="black">{t('EventCreate.ColorBlack')}</option>
                        <option value="red">{t('EventCreate.ColorRed')}</option>
                        <option value="blue">{t('EventCreate.ColorBlue')}</option>
                        <option value="green">{t('EventCreate.ColorGreen')}</option>
                        <option value="purple">{t('EventCreate.ColorPurple')}</option>
                        <option value="gold">{t('EventCreate.ColorGold')}</option>
                      </select>
                    </div>
                  </div>

                  <button type="submit"
                    className={`submit_btn ${nameError || descriptionError || commonInterestError ? 'disabled-button' : ''}`}
                    disabled={nameError || descriptionError || commonInterestError || !formData.selectedImage}>
                    {t('EventCreate.EnterMoreDetails')}
                  </button>

                </div>


              </form>
              {/* </div> */}

              <aside>

                <div className="heading">
                  <h4 style={{ textAlign: 'center' }}>{t('EventCreate.YourFormDisplayed')}</h4>
                </div>
                <div className="appearance">
                  <header title={t('EventCreate.KnockTheDoor')}>
                    <div>
                      <h4> {realTimeEventName}: <span style={{ fontSize: '12px' }}>{formattedDate} </span></h4>
                    </div>

                    <div className='report_div' title={t('EventCreate.ReportThisEvent')}>
                      <img src={report} alt="" />
                    </div>
                  </header>

                  <main className="event_info">

                    <div>
                      <h4 className={selectedColor + 'Text'}
                        title={t('EventCreate.TopicOfGroup')}>
                        <span>{t('EventCreate.Topic')}</span> {realTimeCommonInterest}
                      </h4>

                      <div>
                        <h4 className="">{t('EventCreate.Speaker')} {realTimeGroupName}
                        </h4>
                      </div>
                    </div>


                    <div className="annotatie">
                      <p>{realTimeDescription}</p>
                    </div>

                    <button className='more_info_btn'>
                    {t('EventCreate.MoreInfo')}
                    </button>

                    <div className='share_div' title='share this information with others'>
                      <img src={share} alt="" />
                    </div>
                  </main>
                </div>
                <div className='warning'>
                  <span>{t('EventCreate.Caution')}</span> {t('EventCreate.PleaseTho')}
                </div>
              </aside>
            </div>
          </div >
        </div >
      )}
    </div>
  )
}

export default EventCreate