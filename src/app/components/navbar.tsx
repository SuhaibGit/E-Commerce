import React from 'react'
import {Inter} from "next/font/google"
import { CiSearch } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import Link from 'next/link'
const inter = Inter({subsets:['latin']})


const Navbar = () => {
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
return (
    <div className='h-auto bg-white text-greyhome flex flex-col justify-end'>
        <div className='h-[60px] border-b border-gray-300 flex items-center justify-between px-4 md:px-8'>
            <Link href=''>
                <CiSearch className="w-[16px] h-[16px]" />
            </Link>
            <h1 className='font-medium text-[20px] md:text-[24px] text-[#22202E]'>Avion</h1>
            <div className='flex space-x-4'>
                <Link href=''>
                    <IoCartOutline className='w-[16px] h-[16px]' />
                </Link>
                <Link href=''>
                    <FaRegUserCircle className='w-[16px] h-[16px]' />
                </Link>
            </div>
        </div>
        <div className='h-[40px] p-2  hidden md:flex  justify-center'>
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

export default Navbar