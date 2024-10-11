import React, { useState, useRef, useEffect } from 'react';
import myBackGroundImage from "../../images/please_wait.png";
import myImage from "../../images/refresh.png"
import './ProfileEdit.css';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import useAuth from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import CloseButton from '../../components/buttons/CloseButton';

const ProfileEdit = () => {

  const { t } = useTranslation();
  const topRef = useRef(null);

  const axiosPrivate = useAxiosPrivate()
  const { auth, setAuth } = useAuth()
  const navigate = useNavigate()

  const [user, setUser] = useState({
    // username: '',
    nick: '',
    searchName: '',
    familyStatus: '',
    childrenAmount: '',
    location: '',
    email: '',
    occupation: '',
    biography: '',
    birthDate: '',
    activity: '',
    securityLevel: '',
    backgroundImage: '',
    image: '',
    whatsapp: '',
  });

  const [error, setError] = useState('')


  const handleInput = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    })
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = () => {
        const image = new Image();
        image.src = reader.result;

        image.onload = () => {
          const canvas = document.createElement('canvas');
          const ctx = canvas.getContext('2d');

          // Set the desired width and height for the resized image
          const maxWidth = 600;
          const maxHeight = 600;

          let width = image.width;
          let height = image.height;

          // Calculate the new dimensions while maintaining the aspect ratio
          if (width > maxWidth || height > maxHeight) {
            const aspectRatio = width / height;

            if (width > height) {
              width = maxWidth;
              height = width / aspectRatio;
            } else {
              height = maxHeight;
              width = height * aspectRatio;
            }
          }

          // Set the canvas dimensions
          canvas.width = width;
          canvas.height = height;

          // Draw the image on the canvas with the new dimensions
          ctx.drawImage(image, 0, 0, width, height);

          // Convert the canvas content to a data URL with reduced resolution
          const base64String = canvas.toDataURL('image/jpeg', 0.9); // Adjust the quality as needed

          // Update the state with the reduced resolution image
          setUser({ ...user, [e.target.name]: base64String });
        };
      };

      reader.readAsDataURL(file);
    }
  };

  const [submitted, setSubmitted] = useState('')

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axiosPrivate.put(
        `${process.env.REACT_APP_BACKEND_URL}/api/users/${auth.userId}`,
        user
      )

      setSubmitted(t('ProfileEdit.SubmittedSuccessfully'))

      setAuth({
        ...auth,
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
      if (error.response?.status === 422 || error.response?.status === 409) {
        setError(error.response.data.message)
        topRef.current && topRef.current.scrollIntoView({ behavior: 'smooth' });
      } else {
        setError(t('ProfileEdit.ErrorRegistrationFailed'))
        topRef.current && topRef.current.scrollIntoView({ behavior: 'smooth' });
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
    const destination = auth.signupCompletion === 3 ? `/profile-page/${auth.userId}` : `/`
    navigate(destination)
  }

  const handleTextareaInput = (e) => {
    // Update the state with the textarea content and set the height based on scrollHeight
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });

    e.target.style.height = 'auto'; // Reset the height to auto
    e.target.style.height = e.target.scrollHeight + 'px'; // Set the height to the scrollHeight
  };


  return (
    <>
      <div className='profile_edit_container' >
        {submitted &&
          <div className='congrats_contain'>
            <div className='congrats'
              onClick={() => navigate(`/profile-page/${auth.userId}`)}>
              <div className='congr_sub'>
                <h4>{t('ProfileEdit.Congratulations')}</h4>
                <p> {submitted} </p>
                <div className="spacer20px"></div>
                <p>{t('ProfileEdit.ClickToContinue')}</p>
              </div>
              <CloseButton className="close_congrats" onClick={() => navigate(`/profile-page/${auth.userId}`)} />
            </div>
          </div>
        }

        <div className='profile_edit'
          onClick={(e) => {
            e.stopPropagation();
          }}
        >

          <header className='profile_head'>
            <div className='first_container'>
              {/* <button
                className='close_profile_edit'
                onClick={navigateOnClose}>
                &times;
              </button> */}

              <CloseButton 
              className='relative'
               onClick={navigateOnClose}
              />
              
              <div className='profile_details_inner'>
                <h6>{t('ProfileEdit.ProfileDetailsTitle')}</h6>
              </div>
            </div>
            <div className='submit-btn-container'>
              <button type="submit" className='submit-btn' onClick={handleUpdateProfile}>
              <span className='hide_VERY_sm_screen'>{t('ProfileEdit.UpdateButtonNonEssential1')} </span>
              {t('ProfileEdit.UpdateButtonEssential')}
              <span className='hide_VERY_sm_screen'>{t('ProfileEdit.UpdateButtonNonEssential2')} </span>
              </button>
            </div>
          </header>

          <div className='positionRelative' ref={topRef}>
            {error && <div className="errors">
              <p>{error}</p>
            </div>}

            <div className="my_bgImage" title={t('ProfileEdit.HaveYouPlacedAnImageBg')}>
              {user?.backgroundImage ? (
                <img
                  src={user.backgroundImage}
                  alt={t('ProfileEdit.UserBackgroundImageAlt')}
                />
              ) : (
                <img
                  src={myBackGroundImage} // Use the imported example image
                  alt={t('ProfileEdit.UploadBackgroundImageAlt')}
                />
              )}

              <input
                type="file"
                placeholder={t('ProfileEdit.UploadBackgroundImagePlaceholder')}
                accept="image/*"
                name="backgroundImage"
                onChange={handleImageChange}
                style={{ opacity: '0' }}
              />

            </div>

            <div className="round_image_container" title={t('ProfileEdit.HaveYouPlacedAnImageUser')}>

              {user?.image ? (
                <img
                  src={user?.image}
                  alt={t('ProfileEdit.UserImageAlt')}
                />
              ) : (
                <img
                  src={myImage} // Use the imported example image
                  alt={t('ProfileEdit.ExampleUserImageAlt')}
                />
              )}

              <input
                type="file"
                name="image"
                accept="image/*"
                onChange={handleImageChange}
                style={{ opacity: '0' }}

              />
            </div>
          </div>

          <form autoComplete='off'>
            <div className='two_inputs_together'>
              <div>
                <input
                  id='first_name_in_profile_add'
                  type='text'
                  name='nick'
                  value={user.nick}
                  onChange={handleInput}
                  maxLength="17"
                  placeholder= {t('ProfileEdit.FormNamePlaceholder')}
                />
                <label htmlFor='first_name_in_profile_add'>{t('ProfileEdit.FormNameLabel')}</label>
              </div>

              <div className='search_name'>
                <input
                  id='search_name_profile_add'
                  type='text'
                  name='searchName'
                  maxLength="17"
                  value={user.searchName}
                  onChange={handleInput}
                  placeholder={t('ProfileEdit.FormSearchNamePlaceholder')}
                />
                <label htmlFor='search_name_profile_add'>{t('ProfileEdit.FormSearchNameLabel')}</label>
              </div>
            </div>

            <div className='two_inputs_together'>

              <div className='my_location'>
                <input
                  id='my_location'
                  type='text'
                  name='location'
                  value={user.location}
                  onChange={handleInput}
                  placeholder={t('ProfileEdit.FormLocationPlaceholder')}
                />
                <label htmlFor='my_location'>{t('ProfileEdit.FormLocationLabel')}</label>
              </div>
              <div className='my_email'>
                <input
                  id='my_email'
                  type='email'
                  name='email'
                  value={user.email}
                  onChange={handleInput}
                  placeholder={t('ProfileEdit.FormEmailPlaceholder')}
                />
                <label htmlFor='my_email'>{t('ProfileEdit.FormEmailLabel')}</label>
              </div>

            </div>


            <div className='flex_with_hundrProcent'>

              <div className='flex_with_hundrProcent'>
                <label htmlFor='familyStatus'>{t('ProfileEdit.FormFamilyStatusLabel')}</label>
                <select
                  id='familyStatus'
                  type='text'
                  name='familyStatus'
                  value={user.familyStatus}
                  onChange={handleInput}
                  required
                >
                  <option value=''> </option>
                  <option value='Married'>{t('ProfileEdit.FormFamilyMarried')}</option>
                  <option value='Single'>{t('ProfileEdit.FormFamilySingle')}</option>
                  <option value='Divorced'>{t('ProfileEdit.FormFamilyDivorced')} </option>
                  <option value='No info about marital status'>{t('ProfileEdit.FormFamilyNoAnswer')}</option>
                </select>
              </div>

              <div className='flex_with_hundrProcent'>
                <label htmlFor='amount_of_children'>{t('ProfileEdit.FormChildrenAmountLabel')}</label>
                <select
                  id='amount_of_children'
                  type='text'
                  name='childrenAmount'
                  value={user.childrenAmount}
                  onChange={handleInput}
                  required
                >
                  <option value=''> </option>
                  <option value='0'>0</option>
                  <option value='1'>1 </option>
                  <option value='2'>2 </option>
                  <option value='3'>3 </option>
                  <option value='4 or more'>{t('ProfileEdit.MoreChidren')}</option>
                  <option value='No info about'>{t('ProfileEdit.ChildrenNoAnswer')}</option>
                </select>
              </div>
            </div>

            <div className='two_inputs_together'>
              <div >
                <input
                  id='occupation_in_profile_add'
                  type='text'
                  name='occupation'
                  maxLength="22"
                  value={user.occupation}
                  onChange={handleInput}
                  placeholder={t('ProfileEdit.OccupationPlaceholder')}
                />
                <label htmlFor='occupation_in_profile_add'>{t('ProfileEdit.OccupationLabel')}</label>
              </div>

              <div>
                <input
                  id='date_of_birth'
                  type='date'
                  name='birthDate'
                  value={user.birthDate}
                  onChange={handleInput}
                />
                <label htmlFor='date_of_birth'>{t('ProfileEdit.DateOfBirthLabel')}</label>
              </div>
            </div>

            <div className='my_biography'>
              <textarea
                id='my_biography'
                type='text'
                name='biography'
                value={user.biography}
                onChange={(e) => {
                  handleInput(e);
                  handleTextareaInput(e);
                }}
                placeholder={t('ProfileEdit.BiographyPlaceholder')}
              />
              <label htmlFor='my_biography'>{t('ProfileEdit.BiographyLabel')}</label>
            </div>
          </form>



        </div>
      </div>

    </>
  );
};

export default ProfileEdit;
