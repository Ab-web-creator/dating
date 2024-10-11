import React, { useState } from 'react'
import './boardMembers.css'
import useAuth from '../../../hooks/useAuth'
import { useNavigate } from 'react-router-dom';
import useAxiosPrivate from '../../../hooks/useAxiosPrivate';
import { useTranslation } from 'react-i18next';


const BoardMembers = ({ boardMembers }) => {

  const { t } = useTranslation();
  const navigate = useNavigate()
  const { auth } = useAuth()

  const axiosPrivate = useAxiosPrivate()

  const [isPopupWindowOnn, setPopupWindowOnn] = useState(false)

  const [selectedUser, setSelectedUser] = useState('')

  const calculateAge = (birthDate) => {
    const today = new Date();
    const birthDateObj = new Date(birthDate);
    let age = today.getFullYear() - birthDateObj.getFullYear();
    return age;
  };

  return (
    <>
      {boardMembers?.map((chosenObject, index) => (
        <div
          title= {t('BoardMembers.ClickToGoProfile')}
          className='board_members_container'
          key={chosenObject._id}
        >
          <div className="board_member"
            onClick={() => {
              setPopupWindowOnn(true)
              setSelectedUser(chosenObject._id)
              navigate(`/profile-page/${chosenObject._id}`)
            }}
          >
            <div
              className={`gray1 ${auth.userId === chosenObject._id ? 'my_own_demo_gray' : ''}`}>
              <div className='oval-container'>
                <img
                  src={chosenObject.image}
                  alt= {t('BoardMembers.Decription')}
                  className='fit-image'
                />
              </div>
            </div>

            <div className={`marine1 ${auth.userId === chosenObject._id ? 'my_own_demo_blue' : ''}`}></div>

            <div className='white_main1'>
              <div className='name'>
                <h4>
                  &#3894;  <span> {chosenObject.nick}</span>  &#3894;
                </h4>
                <p> {chosenObject.searchName} </p>
              </div>
            </div>
            <div className='white_main2'>
              <div className='bio'>
                <p className='zametki'>
                  {chosenObject.biography}
                </p>
              </div>
            </div>

            <div className='show_me'>
              <div className=''>
                <p>
                {t('BoardMembers.ViewProfileButton')}
                </p>
              </div>
            </div>
          </div>
        </div >
      ))}
    </>
  )
}

export default BoardMembers
