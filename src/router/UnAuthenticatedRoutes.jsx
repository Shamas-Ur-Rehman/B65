import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import AuthLayout from '../layouts/AuthLayout'

const Main = React.lazy(() => import('../components/Main'))
const Login = React.lazy(() => import('../components/Login'))

export default function UnAuthenticatedRoutes () {
  return (
    <Routes>
      <Route path='/' element={<Main />} />
      <Route
        path='/login'
        element={
          <AuthLayout>
            <Login />
          </AuthLayout>
        }
      />
    </Routes>
  )
}
