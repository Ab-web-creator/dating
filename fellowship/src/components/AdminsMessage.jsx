import React, { useState, useEffect } from 'react';
import useAxiosPrivate from '../hooks/useAxiosPrivate';
import useAuth from '../hooks/useAuth';

import './adminsMessage.css';
import mail from '../images/new_email_clr.png';
import bin from '../images/bin.png';
import { useTranslation } from 'react-i18next';

const AdminsMessage = () => {

  const { t } = useTranslation();
  const [adminMessages, setAdminMessages] = useState([]);
  const axiosPrivate = useAxiosPrivate()
  const { auth } = useAuth()

  const fetchAdminMessages = async () => {
    try {
      const { data } = await axiosPrivate.get(`${process.env.REACT_APP_BACKEND_URL}/api/admin-messages/${auth.userId}`)
      setAdminMessages(data)
    } catch (error) {
      console.log(error)
    }
  };

  useEffect(() => {
    fetchAdminMessages();
  }, []);

  const [selectedAdminMessage, setSelectedAdminMessage] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const handleDirectMessageClick = (message) => {
    setSelectedAdminMessage(message);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };


  const deleteAdminsMessage = async (aMessage) => {
    try {
      await axiosPrivate.delete(`${process.env.REACT_APP_BACKEND_URL}/api/admin-messages/${aMessage}`);

      setAdminMessages(prevMessages => prevMessages.filter(message => message._id !== aMessage));
    } catch (error) {
      console.log(error);
    }
  };



  return (
    <>
      {adminMessages
        .filter(element => element.receiver === auth.userId)
        .map((element, index) => (
          <article
            className='direct_message_contain'
            key={index}
            onClick={() => handleDirectMessageClick(element)}
          >
            <div className='image_contain'>
              <img src={mail} alt='' />
            </div>
            <p>
            {t('AdminsMessage.FromAdmin')} &#8205; &#8205;{' '}
              <span>
                <span>{element.content}</span>
              </span>
            </p>
            <main>
              <p> &#8205; &#8205; &#8205; </p>
            </main>

            <div className='trashing_bin'
              onClick={(e) => {
                e.stopPropagation();
                deleteAdminsMessage(element._id)
              }}
            >
              <img src={bin} alt='' />
            </div>
          </article >
        ))}

      {
        showPopup && (
          <div className='direct_message_contain_popup'>
            <div className='popup-content'>
              <div className='flex_applied'>
                <div>
                </div>
                <div className='your_message_was'>
                  <h4>{t('AdminsMessage.YouPreviously')}</h4>
                  <p > {selectedAdminMessage?.hisMessage}</p>

                </div>
              </div>
              <div className='admins_response'>
                <h4>{t('AdminsMessage.AdminResponded')}</h4>
                <p>{selectedAdminMessage?.content}</p>
              </div>

              <div className="notice">
                <p>
                {t('AdminsMessage.IfYouAreSatisfied')} 
                </p>
                <button
                  onClick={(e) => {
                    deleteAdminsMessage(selectedAdminMessage?._id);
                    closePopup();
                  }}
                >
                  {t('AdminsMessage.DeleteButton')}
                </button>
              </div>

              <button className='close_popup'
                onClick={closePopup}>
                &times;
              </button>
            </div>
          </div>
        )
      }

    </>
  );
};

export default AdminsMessage;
