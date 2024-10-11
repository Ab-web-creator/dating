import React from 'react';
import { useTranslation } from 'react-i18next';

const ProfileMFormPersonalDetails = ({ nextStep, prevStep, handleChange, user, error, setError }) => {

  const { t } = useTranslation();
  const { location = '', familyStatus = '', childrenAmount = '', biography = '' } = user;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!location || !familyStatus || !childrenAmount || !biography) {
      setError(t('Global.ErrorPleaseFill'))
      return
    }
    nextStep()
  }

  return (
    <div className='containing_div'>
      <h2>{t('ProfileMFormPersonal.MainHeading')}</h2>
      <form>
        <p className='keep_it_anonymous'>{t('ProfileMFormPersonal.LocationCanBe')}</p>

        <div>
          <label htmlFor="location">
          {t('ProfileMFormPersonal.LocationLabel')}<span className='mandatory'>* </span >
          </label>
          <input
            type="text"
            id="location"
            name="location"
            value={location}
            onChange={(e) => handleChange(e)}
          />
        </div>

        <div className='family_children'>
          <div className='flex_with_hundrProcent'>
            <label htmlFor='familyStatus'>
            {t('ProfileMFormPersonal.FamilyStatusLabel')}<span className='mandatory'>* </span >
            </label>
            <select
              id='familyStatus'
              type='text'
              name='familyStatus'
              value={familyStatus}
              onChange={(e) => handleChange(e)}
              required
            >
              <option value=''> </option>
              <option value='Married'>{t('ProfileMFormPersonal.Married')}</option>
              <option value='Single'>{t('ProfileMFormPersonal.Single')} </option>
              <option value='Divorced'>{t('ProfileMFormPersonal.Divorced')} </option>
              <option value='No info about marital status'>{t('ProfileMFormPersonal.FamilyNoAnswer')}</option>
            </select>
          </div>

          <div className='flex_with_hundrProcent'>
            <label htmlFor='amount_of_children'>
            {t('ProfileMFormPersonal.ChildrenAmountLabel')}<span className='mandatory'>* </span > </label>
            <select
              id='amount_of_children'
              type='text'
              name='childrenAmount'
              value={childrenAmount}
              onChange={(e) => handleChange(e)}
              required
            >
              <option value=''> </option>
              <option value='0'>0</option>
              <option value='1'>1 </option>
              <option value='2'>2 </option>
              <option value='3'>3 </option>
              <option value='4 or more'>{t('ProfileMFormPersonal.MoreChidren')}</option>
              <option value='No info about'>{t('ProfileMFormPersonal.ChildrenNoAnswer')}</option>
            </select>
          </div>
        </div>

        <div>

          <label htmlFor="bio">
          {t('ProfileMFormPersonal.BiographyLabel')}<span className='mandatory'>* </span ></label>
          <textarea
            id="bio"
            name="biography"
            rows={4}
            value={biography}
            onChange={(e) => handleChange(e)}
          />
        </div>

      </form>

      <div className='two_buttons'>
        {error && <div className='searchNameAlreadyTaken'>
          <p>{error}</p>
        </div>}
        <button onClick={prevStep}>{t('Global.PreviousButton')}</button>
        <button
          onClick={handleSubmit}
        >{t('Global.NextButton')}</button>
      </div>

    </div>
  );
};

export default ProfileMFormPersonalDetails;
