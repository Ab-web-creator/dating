
import React, { useState } from 'react';

import useAxiosPrivate from '../../../hooks/useAxiosPrivate';
import useAuth from '../../../hooks/useAuth';

import './reportPostButton.css'
import { useTranslation } from 'react-i18next';

const ReportPostButton = ({ post, onClose }) => {

  const { t } = useTranslation();
  const axiosPrivate = useAxiosPrivate()
  const { auth } = useAuth()

  // const [isPopupOpen, setPopupOpen] = useState(false);
  const [goodNews, setGoodNews] = useState('')
  const [error, setError] = useState('')

  const [formData, setFormData] = useState({
    explanation: ''
  });

  // const handleButtonClick = () => {
  //   setPopupOpen(!isPopupOpen);
  // };

  const handleSelectChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleTextareaChange = (e) => {
    setFormData({ ...formData, explanation: e.target.value });
  };

  const handlePostReport = async (e) => {

    const requestBody = {
      ...formData,
      userId: auth.userId,
      postId: post._id,
    };

    e.preventDefault()
    if (isValid) {
      try {
        await axiosPrivate.post(`${process.env.REACT_APP_BACKEND_URL}/api/reportPost/`, requestBody)

        setGoodNews(t('ReportPostButton.Accepted'))
        setTimeout(() => {
          setGoodNews('');
        }, 4000);

        setTimeout(() => {
          onClose();
        }, 4000);

      }
      catch (error) {
        setError(t('ReportPostButton.ServerError'))
        setTimeout(() => {
          setError('');
        }, 6000);

        console.error(t('ReportPostButton.ErrorSendingNote'), error);
      }
    } else {
      setError(t('ReportPostButton.DidYouWrite'))
      setTimeout(() => {
        setError('');
      }, 3000);
    }
  };

  const isValid =
    (Boolean(formData.explanation));

  return (

    <div className="report_post_container"
      onClick={onClose}>


      <div className='report_post' onClick={(e) => {
        e.stopPropagation();
      }}>
        <h2>{t('ReportPostButton.MainHeading')}
          <br />
          <span>{t('ReportPostButton.PostIdAndName')}</span>
        </h2>

        <main>

          <div className='item'>
            <textarea
              name=""
              id=""
              cols="30"
              rows="7"
              placeholder={t('ReportPostButton.WritePlaceholder')}
              value={formData.explanation}
              onChange={handleTextareaChange}
            ></textarea>
          </div>

          <footer>
            <button className='send_btn' onClick={handlePostReport}>
            {t('ReportPostButton.SendButton')}
            </button>

            {error &&
              <div className='error'>
                <div>
                  <p>{error}</p>
                </div>
              </div>

            }
            {goodNews &&
              <div className='goodNews'>
                <div> <p >{goodNews}</p></div>
              </div>
            }
          </footer>

        </main>
        <button className='close_report_post'
          onClick={onClose}>
          &times;
        </button>
      </div>



    </div>
  )
}

export default ReportPostButton