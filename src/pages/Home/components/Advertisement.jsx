import React, { useState, useEffect } from "react";
import Title from "../../../components/UI/Title";
import Products from "../../../api/products.json";
import ProductItem from "../UI/ProductItem";

const Advertisement = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(Products);
  }, []);

  return (
    <div class="mx-auto max-w-2xl py-20 z-20 px-2 sm:py-12 sm:px-6 lg:max-w-7xl lg:px-4">
      <div className="flex items-center space-x-8">
        <Title class="sr-only">Güncel İlanlar</Title>
      </div>

      <div class="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {products.length &&
          products.map((product, index) => (
            <ProductItem key={index} product={product} />
          ))}
      </div>
    </div>
  );
};

export default Advertisement;
