import React from 'react'
import { FaGoogle } from 'react-icons/fa'

const Login = () => {
  return (
    <div className='flex items-center flex-col justify-center min-h-screen bg-gray-100'>
      <h2 className='text-center text-[30px] mb-2 font-verdana font-bold italic text-[#284B63]'>
        Welcome back
      </h2>
      <div className='bg-[#284B63] p-8 rounded-3xl shadow-lg w-96 text-white font-[verdana]'>
        <div>
          <label className='block text-[16px] font-verdana font-normal'>
            Email Address
          </label>
          <input type='email' className='w-full px-3 py-2 mt-1 text-black ' />
        </div>

        <div className='mt-4'>
          <label className='block text-[16px] font-verdana font-normal'>
            Password
          </label>
          <input type='password' className='w-full px-3 py-2 mt-1 text-black' />
        </div>

        <div className='flex items-center justify-between mt-4'>
          <label className='flex items-center'>
            <input type='checkbox' className='mr-2' />
            <span className='text-[16px] font-verdana font-normal'>
              Remember me
            </span>
          </label>
          <a
            href='#'
            className='text-[12px] font-verdana font-normal underline'
          >
            Forgot Password
          </a>
        </div>

        <button className='w-full rounded-full bg-[#3C6E71] text-white py-2 mt-5 font-verdana font-bold text-[16px] '>
          Login
        </button>

        <div className='flex items-center my-4'>
          <hr className='flex-grow border-gray-400' />
          <span className='px-2 font-verdana font-bold text-[16px]'>OR</span>
          <hr className='flex-grow border-gray-400' />
        </div>

        <button className='w-full flex items-center justify-center relative bg-white py-2  font-semibold'>
          <img
            src='/assets/images/google.png'
            className=' absolute left-2 h-14'
          />
          <span className=' font-verdana font-bold text-[16px] text-[#353535]'>
            Log in with Google
          </span>
        </button>
      </div>
      <p className='text-center text-sm mt-4'>
        Don’t have an account yet?
        <a href='#' className='underline'>
          Sign Up
        </a>
      </p>
    </div>
  )
}

export default Login
