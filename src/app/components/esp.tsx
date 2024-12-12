import Link from 'next/link';
import React from 'react'
import { IoIosCheckmarkCircle } from "react-icons/io";

const Esp = () => {
  return (
    <div className="h-auto md:h-[444px] bg-[url('/assets/email2.jpg')] bg-cover bg-center flex flex-col justify-center items-center p-5 ">
     <h1 className='text-[23px] md:text-[32px] '>Join the club and get the benefits</h1> 
     <div className='mt-4 w-[95%] md:w-[490px] text-center'>
     <p className='text-[14px] md:text-[18px]'>Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop up stores and more</p>
     </div>
     
      <ul className='flex flex-row w-[90%] md:w-[450px] justify-between mt-8'>
        <li className="flex items-center space-x-2"><Link href={''}><IoIosCheckmarkCircle className=" w-[24px] h-[24px] text-white text-[12px] md:text-[14px]"/></Link>Exclusive Offers</li>
        <li className="flex items-center space-x-2"><Link href={''}><IoIosCheckmarkCircle className=" w-[24px] h-[24px] text-white text-[12px] md:text-[14px]"/></Link>Free Events</li>
        <li className="flex items-center space-x-2"><Link href={''}><IoIosCheckmarkCircle className=" w-[24px] h-[24px] text-white text-[12px] md:text-[14px]"/></Link>Large Discount</li>
      </ul>
      <div className="w-90% md:w-[472px] h-auto md:h-[56px] flex items-center justify-center mt-8">
        <div className="flex w-full max-w-md">
          <input
            type="email"
            placeholder="your@email.com"
            className="flex-grow px-4 py-2 border border-gray-300"
          />
      <button className="px-6 py-2 bg-primaryblue text-white font-semibold ">
      Sign up
    </button>
  </div>
</div>

      </div>
    
  )
}

export default Esp
