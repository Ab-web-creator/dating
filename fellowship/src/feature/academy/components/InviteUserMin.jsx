import React, { useEffect, useState } from 'react'
import './inviteUserMin.css'
import useAxiosPrivate from '../../../hooks/useAxiosPrivate'
import useAuth from '../../../hooks/useAuth'
import invite_someone from '../../../images/invite_someone.png';
import { useTranslation } from 'react-i18next';
import CloseButton from '../../../components/buttons/CloseButton';

function InviteUser() {

  const { t } = useTranslation();
  const axiosPrivate = useAxiosPrivate()
  const { auth } = useAuth()

  const [inviteDetails, setInviteDetails] = useState({
    initiatorId: auth.userId,
    role: '',
    email: '',
    whatsapp: '',
  })

  const [error, setError] = useState('')
  const [goodNews, setGoodNews] = useState('')

  const userRoleOptions = [
    'student',
    // 'mentor',
    // 'coach',
    // 'encourager',
    // 'writer',
    // 'moderator',
  ]

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (isValid) {
      try {
        console.log('inviteDetails', inviteDetails)
        await axiosPrivate.post(
          `${process.env.REACT_APP_BACKEND_URL}/user-notifier/invitation`,
          JSON.stringify(inviteDetails)
        )

        setGoodNews(t('InviteUserMin.GoodNewsFantastic'))
        setTimeout(() => {
          setGoodNews('');
        }, 2000);

        setTimeout(() => {
          setInvitationPopOn(false);
        }, 2000);

      } catch (error) {
        setError(error)
      }
    } else {
      setError(t('InviteUserMin.ErrorChooseARole'))
      setTimeout(() => {
        setError('');
      }, 3000);
    }
  }

  const handleChange = (e) => {
    setInviteDetails({
      ...inviteDetails,
      [e.target.name]: e.target.value,
    })
  }

  useEffect(() => {
  }, [inviteDetails])

  useEffect(() => {
    setError('')
  }, [inviteDetails.email, inviteDetails.role, inviteDetails.whatsapp])

  const isValid =
    Boolean(inviteDetails.role) &&
    (Boolean(inviteDetails.email) || Boolean(inviteDetails.whatsapp))

  const [isInvitationPopOn, setInvitationPopOn] = useState(false)

  return (
    <div style={{ margin: 'auto', marginRight: '0px' }}>
      <button
        title={t('InviteUserMin.AddSomeone')}
        className='commune_create_icon'

        onClick={() => {
          setInvitationPopOn(true)
        }}
      >
        <img src={invite_someone} alt="" />
      </button>

      {isInvitationPopOn && (
        <div className='invitationMin_case_contain'
          onClick={() => {
            setInvitationPopOn(false)
          }} >

          <main className='invitationMin_case'
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            {/* <button
              className='close_invitation'
              onClick={() => {
                setInvitationPopOn(false)
                setInviteDetails({
                  initiatorId: auth.userId,
                  role: '',
                  email: '',
                  whatsapp: '',
                })
                setGoodNews('')
              }}
            >
              &times;
            </button> */}

            <CloseButton  onClick={() => {
                setInvitationPopOn(false)
                setInviteDetails({
                  initiatorId: auth.userId,
                  role: '',
                  email: '',
                  whatsapp: '',
                })
                setGoodNews('')
              }} 
              className="right-2 top-2"
              />

            <form
              onSubmit={handleSubmit}
              autoComplete='off'>
              <h2 className='heading'>
                {/*In<span>v</span>it<span>e</span> a n<span>e</span>w p<span>e</span>rson*/}
                {t('InviteUserMin.FormTitle')}
                </h2>

              <div className='flex_it'>
                <label htmlFor='role'> 
                  <span className='hide_VERY_sm_screen'>{t('InviteUserMin.ToTheFellowshipNonEssental1')}</span> 
                  {t('InviteUserMin.ToTheFellowshipEssental')}
                </label>
                  <span className='hide_VERY_sm_screen'>
                    {t('InviteUserMin.ToTheFellowshipNonEssental2')}
                  </span>
                <select
                  onChange={handleChange}
                  name='role' id='role'>
                  <option value=''>{t('InviteUserMin.SelectARole')}</option>
                  {userRoleOptions?.map((role, index) => {
                    return (
                      <option key={index} value={role}>
                        {role}
                      </option>
                    )
                  })}
                </select>
              </div>

              <label htmlFor='email'>{t('InviteUserMin.EnterHisEmail')}</label>
              <input
                type='email'
                name='email'
                id='email'
                value={inviteDetails.email}
                onChange={handleChange}
              />

              {/* <label htmlFor='whatsapp'>or his whatsapp:</label>
              <input
                type='text'
                name='whatsapp'
                id='whatsapp'
                value={inviteDetails.whatsapp}
                onChange={handleChange}
              /> */}

              <div className="spacer10px"></div>
              <div className="flexed">
                <button className='submit-btn' type='submit' >
                {t('InviteUserMin.SendButton')}
                </button>

                {error && <p className='error'>{error}</p>}
                {goodNews && <p className='goodNews'>{goodNews}</p>}
              </div>
            </form>
          </main>
        </div>
      )}
    </div>
  )
}

export default InviteUser
