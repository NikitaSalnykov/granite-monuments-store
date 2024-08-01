import React, { useEffect } from 'react';
import ProductDetails from '../../components/ProductDetails/ProductDetails';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchProducts,
  getProductById,
} from '../../Redux/products/productsOperation';
import { getIsLoadingSelectedProduct, getSelectedProducts } from '../../Redux/products/productsSelectors';
import { SwiperCards } from '../../components/Swiper/SwiperCards';
import { Section } from '../../components/Section/Section';
import { Container } from '../../components/Container/Container';
import { ProductsRecommendation } from '../../components/ProductsRecommendation/ProductsRecommendation';

const ProductPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductById(id));
  }, [dispatch]);

  const product = useSelector(getSelectedProducts);
  const isLoading = useSelector(getIsLoadingSelectedProduct)


  return (
<div className='min-h-screen'>
<Section>
  {!isLoading ?
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


   <div className="pb-12">
    {product && <ProductsRecommendation type={product.type} category={product.category} discount={true}/>  }
   </div>
    </Container>
       : (<Container>
       <div className="flex flex-col lg:flex-row gap-4">
       <div className=" bg-slate-200 animate-pulse w-full rounded-lg h-[450px] md:h-[600px] lg:w-1/2"></div>
    <div className="flex flex-col gap-4 lg:w-1/2">
      <div className=" bg-slate-200 animate-pulse w-full rounded-lg h-[50px] lg:w-full"></div>
       <div className=" bg-slate-200 animate-pulse w-full rounded-lg h-[50px] lg:w-full"></div>
       <div className=" bg-slate-200 animate-pulse w-full rounded-lg h-[150px] lg:w-full"></div>
       <div className=" bg-slate-200 animate-pulse w-full rounded-lg h-[150px] lg:h-[400px] lg:w-full"></div>
    </div>

       </div>
       </Container>)}
   </Section>
   </div>
  );
};

export default ProductPage;
