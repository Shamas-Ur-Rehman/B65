import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

function Main () {
  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate()
  return (
    <div className='bg-gray-100 h-screen relative overflow-hidden'>
      <div className='container mx-auto px-4 relative'>
        <div className='h-[80px] pt-2.5 flex items-center justify-between relative'>
          <div className='w-[30%]'>
            <img
              src='/assets/images/logo.png'
              className='h-[80px]'
              alt='Logo'
            />
          </div>

          <div className='hidden md:flex bg-gray-800 w-[50%] rounded-full'>
            <ul className='flex gap-x-4 text-white p-5 w-full justify-around'>
              <li>
                <a href='#' className='hover:text-gray-300'>
                  Home
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-gray-300'>
                  About
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-gray-300'>
                  Services
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-gray-300'>
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className='md:hidden relative'>
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
            </button>

            <div
              className={`absolute right-0 mt-3 bg-gray-800 text-white rounded-lg shadow-lg w-48 transition-transform duration-300 ease-in-out ${
                isOpen
                  ? 'opacity-100 scale-100'
                  : 'opacity-0 scale-95 pointer-events-none'
              }`}
            >
              <ul className='flex flex-col items-center text-center py-3 space-y-2'>
                <li>
                  <a
                    href='#'
                    className='block px-4 py-2 hover:bg-gray-700'
                    onClick={() => setIsOpen(false)}
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='block px-4 py-2 hover:bg-gray-700'
                    onClick={() => setIsOpen(false)}
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='block px-4 py-2 hover:bg-gray-700'
                    onClick={() => setIsOpen(false)}
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='block px-4 py-2 hover:bg-gray-700'
                    onClick={() => setIsOpen(false)}
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='h-[calc(100vh-90px)] flex justify-between'>
          <div className='flex gap-5 w-[60%] justify-center items-center h-full flex-col'>
            <h1 className='font-verdana flex items-center font-bold italic text-[50px] leading-[50px] text-gray-800'>
              Register your UAE business from anywhere in the world!
            </h1>
            <div className='flex gap-4 items-start w-full justify-start'>
              <button className='bg-[#3C6E71] font-verdana  text-white px-12 py-1 rounded-full text-[22px]'>
                Sign Up
              </button>
              <button
                onClick={() => {
                  navigate('/login')
                }}
                className='bg-[#284B63] font-verdana  text-white px-12 py-1 rounded-full text-[22px]'
              >
                Login
              </button>
            </div>
          </div>
          <div className='flex w-[40%] justify-end relative'>
            <img
              src='/assets/images/mainimg.png'
              className='h-[70vh] '
              alt='Business handshake'
            />
            <img
              src='/assets/images/largeimgwraper.png'
              className='absolute top-12 right-[-20px] h-[60vh] z-0'
              alt='Large Wrapper'
            />
            <img
              src='/assets/images/smallimgwraper.png'
              className='absolute top-[20px] right-[70px] h-[40vh] z-0'
              alt='Small Wrapper'
            />
          </div>
        </div>
      </div>

      <img
        className='absolute bottom-0 left-0 w-full max-h-[250px] object-cover z-0'
        src='/assets/images/mainblue.png'
        alt='Blue Background'
      />
      <img
        className='absolute bottom-0 left-0 w-full max-h-[250px] object-cover z-10'
        src='/assets/images/maingreen.png'
        alt='Green Background'
      />
    </div>
  )
}

export default Main
