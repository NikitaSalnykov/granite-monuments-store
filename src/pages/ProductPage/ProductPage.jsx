import React, { useEffect } from 'react';
import ProductDetails from '../../components/ProductDetails/ProductDetails';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchProducts,
  getProductById,
} from '../../Redux/products/productsOperation';
import { getSelectedProducts } from '../../Redux/products/productsSelectors';

const ProductPage = () => {
  const { id } = useParams();
  console.log(id);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductById(id));
  }, [dispatch]);

  const product = useSelector(getSelectedProducts);
  console.log(product);

  return (
    <div className="min-h-screen">
      {product && <ProductDetails
        image={product.mainPhoto}
        name={product.name}
        description={product.description}
        price={product.price}
        discount={product.discount}
        category={product.category}
        type={product.type}
      />}
    </div>
  );
};

export default ProductPage;
