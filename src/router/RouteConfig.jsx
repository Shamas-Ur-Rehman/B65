import React from 'react'
import AuthenticatedRoutes from './AuthenticatedRoutes'
import UnAuthenticatedRoutes from './UnAuthenticatedRoutes'

function RouteConfig () {
  let token
  return token ? <AuthenticatedRoutes /> : <UnAuthenticatedRoutes />
}

export default RouteConfig
