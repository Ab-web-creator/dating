import React, { useState } from 'react';
import './communCreate.css';

import useAxiosPrivate from '../../../hooks/useAxiosPrivate'
import useAuth from '../../../hooks/useAuth';

import create_group from '../../../images/commune_create.png';
import door from '../../../images/enter.png';
import report from '../../../images/flag.png';
import share from '../../../images/share.png';

import commty0 from '../../../images/commty0.png';
import commty1 from '../../../images/commty1.jpeg';
import commty2 from '../../../images/commty2.jpeg';
import commty3 from '../../../images/commty3.jpg';
import commty4 from '../../../images/commty4.png';
import commty5 from '../../../images/commty5.png';
import commty6 from '../../../images/commty6.png';
import commty7 from '../../../images/commty7.png';
import commty8 from '../../../images/commty8.jpg';
import CloseButton from '../../../components/buttons/CloseButton';
import { useTranslation } from 'react-i18next';

const CommunCreate = () => {
  const { t } = useTranslation();
  const { auth } = useAuth()
  const axiosPrivate = useAxiosPrivate()

  const [selectedColor, setSelectedColor] = useState('black');
  const [selectedImage, setSelectedImage] = useState(commty0);

  const [isPopOn, setPopOn] = useState(false);
  const [isImgVisible, setIsImgVisible] = useState(true);

  const [formData, setFormData] = useState({
    groupName: '',
    groupDescription: '',
    commonInterest: '',
    selectedColor: '',
    selectedImage: '',
    selectedTheme: '',
  });

  const [realTimeGroupName, setRealTimeGroupName] = useState(t('CommunCreate.ExampleName'));
  const [realTimeDescription, setRealTimeDescription] = useState('');
  const [realTimeCommonInterest, setRealTimeCommonInterest] = useState(t('CommunCreate.ExampleCommonInt'));

  const [nameError, setNameError] = useState('');
  const [descriptionError, setDescriptionError] = useState('');
  const [commonInterestError, setCommonInterestError] = useState('');
  const [selectedImageError, setSelectedImageError] = useState('');

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const toggleContent = () => {
    setIsImgVisible(!isImgVisible);
  };

  const formatImagePath = (fullPath) => {
    return fullPath.split('/').pop();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Format the image path before sending it to the backend
    const formattedImagePath = formatImagePath(formData.selectedImage);

    try {
      await axiosPrivate.post(`${process.env.REACT_APP_BACKEND_URL}/api/communities/`, {
        name: formData.groupName,
        description: formData.groupDescription,
        createdBy: auth.userId,
        commonInterest: formData.commonInterest,
        selectedColor: formData.selectedColor,
        selectedImage: formattedImagePath,
      });

      setSuccessMessage(t('CommunCreate.GroupCreated'));
      setErrorMessage('');

    } catch (error) {
      console.log(error);

      setSuccessMessage('');
      setErrorMessage(t('CommunCreate.FailedToCreate'));
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === 'selectedColor') {
      setSelectedColor(value);
    }

    if (name === 'selectedImage') {
      setSelectedImage(value);
      setSelectedImageError('');
      setSelectedImage(value);
    }

    if (name === 'groupName') {
      if (value.length < 4 || value.length > 17) {
        setNameError(t('CommunCreate.Min4Characters'));
      } else {
        setNameError('');
      }
    }

    if (name === 'groupDescription') {
      // if (value.length < 80 || value.length > 100) {
      if (value.length < 1 || value.length > 10) {
        setDescriptionError(t('CommunCreate.Between110Characters'));
        // setDescriptionError('Between 80 and 100 characters');
      } else {
        setDescriptionError('');
      }
    }

    if (name === 'commonInterest') {
      if (value.length < 4 || value.length > 57) {
        setCommonInterestError(t('CommunCreate.Between457Characters'));
      } else {
        setCommonInterestError('');
      }
    }

    setFormData({
      ...formData,
      [name]: value,
    });

    if (name === 'groupName') {
      setRealTimeGroupName(value);
    } else if (name === 'groupDescription') {
      setRealTimeDescription(value);
    } else if (name === 'commonInterest') {
      setRealTimeCommonInterest(value);
    }
  };

  const [isChecked, setIsChecked] = useState(false);
  const [isPvtPopup, setPvtPopup] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    setPvtPopup(!isPvtPopup);
  };

  return (
    <div style={{ margin: 'auto', marginRight: '0px' }}>
      <button
        title={t('CommunCreate.CreateNewGroupButtonTitle')}
        className="commune_create_icon"
        onClick={() => {
          setPopOn(true);
        }}
      >
        <img src={create_group} alt="" />
      </button>
      {isPopOn && (
        <div className="commun_create_contain chat_thumbnails"
          onClick={() => setPopOn(false)} >
          <div className="commun_create"
            onClick={(e) => {
              e.stopPropagation();
            }} >

            <CloseButton onClick={() => setPopOn(false)} />

            <div className="two_column_contain">
              <main>
                <div className="">
                  <p className='first_child'>
                    {t('CommunCreate.MainTitle')} 
                    {/*C<span>r</span>eate a new g<span>r</span>oup: */}
                    </p>
                </div>
                <form >
                  <div>
                    <label> <span className='mandatory'>* </span > {t('CommunCreate.GroupNameLabel')}</label>
                    <input
                      type="text"
                      name="groupName"
                      // style={{ textAlign: "center" }}
                      placeholder={t('CommunCreate.GroupNamePlaceholder')}
                      value={formData.groupName}
                      maxLength="17"
                      onChange={handleInputChange}
                      autoComplete="off"
                    // dir="rtl"
                    />

                    <div className="for_error">
                      {nameError && <p className="error-message">{nameError}</p>}
                    </div>

                  </div>

                  <div>
                    <label><span className='mandatory'>* </span >{t('CommunCreate.CommonInterestLabel')}</label>
                    <input
                      type="text"
                      name="commonInterest"
                      placeholder={t('CommunCreate.CommonInterestPlaceholder')}
                      value={formData.commonInterest}
                      onChange={handleInputChange}
                      maxLength="50"
                      autoComplete="off"
                    />
                    <div className="for_error">
                      {commonInterestError && <p className="error-message">{commonInterestError}</p>}
                    </div>
                  </div>

                  <div>
                    <label> <span className='mandatory'>* </span >{t('CommunCreate.DescriptionLabel')}</label>
                    <input
                      type="text"
                      name="groupDescription"
                      placeholder={t('CommunCreate.DescriptionPlaceholder')}
                      value={formData.groupDescription}
                      onChange={handleInputChange}
                      maxLength="140"
                      autoComplete="off"
                    />
                    <div className="for_error">
                      {descriptionError && <p className="error-message">{descriptionError}</p>}
                    </div>
                  </div>

                  <div className="container_of_two">
                    <div>
                      <label> <span className='mandatory'>* </span > {t('CommunCreate.ChooseImageLabel')} </label>
                      <select
                        name="selectedImage"
                        value={formData.selectedImage}
                        onChange={handleInputChange}
                      >
                        <option value=''>{t('CommunCreate.ImgOptChoose')}</option>
                        <option value={commty1}>{t('CommunCreate.ImgOptNature')}</option>
                        <option value={commty2}>{t('CommunCreate.ImgOptElectrons')}</option>
                        <option value={commty3}>{t('CommunCreate.ImgOptCircle')}</option>
                        <option value={commty4}>{t('CommunCreate.ImgOptFlyingDoves')}</option>
                        <option value={commty5}>{t('CommunCreate.ImgOptIslamic')}</option>
                        <option value={commty6}>{t('CommunCreate.ImgOptOctogonal')}</option>
                        <option value={commty7}>{t('CommunCreate.ImgOptITCommun')}</option>
                        <option value={commty8}>{t('CommunCreate.ImgOptBBQ')}</option>
                      </select>

                      {selectedImageError && <p className="error-message">{selectedImageError}</p>}
                    </div>
                    <div>
                      <label htmlFor="">{t('CommunCreate.PickColorLabel')}</label>
                      <select
                        name="selectedColor"
                        value={formData.selectedColor}
                        onChange={handleInputChange}
                      >
                        <option value="black">{t('CommunCreate.ColorBlack')}</option>
                        <option value="red">{t('CommunCreate.ColorRed')}</option>
                        <option value="blue">{t('CommunCreate.ColorBlue')}</option>
                        <option value="green">{t('CommunCreate.ColorGreen')}</option>
                        <option value="purple">{t('CommunCreate.ColorPurple')}</option>
                        <option value="gold">{t('CommunCreate.ColorGold')}</option>
                      </select>
                    </div>
                  </div>
                  <footer>
                    <button type="submit"
                      className={`submit_btn ${nameError || descriptionError || commonInterestError || !formData.selectedImage ? 'disabled-button' : ''}`}

                      disabled={nameError || descriptionError || commonInterestError || !formData.selectedImage}

                      onClick={handleSubmit}
                    >
                      {t('CommunCreate.CreateButton')}
                    </button>
                  </footer>
                </form>
              </main>

              <aside>
                <div className="heading">
                  <h4>{t('CommunCreate.HereIsHowItLooks')}</h4>
                </div>

                <div className="chat_annot_contain">

                  <header title={t('CommunCreate.KnockTheDoor')}>
                    <div className='groupID' title={t('CommunCreate.ClickToCopyIDTitle')}> {t('CommunCreate.ClickToCopyIDLabel')}</div>
                    <div className="middle_part" title={t('CommunCreate.NameOfTheGroupTitle')}>
                      <p className="group_name">{realTimeGroupName}</p>
                    </div>
                    <button className="enter_the_chat">
                      <img src={door} alt="" />
                    </button>
                  </header>

                  <main className="chat_group_info">
                    <div className="upper_part">
                      <p className="common_interest">{t('CommunCreate.CommonInterestTitle')}</p>

                      <h4 className={selectedColor + 'Text'}>{realTimeCommonInterest}</h4>

                    </div>
                    <div className="pic_and_annt">
                      <button
                        title={t('CommunCreate.ClickToSeeDescription')}
                        className="rasm_container"
                        onClick={toggleContent}
                      >
                        {isImgVisible ? (
                          <img src={selectedImage} alt="" />
                        ) : (
                          <div className="annotatie">
                            <h5>{t('CommunCreate.DescriptionTitle')}</h5>
                            <p>{realTimeDescription}</p>
                          </div>
                        )}
                      </button>
                    </div>

                    <div className='curr_contain'>
                      <div className='report_div'>
                        <img src={report} alt="" />
                      </div>
                      <div style={{ margin: 'auto' }}>
                        <p className='currently'>{t('CommunCreate.CreatedBy')}{auth.nick}</p>
                      </div>
                      <div className='share_div'>
                        <img src={share} alt="" />
                      </div>
                    </div>
                  </main>
                  <div className="last_piece"></div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CommunCreate;
