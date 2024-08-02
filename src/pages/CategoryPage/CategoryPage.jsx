import React, { useEffect } from 'react';
import { Filter } from '../../components/Filter/Filter';
import { ProductList } from '../../components/ProductList/ProductList';
import { Container } from '../../components/Container/Container';
import { Section } from '../../components/Section/Section';
import { useDispatch, useSelector } from 'react-redux';
import {
  getIsLoadingProducts,
  getProducts,
} from '../../Redux/products/productsSelectors';
import { fetchProducts } from '../../Redux/products/productsOperation';
import { SkeletonProduct } from '../../components/Loader/SkeletonProduct/SkeletonProduct';

const CategoryPage = () => {
  const dispatch = useDispatch();
  const products = useSelector(getProducts);
  const isLoading = useSelector(getIsLoadingProducts);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <Section>
      <Container className="h-screen">
      {!isLoading ?
        <>
        <div className="mb-4 md:mb-8">
          <Filter
            nameFilter={true}
            filterType={true}
            filterCategory={true}
            filterPrice={true}
            filterNew={true}
            filterSale={true}
          />
        </div>
         <ProductList products={products} /></> : <SkeletonProduct />}
      </Container>
    </Section>
  );
};

export default CategoryPage;
