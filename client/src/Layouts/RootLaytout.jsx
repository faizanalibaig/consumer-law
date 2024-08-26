import React from 'react'
import { Outlet } from 'react-router-dom'

const RootLaytout = () => {
  return (
    <div>
      <Outlet/>
    </div>
  )
}

export default RootLaytout
