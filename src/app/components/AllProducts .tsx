import Link from 'next/link'
import React from 'react'
import { products } from "../products/productsData";
import Navbar from './navbar';
import Footer from './footer';

const AllProduct = () => {
  return (
    <>
    <Navbar/>
    <div className="h-[209px] w-[100%] bg-[url('/assets/abc.jpg')] bg-cover bg-center flex justify-start  items-center pl-[150px] pt-[80px] text-[36px] font-light"> <h1>All Products</h1></div>
    <div className='h-[90%px] bg-white flex flex-col justify-center items-center'>
        <div className='flex flex-wrap gap-4 justify-center pt-6 mb-8'>
            {products.map((product)=>(
                <div key={product.id} className="w-[305px] h-[462px] bg-white">
                <div
                  className="h-[375px] bg-cover bg-center"
                  style={{ backgroundImage: `url(${product.image})` }}
                ><Link href={`/products/${product.id}`} className="block w-full h-full">
              </Link>
              </div>
            <div className="py-4">
              <h2 className="text-black">{product.title}</h2>
              <p className="text-greyhome">{product.price}</p>
            </div>
              </div>
            ))}
        </div>
        <Link href={"/products"}><button className='my-[16px] mx-[24px] h-[56px] w-[170px] bg-primaryblue text-white'>Back To Top</button></Link>
    </div>
    <Footer/>
    </>
  )
}

export default AllProduct