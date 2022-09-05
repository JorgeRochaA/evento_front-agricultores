import React from 'react'
import { Navigate } from 'react-router-dom'
import { getToken } from '../services/auth'

interface params {
  children: React.ReactNode
}

const loginRoute = (params: params) : any => {
  
  const token = getToken()
  if(token){
    return <Navigate to="/panel-user" replace={true}/>
  }

  return params.children
}

export default loginRoute