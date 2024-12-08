import Link from 'next/link'
import React from 'react'

const Heroab = () => {
  return (
    <div className='h-[277px] bg-white flex items-center justify-evenly'>
        <div className='h-[100px] w-[704px] flex'>
        <h1 className='text-primaryblue/70 text-[36px]'>A brand built on the love of craftmanship,
        quality and outstanding customer service</h1>
        </div>
        <Link href={"/products"}><button className='my-[8px] mx-[16px] md:my-[16px] md:mx-[24px] h-[48px] md:h-[56px] w-[120px] md:w-[170px] bg-[#F9F9F9] text-greyhome text-[12px] md:text-[16px]'>View Collection</button></Link>
    </div>
  )
}

export default Heroab