import Link from 'next/link';
import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";
import { FaPinterest } from "react-icons/fa";
import { FaSkype } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="h-auto md:h-[380px] w-[100%] flex flex-wrap justify-center  bg-primaryblue py-4 md:py-0">
        
      <div className="bg-primaryblue w-[90%] flex flex-col md:flex-row justify-between h-auto md:h-[280px] text-[#d7d6dd] border-b border-[#4e4d93] ">
        <ul className='text-[14px] space-y-2 mt-12'>
          <li className="text-[16px] border-b border-[#4e4d93]">Menu</li>
          <li><Link href={'/products'}>New Arrivals</Link></li>
          <li><Link href={'/products'}>Best Sellers</Link></li>
          <li><Link href={'/products'}>Recently Viewed</Link></li>
          <li><Link href={'/products'}>Popular This Week</Link></li>
          <li><Link href={'/products'}>All Products</Link></li>
          <li><Link href={''}>Amazon Science</Link></li>
        </ul>
        <ul className='text-[14px] space-y-2 mt-12' >
          <li className="text-[16px] border-b border-[#4e4d93]">Categories</li>
          <li><Link href={'/products'}>Crockery</Link></li>
          <li><Link href={'/products'}>Furniture</Link></li>
          <li><Link href={'/products'}>Homeware</Link></li>
          <li><Link href={'/products'}>Plant Pots</Link></li>
          <li><Link href={'/products'}>Chair</Link></li>
        </ul>
        <ul className='text-[14px] space-y-2 mt-12'>
          <li className="text-[16px] border-b border-[#4e4d93]">Our Company</li>
          <li><Link href={'/about'}>About Us</Link></li>
          <li><Link href={''}>Vacancies</Link></li>
          <li><Link href={'/about'}>Contact Us</Link></li>
          <li><Link href={''}>Privacy</Link></li>
          <li><Link href={''}>Return Policy</Link></li>
          <li><Link href={''}>Amazon Science</Link></li>
        </ul>
        <div className=" w-[95%] md:w-[33%] h-auto md:h-[56px] flex items-center justify-center mt-8">
            <div className="  md:w-full max-w-md mt-16 text-[18px] font-medium">
                <p className='mb-4'>Join our mailing list</p>
                <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-[75%] flex-grow px-4 py-2 border border-greyhome  placeholder-[#d7d6dd] bg-greyhome"
                />
                <button className="w-[25%] px-3 py-2 bg-white text-primaryblue font-medium text-[14px] ">
                Sign up
                </button>
            </div>
        </div>
      
    </div>
    <div className='w-[90%] flex flex-col md:flex-row justify-between items-center mt-4 text-white'>
        <h2 className='text-[14px]'>Copyright 2022 Avion LTD</h2>
        <div className='w-[263px] flex justify-between mt-2 md:mt-0 '>
            <div className="flex space-x-6 justify-between ">
                <Link href={''}><FaFacebookSquare className="w-[24px] h-[24px]" /></Link>
                <Link href={''}><FaInstagram  className="w-[24px] h-[24px]"/></Link>
                <Link href={''}><FaTwitter className="w-[24px] h-[24px]"/></Link>
                <Link href={''}><IoLogoLinkedin className="w-[24px] h-[24px]"/></Link>
                <Link href={''}><FaSkype className="w-[24px] h-[24px]"/></Link>
                <Link href={''}><FaPinterest className="w-[24px] h-[24px]" /></Link>
            </div>
        </div>
    </div>
    </div>
    
  );
}

export default Footer



