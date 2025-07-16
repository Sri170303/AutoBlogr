import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import { useAppContext } from '../../context/AppContext';

const NavBar = () => {
  
  const {navigate, token} = useAppContext();
  return (
    <div className='flex justify-between items-center py-5 px-8 sm:px-20 xl:px-32 bg-gray-200 border-b border-gray-500'>
        <img onClick={() => navigate('/')} src={assets.logo} alt="logo" className='w-32 sm:w-44 cursor-pointer'/>
        <button onClick={() => navigate('/admin')} className='flex flex-center gap-2 bg-primary py-2 px-4 rounded-2xl text-white cursor-pointer'>
          {
            token ? 'Dashboard' : 'Login'
          }
          <img src={assets.arrow} alt="arrow" />
        </button>
    </div>
  )
}

export default NavBar