import React, { useState } from 'react';
import './askSupport.css';
import useAxiosPrivate from '../hooks/useAxiosPrivate';
import { useTranslation } from 'react-i18next';

const AskSupport = ({ icon, className, auth, selectedUser }) => {

  const { t } = useTranslation();
  const axiosPrivate = useAxiosPrivate()

  const [isPopupOpen, setPopupOpen] = useState(false);
  const [goodNews, setGoodNews] = useState('')
  const [error, setError] = useState('')

  const [formData, setFormData] = useState({
    role: '',
    retainCurrentRole: '',
    securityLevel: '',
    activity: '',
    explanation: ''
  });

  const handleButtonClick = () => {
    setPopupOpen(!isPopupOpen);
  };

  const handleSelectChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleTextareaChange = (e) => {
    setFormData({ ...formData, explanation: e.target.value });
  };


  const handleSendButtonClick = async (e) => {

    const requestBody = {
      ...formData,
      userId: auth.userId,
      teacherId: selectedUser.teacher._id || null,
      learnerId: selectedUser.learner._id || null,
    };

    e.preventDefault()
    if (isValid) {
      try {
        await axiosPrivate.post(`${process.env.REACT_APP_BACKEND_URL}/api/askSupport/`, requestBody)

        setGoodNews(t('AskSupport.Accepted'))

        setTimeout(() => {
          setGoodNews('');
        }, 4000);

        setTimeout(() => {
          setPopupOpen(false);
        }, 5000);
      }
      catch (error) {
        setError('Server side error, try later')
        setTimeout(() => {
          setError('');
        }, 6000);

        console.error('Error sending note:', error);
      }
    } else {
      setError('U have to choose at least one option out of three. However, if you choose #1, you must check also if s(he) should retain his/her role!')
      setTimeout(() => {
        setError('');
      }, 6000);
    }
  };

  const isValid =
    (Boolean(formData.role) && Boolean(formData.retainCurrentRole)) ||
    // If role is chosen, retainCurrentRole must also be chosen
    (Boolean(formData.retainCurrentRole) && Boolean(formData.role)) ||
    // If retainCurrentRole is chosen, role must also be chosen
    (!Boolean(formData.role) && !Boolean(formData.retainCurrentRole) && (Boolean(formData.securityLevel) || Boolean(formData.activity)));
  // If neither role nor retainCurrentRole is chosen, then either securityLevel or activity must be chosen


  return (
    <>
      <button className={className} title='ask support' onClick={handleButtonClick}>
        {icon}
      </button>

      {isPopupOpen && (
        <div className="ask_support_bg" onClick={handleButtonClick}>
          <div className='ask_support_subcontainer'
            onClick={(e) => {
              e.stopPropagation();
            }}>
            <div className='ask_support'>
              <h2>Ask the Support Team to:</h2>
              <main>
                <div className='item'>
                  <p> #1. give him the <span>role</span>  of:</p>
                  <select
                    name="choose_role"
                    id=""
                    value={formData.role}
                    onChange={(e) => handleSelectChange('role', e.target.value)}
                  >
                    <option value="">--choose one--</option>
                    <option value="admin">admin</option>
                    <option value="mentor">mentor</option>
                    <option value="coach">coach</option>
                    <option value="encourager">encourager</option>
                    <option value="writer">writer</option>
                    <option value="moderator">moderator</option>
                  </select>
                </div>

                <div className='item'>
                  <p>  ... while <span>keeping</span>  current  role? </p>
                  <select
                    name="choose_role"
                    id=""
                    value={formData.retainCurrentRole}
                    onChange={(e) => handleSelectChange('retainCurrentRole', e.target.value)}
                  >
                    <option value="">--choose one--</option>
                    <option value="retainCurrentRole">yes, retain it as well</option>
                    <option value="doNotRetainCurrentRole">no, don't retain</option>
                  </select>
                </div>

                <div className='or'>
                  AND / OR
                </div>

                <div className='item'>
                  <p>  #2. change his <span>security level</span>:</p>
                  <select
                    name="choose_role"
                    id=""
                    value={formData.securityLevel}
                    onChange={(e) => handleSelectChange('securityLevel', e.target.value)}
                  >
                    <option value="">--choose one--</option>
                    <option value="high">to high</option>
                    <option value="low">to low</option>
                  </select>
                </div>

                <div className='or'>
                  AND / OR
                </div>

                <div className='item'>
                  <p> #3. change his/her <span>activity</span>:</p>
                  <select
                    name="choose_role"
                    id=""
                    value={formData.activity}
                    onChange={(e) => handleSelectChange('activity', e.target.value)}
                  >
                    <option value="">--choose one--</option>
                    <option value="active">to active status</option>
                    <option value="frozen">to frozen status</option>
                  </select>
                </div>

                <div className='item'>
                  <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="7"
                    placeholder='Write  your explanation (recommended)'
                    value={formData.explanation}
                    onChange={handleTextareaChange}
                  ></textarea>
                </div>

                <footer>
                  <button className='send_btn' onClick={handleSendButtonClick}>
                    Send
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
            </div>

            <button className='close_ask_support' onClick={handleButtonClick}>
              &times;
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default AskSupport;
