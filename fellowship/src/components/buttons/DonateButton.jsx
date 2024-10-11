import React, { useState } from 'react'
import Donation from '../../components/Donation'
import { useTranslation } from 'react-i18next';
import './donateButton.css'
const DonateButton = () => {
  const { t } = useTranslation();
  const [isDonationOpen, setDonationOpen] = useState(false)

  return (
   <>
     <button
      className="donation_btn"
      title={t('Buttons.DonateButtonTitle')}
      onClick={() => {
        setDonationOpen(true)
      }}
    >
      <p>{t('Buttons.DonateButton')}</p>
    </button>

    {isDonationOpen && <Donation setDonationOpen={setDonationOpen} />}
    </>
  )
}

export default DonateButton