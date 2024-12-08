import React from 'react'
import { Heebo } from 'next/font/google'
import Link from 'next/link'
const heebo= Heebo({subsets:['latin']})
const Hero2 = () => {
  return (
    <div className="h-[598px] flex flex-col justify-center items-center bg-white">
  <div className="flex flex-wrap gap-5">
    <div className="h-[478px] w-[630px] bg-primaryblue">
    <div className='m-5 p-4 w-[100%]  h-[286px] flex flex-col items-start justify-between'>
                <h2 className={`${heebo.className} my-[36px] mx-[24px] font-medium text-[20px] md:text-[32px] text-white `}>It started with a small idea</h2>
                <div className='w-[80%] md:w-[100%]   h-[42.12px] flex items-center justify-between'>
                    <p className={`${heebo.className} mx-[24px]  text-[16px] md:text-[18px] font-normal text-white`}>A global brand with local beginnings, our story begain in a small studio in South London in early 2014</p>
                </div>
                <div className='mt-[100px]'>
                <Link href={"/products"}><button className='my-[16px] mx-[24px] h-[56px] w-[170px] bg-[#494465] text-white'>View Collection</button></Link>
                </div>
            </div>
    </div>
    <div className="w-[630px] h-[478px] bg-black">
      <div
        className="h-full w-full bg-[url('/assets/SofaChair.png')] bg-cover bg-center"
      ></div>
    </div>
  </div>
</div>

  )
}

export default Hero2