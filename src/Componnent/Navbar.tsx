/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import logo from '../Image/logoRss.svg'
export default function Navbar() {
  return (
    <div className='flex bg-white rounded z-50 py-2 px-2 w-full border-b-2 border border-gray-300 shadow-md'>
      <div className='flex md:w-1/2 w-full mx-auto items-center font-bold text-xl'>
      <img className='w-20 h-20' src={logo}/>
      <span>Rss<span className='text-3xl text-blue-700'>A</span>ggregator</span>
      </div>
    
    </div>
  )
}
