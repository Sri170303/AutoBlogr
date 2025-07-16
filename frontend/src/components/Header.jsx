import React, { useRef } from 'react'
import { assets } from '../assets/assets'
import { useAppContext } from '../../context/AppContext'

const Header = () => {

    const {setInput, input} = useAppContext();
    const inputRef = useRef();
    const onSubmitHandler = async (e) => {
        e.preventDefault();
        setInput(inputRef.current.value);
    }
    const onClear = () => {
        setInput('');
        inputRef.current.value = '';
    }
  return (
    <div className='relative mx-8 sm:mx-16 xl:mx-24'>
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
            <form onSubmit={onSubmitHandler} className='flex justify-between max-w-lg max-sm:scale-75 mx-auto border border-gray-300 bg-white rounded overflow-hidden'>
                <input ref={inputRef} type="text" placeholder='Search your favorite' className='w-full pl-4 outline-none' required/>
                <button type='submit' className='bg-primary text-white px-8 py-2 m-1.5 rounded hover:scale-105 transition-all cursor-pointer'>Search</button>
            </form>
        </div>  
        <div className='text-center'>
            {
                input && <button onClick={onClear} className='border py-1 px-3 rounded-sm cursor-pointer'>Clear Search</button>
            }
        </div>      
    </div>
  )
}

export default Header