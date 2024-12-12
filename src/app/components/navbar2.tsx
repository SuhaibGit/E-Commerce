import Link from 'next/link'
import React from 'react'
import {Inter} from "next/font/google"
import { CiSearch } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
const inter = Inter({subsets:['latin']})

const Navbar2 = () => {
  const navItems = [{
    name:"Plant pots",
    link:"/products"
},
{
    name:"Ceramics",
    link:"/products"
},
{
    name:"Tables",
    link:"/products"
},
{
    name:"Chairs",
    link:"/products"
},
{
    name:"Crockery",
    link:"/products"
},
{
    name:"Tableware",
    link:"/products"
},
{
    name:"Cutlery",
    link:"/products"
},
]
const impitems=[{
  name:"Blog",
  link:"#"
},
{
  name:"About Us",
  link:"/about"
},
{
  name:"Contact Us",
  link:"#"
}

]
return (
    <div className='h-auto bg-white text-greyhome flex flex-col justify-end'>
        <div className='h-[60px] border-b border-gray-300 flex items-center justify-between px-4 md:px-8'>
            <h1 className='font-medium text-[20px] md:text-[24px] text-[#22202E]'>Avion</h1>
            <div className=' flex items-center space-x-4 md:space-x-6'>
                <ul className={`${inter.className} hidden md:flex flex-row items-center justify-center font-medium text-[14px] md:text-[16px] text-greyhome space-x-4 md:space-x-6`}>
                    {impitems.map((item, i) => (
                        <li key={i}>
                            <Link href={item.link}>
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
                <Link href=''>
                    <CiSearch className="w-[16px] h-[16px]" />
                </Link>
                <Link href=''>
                    <IoCartOutline className='w-[16px] h-[16px]' />
                </Link>
                <Link href=''>
                    <FaRegUserCircle className='w-[16px] h-[16px]' />
                </Link>
            </div>
        </div>
        <div className='hidden md:h-[40px] md:p-2 md:flex md:justify-center bg-[#F9F9F9]'>
            <ul className={`${inter.className} flex flex-row items-center justify-center font-medium text-[14px] md:text-[16px] text-greyhome space-x-4 md:space-x-8`}>
                {navItems.map((item, i) => (
                    <li key={i}>
                        <Link href={item.link}>
                            {item.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    </div>
);
}

export default Navbar2