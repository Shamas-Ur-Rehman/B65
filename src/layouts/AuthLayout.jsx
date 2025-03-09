import React from 'react'

function AuthLayout ({ children }) {
  return (
    <div className='flex w-full items-center h-screen justify-center'>
      <div className='w-[60%] hidden lg:flex bg-[#D8D8D8] h-full relative  items-center justify-center'>
        <img
          src='/assets/images/logo.png'
          className='h-[80px] absolute top-5 left-[60px]'
          alt='Logo'
        />
        <img src='/assets/images/authimg.png' className='h-full' />
      </div>
      <div className='w-full lg:w-[40%]'>{children}</div>
    </div>
  )
}

export default AuthLayout
