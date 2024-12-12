import Link from 'next/link'
import React from 'react'
import { products } from "../products/productsData";

const Listing = () => {
    const limitedProducts = products.slice(0, 4);
  return (
    <div className='h-auto md:h-[634px] bg-white flex flex-col justify-center items-center'>
        <div className='flex flex-wrap gap-4 justify-center pt-6 mb-8'>
            {limitedProducts.map((product)=>(
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
        <Link href={"/products"}><button className='my-[16px] mx-[24px] h-[56px] w-[170px] bg-[#F9F9F9] text-greyhome'>View Collection</button></Link>
    </div>
  )
}

export default Listing
