import React from 'react'
import { FcReuse } from 'react-icons/fc'

const Dasbord = () => {
  return (
    <div className='p-[1rem] flex gap-1'>
        <div className="left w-4/6 p-[1rem]">
        <div className='aa flex bg-[#2A2A2A] p-[1rem] gap-1.5 '><FcReuse></FcReuse> Week History</div>
        <div className='mt-1 flex gap-[1rem]'>
            <div className='flex flex-col '>
                <div className='flex items-center flex-col justify-center  p-[1rem]'>
                    <p>Mon</p>
                    <p className='text-[#9A9A9A] text-sm'>May 19</p>
                </div>
                <div className='flex flex-col items-center justify-center p-[5px] gap-1 border border-white/10'>
                            <p className='text-[14px] mt-[8px]'>Mon May 19</p>
                            <div className='w-[6.5rem] h-[2rem] bg-[#161616]'></div>
                            <div className='w-[6.5rem] h-[2rem] bg-[#161616]'></div>
                            <div className='w-[6.5rem] h-[2rem] bg-[#161616]'></div>
                            <div className='w-[6.5rem] h-[2rem] bg-[#161616]'></div>
                            <div className='w-[6.5rem] h-[2rem] bg-[#161616]'></div>
                            <div className='w-[6.5rem] h-[2rem] bg-[#161616]'></div>
                            <div className='w-[6.5rem] h-[2rem] bg-[#161616]'></div>
                            <div className='w-[6.5rem] h-[2rem] bg-[#161616]'></div>
                            <div className='w-[6.5rem] h-[2rem] bg-[#161616]'></div>
                            <div className='w-[6.5rem] h-[2rem] bg-[#161616]'></div>
                            <div className='w-[6.5rem] h-[2rem] bg-[#161616]'></div>
                            <div className='w-[6.5rem] h-[2rem] bg-[#161616]'></div>
                            <div className='w-[6.5rem] h-[2rem] bg-[#161616]'></div>
                            <div className='w-[6.5rem] h-[2rem] bg-[#161616]'></div>
                            <div className='w-[6.5rem] h-[2rem] bg-[#161616]'></div>
                </div>
            </div>
            
            
            
            

        </div>
        </div>
        <div className="right w-2/6 p-[1rem]">
        <div className='aa flex bg-gray-500 p-[1rem] gap-1.5 '><FcReuse></FcReuse> Week History</div>

        </div>
    </div>
  )
}

export default Dasbord