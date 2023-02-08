import React from 'react'
import { Link } from 'react-router-dom'

export const LogoSidebar = () => {
  return (
    <Link to={'/'} className='p-4'>
      <img className='w-40' src="img/logo.svg" alt="logo" />
    </Link>
  )
}


