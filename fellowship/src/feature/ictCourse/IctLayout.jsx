import { useState } from 'react'
import { Outlet } from 'react-router-dom'

import IctTopbar from './IctTopbar'

const IctLayout = () => {
  return (
    <div className="ict_layout">
      <IctTopbar />
      <Outlet />
    </div>
  )
}

export default IctLayout