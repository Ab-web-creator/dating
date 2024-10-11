import React from 'react'
import { useTranslation } from 'react-i18next';

const WhichCoursesToFollow = () => {
  const { t } = useTranslation();
  return (
    <div className="right_column_posts">
       <h3>{t('EventCreate.MainHeading')}</h3>
              <div className="spacer10px"></div>
              <p>Lorem ipsum dolor right_column for Students amet consectetur, adipisicing elit. Earum dolor similique odio aperiam ad placeat ue, dolore  ab quibusdam repellat. Perferendis, illo.</p>
    </div>
  )
}

export default WhichCoursesToFollow