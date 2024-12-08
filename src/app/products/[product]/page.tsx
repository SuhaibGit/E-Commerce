import Branding from '@/app/components/branding'
import Footer from '@/app/components/footer'
import Listing from '@/app/components/listing'
import Navbar1 from '@/app/components/navbar1'
import Pro_det from '@/app/components/pro_det'
import React from 'react'
import { products } from '../productsData'

interface ProductParams {
  product: string;
}
export default async function Product({ params }: { params:  Promise<ProductParams>  }) {

  const { product } = await params;  // Access the productId from params
  const productid = products.find((p) => p.id == Number(product));  // Convert productId to number to match the type

  if (!productid) {
    return <p>Product not found</p>;
  }

  return (
    <div>
        <Navbar1/>
        <Pro_det product={productid}/>
      <h1 className="text-[32px] font-light bg-white text-primaryblue pl-[120px] pt-[40px]">You Might also like</h1>
      <Listing/>
      <Branding/>
      <Footer/>
    </div>
  )
}

