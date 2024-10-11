import React, { useEffect, useState, useRef } from 'react'
import axios from 'axios'
import { useNavigate, useLocation } from 'react-router-dom'
import './login.css'
import useAuth from '../hooks/useAuth'
import { useTranslation } from 'react-i18next';
import CloseButton from '../components/buttons/CloseButton';

const Login = () => {

  const { t } = useTranslation();
  const { auth, setAuth, persist, setPersist } = useAuth()

  const navigate = useNavigate()
  const location = useLocation()

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errMsg, setErrMsg] = useState('')

  useEffect(() => {
    setErrMsg('')
  }, [username, password])

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/auth`,
        JSON.stringify({ username, password }),
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true,
        }
      )

      const accessToken = data?.accessToken
      const role = data?.role
      const userId = data?.userId
      const nick = data?.nick
      const searchName = data?.searchName
      const birthDate = data?.birthDate
      const createdAt = data?.createdAt
      const email = data?.email
      const signupCompletion = data?.signupCompletion
      const image = data?.image
      const backgroundImage = data?.backgroundImage
      const biography = data?.biography
      const boardMember = data?.boardMember

      setAuth({
        userId,
        nick,
        searchName,
        birthDate,
        username,
        createdAt,
        role,
        accessToken,
        email,
        signupCompletion,
        image,
        backgroundImage,
        biography,
        boardMember
      })

      // user with signupCompletion 2 should be navigated to path="/profile-page/:id" since he has to complete the profile details and cannot go anywhere else

      const path = signupCompletion === 2 ? `/profile-page/${userId}/register` : signupCompletion === 3 ? `/search-page` : '/';

      // if user has been already logged in, and after refresh token is expired, he is being navigated to publicPage and once logged in again, he is navigated back where he was (2 || 3)
      // const from = location.state?.from?.pathname || path
      // 1 - admin sends link, 2 - password is created, 3 - completed 
      navigate(path)
      // navigate(from, { replace: true }) // we don't want to store in history this page on back button click
    } catch (error) {
      if (!error?.response) {
        setErrMsg('No server response')
      } else if (
        error.response?.status === 400 ||
        error.response?.status === 401 ||
        error.response?.status === 403 ||
        error.response?.status === 404
      ) {
        setErrMsg(error.response.data.message)
      } else {
        setErrMsg('Login failed')
      }
    }
    // finally {
    //   setUsername('')
    //   setPassword('')
    // }
  }

  const togglePersist = () => {
    setPersist((prev) => !prev)
  }

  useEffect(() => {
    localStorage.setItem('persist', persist)
  }, [persist])

  const [isPopupWindowOn, setPopupWindowOn] = useState(false)
  const [backgroundOpacity, setBackgroundOpacity] = useState(0);

  const usernameRef = useRef(null);

  useEffect(() => {
    // set focus on the username input field when the component mounts
    if (usernameRef.current) {
      usernameRef.current.focus();
    }
  }, [isPopupWindowOn]);


  const handleKeyDown = (e) => {
    // check if the Tab key is pressed
    if (e.key === 'Tab') {
      e.preventDefault(); // prevent the default tab behavior

      // programmatically focus on the next input field
      if (usernameRef.current && e.target.id === 'username') {
        // If the current input field is the username, focus on the password field
        usernameRef.current.blur(); // blur the current field
        // Optionally, you can add a delay to ensure the blur completes before focusing on the next field
        setTimeout(() => {
          // Focus on the password input field
          document.getElementById('password').focus();
        }, 0);
      }
    }
  };


  return (
    <section className='authContainer'>
      {/* {
        errMsg ? (
          <div className='authErrorMessageContainer' >
            <p className='authErrorMessage'>{errMsg}</p>
          </div>
        ) : (
          <div className='authErrorMessageContainer'></div>
        )
      } */}

      <button className='header_login_btn' onClick={() => {
        setPopupWindowOn(true);
        setBackgroundOpacity(0.8);
      }}>
        <p className='bu_menudagi_login'>{t('Login.Button')}</p>
      </button>

      {isPopupWindowOn && (
        <div className='login_form_container'
      
          onKeyDown={handleKeyDown} // listen for keydown events on the container
          tabIndex='0' // make the container focusable
        >

          <div className='login_box'
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <CloseButton onClick={() => setPopupWindowOn(false)} className='right-5 top-5' />            
            <h2>{t('Login.LoginHeading')}</h2>
            <form className='authInputsContainer simple_form_to_login' onSubmit={handleSubmit}>
              <div className="user-box">
                <input
                  ref={usernameRef}
                  id='username'
                  autoComplete='off'
                  onChange={(e) => setUsername(e.target.value)}
                  value={username}
                  required
                  type='text'
                // placeholder='User name'
                />
                <label htmlFor='username' >{t('Login.UsernameLabel')}</label>
              </div>
              <div className="user-box last_box">
                <input
                  type='password'
                  id='password'
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  required
                // placeholder='Password'
                />
                <label htmlFor='password' >{t('Login.PasswordLabel')}</label>
              </div>
              {
                errMsg ? (
                  <div className='authErrorMessageContainer' >
                    <p className='authErrorMessage'>{errMsg}</p>
                  </div>
                ) : (
                  <div className='authErrorMessageContainer'>
                    <p>&#8203;</p>
                  </div>
                )
              }
              <button className='authButton submit-btn'>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                {t('Login.Enter')}
              </button>
            </form>

            <div className='authPersistContainer trust_this_device'>
              <input
                type='checkbox'
                id='persist'
                onChange={togglePersist}
                checked={persist}
              />
              <label htmlFor='persist'
                style={{ verticalAlign: '2px' }}
              >{t('Login.SavePassword')}</label>
            </div>
          </div>
        </div>
      )}
    </section >
  )
}

export default Login