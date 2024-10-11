import { useState } from 'react'
import { Outlet } from 'react-router-dom'

import KevinTopbar from './KevinTopBar'

const KevinLayout = () => {

  return (
    <div className="kevin_layout">
      <KevinTopbar />
      <Outlet />
    </div>
  )
}

export default KevinLayout