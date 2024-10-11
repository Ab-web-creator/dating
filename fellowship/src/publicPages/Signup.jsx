import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import './Signup.css';
import SignupSuccessPopup from './SignupSuccessPopup';
import { useTranslation } from 'react-i18next';

const Signup = () => {

  const { t } = useTranslation();
  const [showAnnotPopup, setAnnotPopup] = useState(false);

  const params = useParams()

  const navigate = useNavigate();
  const goBack = () => {
    navigate('/')
  }

  useEffect(() => {
    const checkId = async () => {
      try {
        const { data } = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/signup/user-id-verification/${params.id}`
        )

      } catch (error) {
        navigate('/unauthorized')
      }
    }

    checkId()
  }, [])

  const [user, setUser] = useState({
    username: '',
    password: '',
    confirmPassword: '',
    _id: params.id,
  })

  const handleInput = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const isValid = Boolean(user.username) && Boolean(user.password) && Boolean(user.confirmPassword)

  const [error, setError] = useState('');
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const handleSignup = async (e) => {
    e.preventDefault();

    if (user.password !== user.confirmPassword) {
      setError(t('Signup.ErrorPasswordNoMatch'));
      return;
    }

    try {
      const { data } = await axios.put(`${process.env.REACT_APP_BACKEND_URL}/signup/`, user);

      setShowSuccessPopup(true);
    } catch (error) {
      // Handle error
      if (error.response?.status === 409) {
        setError(error.response.data.message)
      } else {
        setError(t('Signup.ErrorUnexpected'));
      }
    }
  };

  useEffect(() => {
    setError('')
  }, [user.password, user.confirmPassword])

  return (
    <div className='sign_up_korobka2'>
      <div className='sign_up'>

        {showAnnotPopup &&
          <div className="annot_hidden_container" onClick={() => setAnnotPopup(false)}>
            <main className='annotation_SU_dif'>
              <div className='annotaton_LF_subcontainer'>
                <div className='annotaton_LF_Notes_container'>
                  <article>
                    <p>{t('Signup.ArticleP1')}</p>
                    <p>{t('Signup.ArticleP2')}</p>
                    <p>{t('Signup.ArticleP3')}</p>
                    <br />
                    <p>
                    {t('Signup.ArticleP4')}
                    </p>
                    <p>{t('Signup.ArticleP5')}</p>
                    <p>{t('Signup.ArticleP6')} </p>
                    <br />

                    <p>{t('Signup.ArticleP7')}</p>
                    <div className='spacer20px'></div>

                    <p className='yellow_color'>
                    {t('Signup.ArticleYellow')}
                    </p>
                  </article>
                </div>
              </div>
            </main>
          </div>
        }

        <div className='sign_up_subcontainer' >
          <main className='annotation_SU'>
            <div className='annotaton_LF_subcontainer'>
              <div className='annotaton_LF_Notes_container'>
                <article>
                  <p>{t('Signup.ArticleP1')}</p>
                  <p>{t('Signup.ArticleP2')}</p>
                  <p>{t('Signup.ArticleP3')}</p>
                  <br />
                  <p>
                  {t('Signup.ArticleP4to6')}
                  </p>
                  <p>
                  {t('Signup.ArticleP7')}
                  </p>
                  <div className='spacer20px'></div>
                  <p className='yellow_color'>
                  {t('Signup.ArticleYellow')}
                  </p>
                </article>
              </div>
            </div>
          </main>

          <main className='login_form_component'>
            <p className='sign_up_LF'>{t('Signup.Heading')}</p>
            <div style={{ cursor: 'pointer' }}>
              <p className='spaan_from_sign_up'>
              {t('Signup.ButFirst')}<span className='link_to_annotation'>{t('Signup.OnTheLeft')}</span> 
              <span className='link_to_annotation_appears' onClick={() => setAnnotPopup(true)}>
                 {t('Signup.ClickHereNonEssential')}</span>
                {t('Signup.EndSentence')}
              </p>
            </div>

            <button
              className='login-form-close'
              onClick={goBack}
            >
              &times;
            </button>

            <div className='form-container '>

              <form onSubmit={handleSignup} autoComplete='off'>

                <div className='user-box user_ism'>
                  <input
                    type='text'
                    name='username'
                    value={user.username}
                    onChange={handleInput}
                    placeholder={t('Signup.UsernamePlaceholder')}
                  />
                  <label htmlFor='username'>{t('Signup.UsernameLabel')}</label>
                </div>

                <div className='password user-box'>
                  <input
                    type='password'
                    name='password'
                    value={user.password}
                    onChange={handleInput}

                  />
                  <label htmlFor=''>{t('Signup.PasswordLabel')}</label>
                </div>

                <div className='password confirmPassword user-box'>
                  <input
                    type='password'
                    name='confirmPassword'
                    value={user.confirmPassword}
                    onChange={handleInput}

                  />
                  <label htmlFor=''>{t('Signup.ConfirmPasswordLabel')}</label>
                </div>

                <div className="error-message">
                  {error && <p className="error">{error}</p>}
                </div>

                <button
                  className='submit-btn'
                  type='submit' disabled={!isValid}
                >
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  {t('Signup.SubmitButton')}
                </button>
              </form>
            </div>
          </main>
        </div>
        {showSuccessPopup && (
          <SignupSuccessPopup setShowSuccessPopup={setShowSuccessPopup} />
        )}
      </div>
    </div>
  );
};

export default Signup;
