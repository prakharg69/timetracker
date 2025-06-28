import React from 'react'

const Header = () => {
  return (
    <div className='p-[1rem] flex  justify-between items-center'> <p className='text-2xl font-bold '>TIME TRACER DASHBOARD</p>
    <div className="ss flex justify-center items-center gap-2">
        <button className='bg-white text-black p-[0.5rem] text-[1rem] font-medium '> Add Time Period</button>
        <button className='bg-[#2A2A2A]      p-[0.5rem]  text-[1rem] font-medium   '>Manage Categories</button>
        <button className='bg-[#494949]      p-[0.5rem]  text-[1rem] font-medium   '>Reset Week(Test)</button>
    </div>
    
    </div>

  )
}

export default Header