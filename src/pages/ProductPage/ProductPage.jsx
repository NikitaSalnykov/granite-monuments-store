import React, { useEffect } from 'react';
import ProductDetails from '../../components/ProductDetails/ProductDetails';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchProducts,
  getProductById,
} from '../../Redux/products/productsOperation';
import { getSelectedProducts } from '../../Redux/products/productsSelectors';
import { SwiperCards } from '../../components/Swiper/SwiperCards';
import { Section } from '../../components/Section/Section';
import { Container } from '../../components/Container/Container';
import { ProductsRecommendation } from '../../components/ProductsRecommendation/ProductsRecommendation';

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
<div className='min-h-screen'>
<Section>
    <Container>
      {product && <ProductDetails
        image={product.mainPhoto}
        name={product.name}
        description={product.description}
        price={product.price}
        discount={product.discount}
        category={product.category}
        type={product.type}
      />}

{product &&
   <div className="pb-12">
    <ProductsRecommendation type={product.type} category={product.category} discount={true}/>   
   </div>
   }
    </Container>
   </Section>
   </div>
  );
};

export default ProductPage;
