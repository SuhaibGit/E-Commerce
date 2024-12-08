'use client'; 
import React, { useState } from 'react';
import Dropdown from './dropdown';




const Pro_det = ({ product }: { product: { title: string; description: string; image: string; price: string; id: number } }) => {

  return (
    
    <div className='h-[600px] w-[100%] flex'>
        <div className="h-[100%] w-[50%] bg-cover bg-center"
        style={{ backgroundImage: `url(${product.image})` }}></div>
        <div className='w-[50%] bg-slate-50 flex flex-col justify-start items-center'>
            <div className='m-[20px] w-[602px] h-[657px]' >
                <h1 className='text-[36px] text-primaryblue'>{product.title}</h1>
                <p className='text-[24px] text-primaryblue my-[20px]'>{product.price}</p>
                <h3 className='text-[16px] font-medium text-primaryblue my-[20px]'>Description</h3>
                <p className='text-[16px] text-primaryblue'>{product.description}</p>
                <h3 className='text-[16px] font-medium text-primaryblue my-[20px] display'>Dimensions</h3>
                <ul className='flex justify-start gap-12 text-[16px] font-medium text-primaryblue'>
                    <li>Height</li>
                    <li>Width</li>
                    <li>Depth</li>
                </ul>
                <ul className='flex justify-start gap-11 text-[16px] font-medium text-primaryblue'>
                    <li>150cm</li>
                    <li>160cm</li>
                    <li>190cm</li>
                </ul>
                <div className=' w-[602px] mt-[50px] flex flex-row justify-between items-center'>
                <Dropdown/> <button className="'my-[8px] mx-[16px] md:my-[16px] md:mx-[24px] h-[48px] md:h-[56px] w-[120px] md:w-[170px] bg-primaryblue text-white text-[12px] md:text-[16px]">Add to cart</button>
                </div>
            </div>
            

        </div>
    </div>
  )
}
  
  export default Pro_det;

