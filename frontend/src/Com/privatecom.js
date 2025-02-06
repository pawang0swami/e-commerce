import React from 'react'
import { Navigate,Outlet } from 'react-router-dom'

const privatecom = () => {
    const a=localStorage.getItem("user")
  return (
    
     a?<Outlet/>:<Navigate to="/sign"/>
     
  )
}

export default privatecom