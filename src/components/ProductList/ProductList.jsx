import React from 'react';
import image from '../../images/example.webp';
import { ProductCard } from '../ProductCard/ProductCard';

export const ProductList = ({products}) => {
  const count = 8;
  const items = Array.from({ length: count });

  return (
    <div className="mx-auto">
      <div className="grid grid-cols-2 gap-x-8 gap-y-4 md:grid-cols-4">
        {products.map((product, index) => (
          <ProductCard id={product.id} image={product.image} title={product.title} description={product.description} price={product.price} discount={product.discount} category={product.category} type={product.type}/>
        ))}
      </div>
    </div>
  );
};
