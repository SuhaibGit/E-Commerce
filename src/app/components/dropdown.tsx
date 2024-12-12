'use client'; 
import React, { useState } from 'react';

const Dropdown = () => {
  const [selectedQuantity, setSelectedQuantity] = useState(1);

  const handleChange = (e:React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedQuantity(Number(e.target.value));
  };

  return (
    <div className=" flex  items-center w-[100px]">
      <label htmlFor="quantity" className="flex text-[#22202E]  font-medium pr-5">Quantity</label>
      <select
        id="quantity"
        value={selectedQuantity}
        onChange={handleChange}
        className="w-[62px] px-4 py-2 border border-gray-300 rounded-md text-[#22202E] bg-white">
        {[1, 2, 3, 4, 5].map((quantity) => (
          <option key={quantity} value={quantity}>
            {quantity}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;