import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function ProtectedRoute({children}) {
    const isAuth= true;
    const navigate= useNavigate();

    if(!isAuth) navigate('/login')
  return (


    <div>
      {children}
    </div>
  )
}
