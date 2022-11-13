import React, { useState, useEffect } from 'react';
import Title from '../../../components/UI/Title';
import Products from '../../../api/products.json';
import ProductItem from '../UI/ProductItem';


const Advertisement = () => {

  const [products, setProducts] = useState([])

  useEffect(() => {
    setProducts(Products);
  }, [])

  return (
    <div>
      <Title>Güncel İlanlar</Title>
      <div className='grid grid-cols-2 2xl:grid-col-6 xl:grid-col-5 lg:grid-cols-5 md:grid-cols-4 gap-5 rounded-lg shadow-sm overflow-hidden'>
        {products.length && products.map((product, index) => 
          <ProductItem key={index} product={product} />
        )}
      </div>
    </div>
  )
}

export default Advertisement