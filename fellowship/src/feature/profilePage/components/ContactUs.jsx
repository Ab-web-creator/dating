import React, { useState } from 'react';
import './contactUs.css';
import useAuth from '../../../hooks/useAuth';
import useAxiosPrivate from '../../../hooks/useAxiosPrivate';
import { useTranslation } from 'react-i18next';

const ContactUs = () => {
  const { t } = useTranslation();
  const axiosPrivate = useAxiosPrivate();
  const { auth } = useAuth();
  const [email, setEmail] = useState('');
  const [adminNote, setAdminNote] = useState(t('ContactUs.ThereAreNoAdmin'));

  const [isPopupOpen, setPopupOpen] = useState(false);
  const [goodNews, setGoodNews] = useState('');
  const [error, setError] = useState('');

  const [formData, setFormData] = useState({
    explanation: '',
  });

  const handleTextareaChange = (e) => {
    setFormData({ ...formData, explanation: e.target.value });
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSendMessage = async () => {

    const requestBody = {
      ...formData,
      userId: auth.userId,
      email: email,
      adminNote: adminNote,
    };

    const isValid = formData.explanation.trim() !== '';

    if (isValid) {
      try {
        await axiosPrivate.post(`${process.env.REACT_APP_BACKEND_URL}/api/contactUs/`, requestBody);

        setEmail('');
        setFormData({ explanation: '' });
        setGoodNews(t('ContactUs.YourMessageSent'));

        setTimeout(() => {
          setGoodNews('');
        }, 3000);

        setTimeout(() => {
          setPopupOpen(false);
        }, 7000);

      } catch (error) {
        setError(t('ContactUs.ServerError'));

        setTimeout(() => {
          setError('');
        }, 3000);

        console.error(t('ContactUs.ErrorSendingNote'), error);
      }
    } else {
      setError(t('ContactUs.DidYouWrite'));
      setTimeout(() => {
        setError('');
      }, 3000);
    }
  };



  return (
    <div className="contact_us">
      <h3> {t('ContactUs.MainHeading')} </h3>
      <ul>
        <li>
          <input type="email" value={email} onChange={handleEmailChange} placeholder={t('ContactUs.YourEmailPlaceholder')} />
        </li>
        <li>
          <textarea
            required
            id='message'
            name="message"
            cols="30"
            rows="4"
            minLength="12"
            placeholder= {t('ContactUs.YourMessagePlaceholder')} 
            value={formData.explanation}
            onChange={handleTextareaChange}
          ></textarea>
          <div className='flex_it'>
            <button onClick={handleSendMessage}>{t('ContactUs.SendButton')} </button>
            {error && (
              <div className="error">
                <div>
                  <p>{error}</p>
                </div>
              </div>
            )}
            {goodNews && (
              <div className="goodNews">
                <div>
                  {' '}
                  <p>{goodNews}</p>
                </div>
              </div>
            )}
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ContactUs;
