import Link from 'next/link'
import React from 'react'

const Heroab = () => {
  return (
    <div className='h-auto bg-white flex flex-col items-center justify-center p-4 md:p-8'>
        <div className='max-w-3xl flex justify-center'>
            <h1 className='text-primaryblue/70 text-[24px] md:text-[36px] text-center'>
                A brand built on the love of craftsmanship, quality, and outstanding customer service
            </h1>
        </div>
        <Link href={"/products"}>
            <button className='my-4 mx-2 md:my-6 md:mx-4 h-[48px] md:h-[56px] w-[120px] md:w-[170px] bg-[#F9F9F9] text-greyhome text-[14px] md:text-[16px]'>
                View Collection
            </button>
        </Link>
    </div>
);
}

export default Heroab