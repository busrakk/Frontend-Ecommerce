import React from 'react';
import {
  FiHeart,
} from 'react-icons/fi';

const ProductItem = ({product}) => {
  return (
    <div className='relative bg-white flex flex-col gap-y-1 p-3 items-center text-center text-sm font-semibold border space-x-4 hover:scale-105 duration-300'>
      <button className='absolute top-3 right-3 transition-colors bg-white w-8 h-8 flex items-center justify-center border border-gray-200 rounded-lg text-primary-brand-color shadow-md hover:border-primary-brand-color'>
        <FiHeart size={16} />
      </button>
      <img src={product.image} alt={product.title} className='w-full h-[200px] object-cover rounded-t-lg' />
      <div className='text-primary-brand-color'>{product.price}</div>
      <div className='text-gray-900'>{product.title}</div>
      <div className='text-gray-500'>{product.alt}</div>
    </div>
  )
}

export default ProductItem

