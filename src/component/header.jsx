import React from 'react'
import { FaCog, FaMoon } from 'react-icons/fa'

const Header = () => {
  
  return (
    <div className='p-[1rem] flex justify-between items-center'>
  <p className='text-2xl font-bold'>TIME TRACER DASHBOARD</p>

  <div className="flex items-center gap-2">
    <button className='bg-white text-black p-[0.5rem] text-[1rem] font-medium cursor-pointer'>Add Time Period</button>
    <button className='bg-[#2A2A2A] text-white p-[0.5rem] text-[1rem] font-medium cursor-pointer'>Manage Categories</button>
    <button className='bg-[#494949] text-white p-[0.5rem] text-[1rem] font-medium cursor-pointer'>Reset Week (Test)</button>

    {/* Theme Toggle Buttons */}
    <div className='flex text-white text-[0.75rem] font-medium  border-gray-100 border-[0.25px] border-opacity-20 rounded overflow-hidden'>
      <button className='px-3 cursor-pointer py-1 border-r border-gray-100  flex items-center gap-1 hover:bg-gray-700'>
        <span className="text-lg">•</span> Light
      </button>
      <button className='px-3 cursor-pointer py-1 border-r border-gray-500 bg-white text-black flex items-center gap-1 hover:bg-gray-200'>
        <FaMoon className="text-sm" /> Dark
      </button>
      <button className='px-3 py-1 cursor-pointer flex items-center gap-1 hover:bg-gray-700'>
        <FaCog className="text-sm" /> Auto
      </button>
    </div>
  </div>
</div>
    
  

  )
}

export default Header