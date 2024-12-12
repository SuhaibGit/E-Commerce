import Link from 'next/link'
import React from 'react'

const Hero3 = () => {
  return (
    <div className='h-auto md:h-[450px] w-[100%] flex flex-wrap'>
        <div className="h-auto md:h-[100%] w-[90%] md:w-[50%] bg-[url('/assets/hero3.png')] bg-cover bg-center"></div>
        <div className='w-[100%] md:w-[50%] bg-[#F9F9F9] flex flex-col justify-start items-center'>
            <div className='m-[20px] w-[90%] md:w-[602px] h-auto  flex flex-col justify-start' >
                <h1 className='text-[24px] text-primaryblue/70 mt-12'>Our service isn&apos;t just personal, it&apos;s actually
                hyper personally exquisite</h1>
                <p className='text-[16px] text-primaryblue/70 mt-12'>When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market.<br/><br/>Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community.</p>
                <Link href={"/products"}><button className='my-[12px]  md:my-[20px]  h-[48px] md:h-[56px] w-[120px] md:w-[170px] bg-white text-primaryblue text-[12px] md:text-[16px]'>Get in touch</button></Link>

            </div>
            

        </div>
    </div>
  )
}

export default Hero3