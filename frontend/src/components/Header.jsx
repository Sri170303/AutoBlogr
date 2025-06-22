import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div className='relative'>
        <img src={assets.gradientBackground} alt="gradientBackground" className='w-full absolute -top-50 -z-1 opacity-50' />
        <div className='mx-8 sm:mx-16 xl:mx-24'>
            <div className='text-center mt-20 mb-8'>
                <div className='inline-flex items-center justify-center gap-2 px-6 py-1.5 mb-4 border border-primary/50 bg-primary/20 rounded-full text-sm text-primary'>
                    <p>AI feature integrated</p>
                    <img src={assets.starIcon} alt="starIcon" className='w-3.5'/>
                </div>
                <h1 className='text-3xl sm:text-6xl font-semibold sm:leading-16 text-gray-600'>Your own <span className='text-primary'>blogging</span> <br /> platform</h1>
                <p className='my-6 sm:my-8 max-w-2xl m-auto max-sm:text-xs text-gray-500'>
                    Whether you're sharing insights, building your voice, or growing your audience,
                    our smart tools help you stay focused, consistent, and confident.
                </p>
                <form className='flex justify-between max-w-lg max-sm:scale-75 mx-auto border border-gray-300 bg-white rounded overflow-hidden'>
                    <input type="text" placeholder='Search your favorite' className='w-full pl-4 outline-none' required/>
                    <button type='submit' className='bg-primary text-white px-8 py-2 m-1.5 rounded hover:scale-105 transition-all cursor-pointer'>Search</button>
                </form>
            </div>
        </div>
        
    </div>
  )
}

export default Header