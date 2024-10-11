import React, { useState } from 'react';
import './Notifications.css'
 
import Search from '../../components/Search'
import UmightLike from '../../components/UmightLike'
import heart_red from '../../images/heart_red.png';
import followed from '../../images/followed.png';
import example_avatar from '../../images/example_avatar.jpg';
import example_avatar2 from '../../images/example_avatar2.jpg';
import some_user from '../../images/abeke.png';
import h2_icon from '../../images/notification1.png';
import CreatePostButton from '../../components/buttons/CreatePostButton';

import { useTranslation } from 'react-i18next';

const Notifications = () => {

  const { t } = useTranslation();
  const [search, setSearch] = useState('')
  const [isSearchResultsOn, setSearchResultsOn] = useState(false)

  return (
    <>
      <div className='minister-home notifications'>
        <div className='topbar'>
          <div className='middle_part1'>
            <div className='icon_and_h2'>
              <div
                className="h2_icon_container">
                <img src={h2_icon} alt="" />
              </div>
              <h1> {t('Notification.MainHeading')} 
              {/* N<span>O</span>TIFICATI<span>O</span>NS */}
              </h1>
            </div>

            <div className='network_icons_topbar'>
              <CreatePostButton />
            </div>
          </div>
          <div className="middle_part2">
            <Search setSearch={setSearch} />
          </div>
        </div>

        <div className="separate_into_two_columns">
          <main className='sep_part1'>

            {/* <div className={`search_results ${(!search) ? 'no-content' : ''}`}>
              <div className={`s_results_subcontainer ${(!search) ? 'no-content' : ''}`} >
                <div className='click_to_Profile'

                  title='click to see the profile'
                  onClick={() => {
                    setSearchResultsOn(true);
                  }}
                >
                  {search &&
                    <div className="search_and_result">
                      <p> The Search results should appear here </p>
                    </div>
                  }
                </div>
              </div>
            </div> */}

            <div className='airoport'>
              <div className="dev_notes_div">
                <p className='dev_notes'> {t('Notification.UnderConstruction')} </p>
                <br />
                <p>
                {t('Notification.TheseNotifications')}
                  
                </p>
              </div>
              <div className="spacer20px"></div>

              <div className="all_notifs_flexed">
                <div className='recent_notif'>
                  <div className='smb_followed_or_liked'>
                    <img src={heart_red} alt="" />
                  </div>
                  <div className='smb_followed_or_liked'>
                    <img src={example_avatar2} alt="" />
                    <p><span>Baynazar</span>  {t('Notification.LikedYourReply')}</p>
                    <p className="gray">
                    {t('Notification.ExampleRussianExport')}
                      <br /><br />
                      {t('Notification.ExampleThisYear')} </p>
                  </div>
                </div>

                <div className='recent_notif'>
                  <div className='smb_followed_or_liked'>
                    <img src={followed} alt="" />
                  </div>
                  <div className='smb_followed_or_liked'>
                    <img src={example_avatar2} alt="" />
                    <p><span>{t('Notification.ExamplePersonNameAbdullaSelim')}</span> {t('Notification.FollowedYou')} </p>
                  </div>
                </div>

                <div className='recent_notif'>
                  <div className='smb_followed_or_liked'>
                    <img src={some_user} alt="" />
                  </div>
                  <div className='smb_replied'>
                    <p><span className='bold'>{t('Notification.PersonNameFransua')}</span>
                      <span className='gray'> @fransua_kng | Aug 7</span></p>
                    <p className='gray'> {t('Notification.ReplyingTo')}<span className='green'>@Abeke_Sa</span></p>
                    <p>Yes, I agree with you!</p>
                  </div>
                </div>

                <div className='recent_notif'>
                  <div className='smb_followed_or_liked'>
                    <img src={heart_red} alt="" />
                  </div>
                  <div className='smb_followed_or_liked'>
                    <img src={example_avatar} alt="" />
                    <p><span>Baynazar</span> {t('Notification.LikedYourPost')}</p>
                    <p className="gray">Hi, yes you are right, our company is called Shym-tech.</p>
                  </div>
                </div>
              </div>
            </div>
          </main>

          <aside>
            <div className="right_column_contain">
              <div className="spacer10px"></div>
                <UmightLike
                  h3="Want to attend?"
                  titleName="Sport event: Volleyball"
                  btnWord="Join" />

              <div className="right_column_posts">
                <h5 className="bold">Want to be notified?</h5>
                <div className="spacer10px"></div>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum dolor similique odio aperiam ad placeat ue, dolore temporibus ab quibusdam repellat. Perferendis, eveniet illo.</p>
              </div>
              <div className="spacer10px"></div>
                <UmightLike
                  h3="Want to attend?"
                  titleName="Sport event: Volleyball"
                  btnWord="Join" />
            </div>
          </aside>
        </div >
      </div >
    </>
  )
}

export default Notifications