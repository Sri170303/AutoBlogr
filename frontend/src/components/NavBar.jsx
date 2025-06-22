import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <div className='flex justify-between items-center py-5 mx-8 sm:mx-20 xl:mx-32 cursor-pointer'>
        <img onClick={() => navigate('/')} src={assets.logo} alt="logo" className='w-32 sm:w-44'/>
        <button onClick={() => navigate('/admin')} className='flex flex-center gap-2 bg-primary py-2 px-4 rounded-2xl text-white cursor-pointer'>
          Login
          <img src={assets.arrow} alt="arrow" />
        </button>
    </div>
  )
}

export default NavBar