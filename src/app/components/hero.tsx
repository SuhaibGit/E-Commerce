import React from 'react'
import { Heebo } from 'next/font/google'
import Link from 'next/link'

const heebo= Heebo({subsets:['latin']})
const Hero = () => {
  return (
    <div className="h-[500px] md:h-[704px] bg-[url('/assets/herob.jpg')] bg-cover bg-center flex items-center justify-end">
        <div className='h-[320px] md:h-[444px] w-[90%] md:w-[630px] bg-white m-[20px] md:m-[120px]'>
        <div className=' p-4 w:[90%] md:w-[100%]  h-[286px] flex flex-col items-start justify-between'>
                <h2 className={`${heebo.className} my-[36px] mx-[24px] font-medium text-[20px] md:text-[32px] text-[#22202E] `}>Luxury homeware for people who love timeless design quality</h2>
                <div className='w-[80%] md:w-[100%] h-[42.12px] flex items-center justify-between'>
                    <p className={`${heebo.className} mx-[24px]  text-[16px] md:text-[18px] font-normal text-black/60`}>Shop the new Spring 2022 collection today</p>
                </div>
                <div className='my-[10px] md:my-[70px]'>
                <Link href={"/products"}><button className='my-[8px] mx-[16px] md:my-[16px] md:mx-[24px] h-[48px] md:h-[56px] w-[120px] md:w-[170px] bg-[#F9F9F9] text-greyhome text-[12px] md:text-[16px]'>View Collection</button></Link>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Hero