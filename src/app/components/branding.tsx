import React from 'react'
import { Heebo } from 'next/font/google'
const heebo= Heebo({subsets:['latin']})
import { TbTruckDelivery } from "react-icons/tb";
import { PiWalletLight } from "react-icons/pi";
import { LuSprout } from "react-icons/lu";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

import Link from 'next/link';


const Branding = () => {
  return (
    <div className='h-[476px] bg-white flex flex-col justify-center items-center'>
        <h1 className='text-[20px] sm:text-[24px] mt-[40px] sm:mt-[60px] text-greyhome font-medium'>What makes our brand different</h1>
        <div className='flex flex-wrap gap-10 md:gap-5 mt-4'>
        <div className='mt-[16px] h-[244px] w-[90%] sm:w-[305px] flex flex-col space-y-3 md:space-y-0 md:flex-row justify-between'>
        <div className=' bg-[#F9F9F9] flex items-center '>
            <div className='my-3 p-4  flex flex-col items-start justify-between'>
                <Link href={''}><TbTruckDelivery className="m-auto w-[24px] h-[24px] text-greyhome"/></Link>
                    <div className='my-3  flex items-center justify-between'>
                    <h2 className={`${heebo.className} text-[16px] md:text-[20px] font-normal text-greyhome`}>Next day as standard</h2>
                </div>
                <p className='my-3 text-greyhome m-auto w-[100%]'>Order before 3pm and get your order the next day as standard</p>
            </div>
        </div>
        
    </div>
    <div className='mt-[16px] h-[244px] w-[90%] sm:w-[305px] flex flex-col space-y-3 md:space-y-0 md:flex-row justify-between'>
        <div className=' bg-[#F9F9F9] flex items-center '>
            <div className='my-3 p-4  flex flex-col items-start justify-between'>
                <Link href={''}><IoIosCheckmarkCircleOutline className="m-auto w-[24px] h-[24px] text-greyhome" /></Link>
                    <div className='my-3  flex items-center justify-between'>
                    <h2 className={`${heebo.className} text-[16px] md:text-[20px] font-normal text-greyhome`}>Made by true artisans</h2>
                </div>
                <p className='my-3 text-greyhome m-auto w-[100%]'>Handmade crafted goods made with real passion and craftmanship</p>
            </div>
        </div>
        
    </div>
    <div className='mt-[16px] h-[244px] w-[90%] sm:w-[305px] flex flex-col space-y-3 md:space-y-0 md:flex-row justify-between'>
        <div className=' bg-[#F9F9F9] flex items-center '>
            <div className='my-3 p-4  flex flex-col items-start justify-between'>
                <Link href={''}><PiWalletLight className="m-auto w-[24px] h-[24px] text-greyhome" /></Link>
                    <div className='my-3  flex items-center justify-between'>
                    <h2 className={`${heebo.className} text-[16px] md:text-[20px] font-normal text-greyhome`}>Unbeatable prices</h2>
                </div>
                <p className='my-3 text-greyhome m-auto w-[100%]'>For our materials and quality you won&apos;t find better prices anywhere</p>
            </div>
        </div>
        
    </div>
    <div className='mt-[16px] h-[244px] w-[90%] sm:w-[305px] flex flex-col space-y-3 md:space-y-0 md:flex-row justify-between'>
        <div className=' bg-[#F9F9F9] flex items-center '>
            <div className='my-3 p-4  flex flex-col items-start justify-between'>
                <Link href={''}><LuSprout className="m-auto w-[24px] h-[24px] text-greyhome" /></Link>
                    <div className='my-3  flex items-center justify-between'>
                    <h2 className={`${heebo.className} text-[16px] md:text-[20px] font-normal text-greyhome`}>Recycled packaging</h2>
                </div>
                <p className='my-3 text-greyhome m-auto w-[100%]'>We use 100% recycled to ensure our footprint is more manageable</p>
            </div>
        </div>
        
    </div>
    </div>
    </div>
  )
}

export default Branding