import React from 'react'

const Esp2 = () => {
  return (
    <div className="h-[350px] md:h-[444px] bg-[#F9F9F9] flex flex-col justify-center items-center ">
      <div className='h-[75%] w-[92%] bg-white flex flex-col justify-center items-center'>
      <h1 className='px-2 text-[22px] md:text-[32px] text-primaryblue'>Join the club and get the benefits</h1> 
      <div className='mt-4 w-[90%] md:w-[490px] text-center'>
      <p className='text-[14px] md:text-[18px] text-primaryblue'>Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop up stores and more</p>
      </div>
       <div className="w-[90%] md:w-[472px] h-[56px] flex items-center justify-center mt-8">
         <div className="flex w-full max-w-md">
           <input
             type="email"
             placeholder="your@email.com"
             className="flex-grow px-4 py-2 border border-gray-300"
           />
       <button className="px-4 py-2 bg-primaryblue text-white font-semibold text-[14px] md:text-[18px]">
       Sign up
     </button>
   </div>
   </div>
  </div>
  
       </div>
    )
}

export default Esp2