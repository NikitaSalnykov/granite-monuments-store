import React, { useEffect } from 'react';
import { Filter } from '../../components/Filter/Filter';
import { ProductList } from '../../components/ProductList/ProductList';
import { Container } from '../../components/Container/Container';
import { Section } from '../../components/Section/Section';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../Redux/products/productsSelectors';
import { fetchProducts } from '../../Redux/products/productsOperation';

const CategoryPage = () => {
  const dispatch = useDispatch();
  const products = useSelector(getProducts);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <Section>
      <Container className="h-screen">
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
        <ProductList products={products} />
      </Container>
    </Section>
  );
};

export default CategoryPage;
