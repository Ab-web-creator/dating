import React, { useState, useEffect } from 'react';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import useAuth from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import ProfileMFormUserDetails from './components/ProfileMFormUserDetails';
import ProfileMContactDetails from './components/ProfileMContactDetails';
import ProfileMFormPersonalDetails from './components/ProfileMFormPersonalDetails';
import ProfileMConfirm from './components/ProfileMConfirm';
import ProfileMSuccess from './components/ProfileMSuccess';
import './profileMultiStepForm.css';
import { useTranslation } from 'react-i18next';

const ProfileMultiStepForm = () => {

  const { t } = useTranslation();
  const axiosPrivate = useAxiosPrivate()
  const { auth, setAuth } = useAuth()
  const navigate = useNavigate()

  const [error, setError] = useState('')

  const [step, setStep] = useState(1);
  const [isPopupWindowOn, setPopupWindowOn] = useState(false);

  const [user, setUser] = useState({
    nick: '',
    searchName: '',
    whatsapp: '',
    birthDate: '',
    occupation: '',
    location: '',
    familyStatus: '',
    childrenAmount: '',
    biography: '',
    activity: '',
    securityLevel: '',
    backgroundImage: '',
    image: '',
  });

  useEffect(() => {
    setError('')
  }, [user, step])

  const nextStep = () => {
    setStep(step + 1)
  }

  const prevStep = () => {
    setStep(step - 1)
  }

  const handleChange = (e) => {
    // console.log("e.target.value", e.target.value)
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    })
  };

  const handleUpdateProfile = async (e) => {

    try {
      const { data } = await axiosPrivate.put(
        `${process.env.REACT_APP_BACKEND_URL}/api/users/${auth.userId}`,
        user
      )

      setAuth({
        ...auth,
        nick: data.nick,
        searchName: data.searchName,
        birthDate: data.birthDate,
        familyStatus: data.familyStatus,
        childrenAmount: data.childrenAmount,
        location: data.location,
        occupation: data.occupation,
        biography: data.biography,
        image: data.image,
        backgroundImage: data.backgroundImage,
        signupCompletion: data.signupCompletion,
      })
      // const signupCompletionState = signupCompletion === 2 ? `/profile-page/${userId}/register` : '/home'
    } catch (error) {
      if (error.response?.status === 422 || error.response?.status === 409) {
        setError(error.response.data.message)

      } else {
        setError(t('ProfileMultiStepForm.RegistrationFailed'))
      }
    }
  }

  useEffect(() => {
    const getUserDetails = async () => {
      try {
        const { data } = await axiosPrivate.get(`${process.env.REACT_APP_BACKEND_URL}/api/users/${auth.userId}`)

        setUser(
          {
            nick: data.nick,
            searchName: data.searchName,
            birthDate: data.birthDate,
            familyStatus: data.familyStatus,
            childrenAmount: data.childrenAmount,
            location: data.location,
            email: data.email,
            occupation: data.occupation,
            biography: data.biography,
            image: data.image,
            backgroundImage: data.backgroundImage
          })

      } catch (error) {
        setError(error)
      }
    }

    getUserDetails()
  }, [])

  const navigateOnClose = () => {
    const path = auth.signupCompletion === 3 ? `/search-page` : '/';
    navigate(path)
  }

  return (
    <>
      <div className='profile_multistep_container'>
        <div className='profile_multistep'>
          <main>
            {step === 1 && (
              <ProfileMFormUserDetails
                nextStep={nextStep}
                handleChange={handleChange}
                user={user}
                error={error}
                setError={setError}
              />
            )}
            {step === 2 && (
              <ProfileMContactDetails
                nextStep={nextStep}
                prevStep={prevStep}
                handleChange={handleChange}
                user={user}
                error={error}
                setError={setError}
              />
            )}
            {step === 3 && (
              <ProfileMFormPersonalDetails
                nextStep={nextStep}
                prevStep={prevStep}
                handleChange={handleChange}
                user={user}
                error={error}
                setError={setError}
              />
            )}
            {step === 4 && (
              <ProfileMConfirm
                nextStep={nextStep}
                prevStep={prevStep}
                user={user}
                error={error}
                setError={setError}
                handleUpdateProfile={handleUpdateProfile}
              />
            )}
            {step === 5 && <ProfileMSuccess
              navigateOnClose={navigateOnClose}
            />}
          </main>
        </div>
      </div>
    </>
  );
};

export default ProfileMultiStepForm;
