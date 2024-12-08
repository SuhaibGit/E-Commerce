import React from 'react'
// import { useRouter } from "next/router";
import Navbar1 from '../components/navbar1'
import Listing from '../components/listing';
import AllProduct from '../components/AllProducts ';

const Product = () => {
  return (
    <div>
      {/* //onpage click on the image to redirect to the particular produvt detail */}
      <AllProduct/>
    </div>
  )
}

export default Product