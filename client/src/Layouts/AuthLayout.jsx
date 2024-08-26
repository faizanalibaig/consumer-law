import React from 'react'
import { Outlet } from 'react-router-dom'
import AuthHeader from '../components/authheader/AuthHeader'

const AuthLayout = () => {
  return (
    <div>
      <AuthHeader/>
      <Outlet/>
    </div>
  )
}

export default AuthLayout
