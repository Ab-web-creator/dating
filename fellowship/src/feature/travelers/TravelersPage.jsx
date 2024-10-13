import React from 'react';
import { useNavigate } from 'react-router-dom';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import useAuth from '../../hooks/useAuth';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../../components/LanguageSwitcher'
import UmightLike from '../../components/UmightLike'
import './travelersPage.css';

const TravelersPage = () => {
  const { t } = useTranslation();
  const { auth } = useAuth()
  const axiosPrivate = useAxiosPrivate()

  const navigate = useNavigate()

  return (
    <div className='page-root  welcome_page'>
      <div className='topbar'>
        <div className='middle_part1'>
          <div className='icon_and_h2' >
            <h1>
              T<span>r</span>avele<span>r</span>s
            </h1>
            <LanguageSwitcher />
          </div>
        </div>
        <div className="middle_part2">
        </div>
      </div>

      <div className="separate_into_two_columns">
        <div className='sep_part1 overflow-y-auto'>
             fasdfasdfasd
        </div>

        <aside>
          <div className="right_column_contain">
            <div className="right_column_posts">
              <h3>
              {t('Wel.RightColHead1')}
              </h3>
              <div className="spacer10px"></div>
              <p className='text-sm'>
              {t('Wel.RightColP1')}
              </p>
            </div>
            <div className="right_column_ads">
              <UmightLike
                h3={t('Wel.RightColAd1Head1')}
                titleName={t('Wel.RightColAd1Title1')}
                btnWord={t('Wel.RightColAd1ButtonWord1')} />
            </div>
          </div>
        </aside>

      </div>
    </div>
  )
};

export default TravelersPage;
