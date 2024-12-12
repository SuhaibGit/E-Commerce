import Link from 'next/link'
import React from 'react'
import {Inter} from "next/font/google"
import { CiSearch } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
const inter = Inter({subsets:['latin']})

const Navbar1 = () => {
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
    },]
    return (
        <div className='h-[60px] bg-white  text-greyhome flex flex-col justify-end'>
        <div className='h-[50px] border-b border-gray-300 justify-center' >
            <div className=' flex justify-between items-center'>
                
                <h1 className='ml-[28px] font-medium text-[24px] text-[#22202E]'>Avion</h1>
                        <div className=' hidden md:h-[40px] md:p-[4px] md:flex md:justify-center'> 
                <ul className={`${inter.className}  flex flex-row item-center justify-center font-medium text-[16px] text-greyhome space-x-8`}>   
                { 
                navItems.map((item , i) => (
                    <li key={i}>
                        <Link href={item.link}>
                        {item.name}
                        </Link>
                    </li>
                ))
                }
    
            </ul>
            </div>
                <div className='flex '>
                <Link href={''}><CiSearch  className="mr-[28px] w-[16px] h-[16px]" /></Link>
                <Link href={''}><IoCartOutline className=' mr-[28px] w-[16px] h-[16px]' /></Link>
                <Link href={''}><FaRegUserCircle className=' mr-[28px] w-[16px] h-[16px]'/></Link>
                </div>
            </div>
        </div>
        </div>
      )
}

export default Navbar1