import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import QisasTopbar from './QisasTopBar'

const QisasLayout = () => {

  return (
    <div className="qisas_layout">
      <QisasTopbar />
      <Outlet />
    </div>
  )
}

export default QisasLayout