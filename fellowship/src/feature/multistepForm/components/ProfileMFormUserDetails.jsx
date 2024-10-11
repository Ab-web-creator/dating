import React, { useEffect, useState } from 'react'
import useAxiosPrivate from '../../../hooks/useAxiosPrivate'
import useAuth from '../../../hooks/useAuth'
import { useTranslation } from 'react-i18next';

const ProfileMFormUserDetails = ({ nextStep, handleChange, user, error, setError }) => {

  const { t } = useTranslation();
  const axiosPrivate = useAxiosPrivate()
  const { auth } = useAuth()

  const { nick = '', searchName = '', birthDate = '' } = user

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!nick || !searchName || !birthDate) {
      setError(t('Global.ErrorPleaseFill'))
      return
    }

    try {
      await axiosPrivate.get(`${process.env.REACT_APP_BACKEND_URL}/api/users/check-search-name-occupation/${auth.userId}?searchName=${user.searchName}`)

      nextStep()
    } catch (error) {
      if (error.response?.status === 422 || error.response?.status === 409) {
        setError(error.response.data.message)
      } else {
        setError(t('ProfileMUser.ErrorRegistration'))
      }
    }
  }

  return (
    <div className='containing_div'>
      <h2 className='font-bold'>{t('ProfileMUser.MainHeading')}</h2>

      <form onSubmit={handleSubmit}>
        <p className='keep_it_anonymous'>
          {t('ProfileMUser.PayAttention')}
          <span className='mandatory'>*</span>.
        </p>
        <div>
          <label htmlFor="firstName">
          {t('ProfileMUser.NameLabel')}<span className='mandatory'>* </span >
          </label>
          <input
            type="text"
            id="firstName"
            value={nick}
            name='nick'
            onChange={(e) => handleChange(e)}
            maxLength="17"
            placeholder={t('ProfileMUser.NamePlaceholder')}
          />
        </div>

        <div>
          <label htmlFor="lastName">
          {t('ProfileMUser.SearchNameLabel')}<span className='mandatory'>* </span >
          </label>
          <input
            type="text"
            id="lastName"
            name='searchName'
            value={searchName}
            onChange={(e) => handleChange(e)}
            maxLength="17"
            placeholder={t('ProfileMUser.SearchNamePlaceholder')}
          />

        </div>

        <div>
          <label htmlFor='dateOfBirth'>
          {t('ProfileMUser.BirthLabel')}<span className='mandatory'>* </span >
          </label>
          <input
            id='dateOfBirth'
            type='date'
            name='birthDate'
            value={birthDate}
            onChange={(e) => handleChange(e)}
            placeholder={t('ProfileMUser.BirthPlaceholder')}
          />
        </div>
      </form>

      <div className="flex_it">
        {error && <div className='searchNameAlreadyTaken'>
          <p>{error}</p>
        </div>}

        <button type="submit"
          onClick={handleSubmit}
        >{t('Global.NextButton')}</button>
      </div>
    </div>
  )
}

export default ProfileMFormUserDetails
