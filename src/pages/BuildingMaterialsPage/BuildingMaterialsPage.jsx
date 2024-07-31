import React, { useEffect } from 'react';
import { Filter } from '../../components/Filter/Filter';
import { ProductList } from '../../components/ProductList/ProductList';
import { Container } from '../../components/Container/Container';
import { Section } from '../../components/Section/Section';
import { Title } from '../../components/Title/Title';
import { useTranslation } from 'react-i18next';
import { fetchProducts } from '../../Redux/products/productsOperation';
import { useDispatch, useSelector } from 'react-redux';
import {
  getIsLoadingProducts,
  getProducts,
} from '../../Redux/products/productsSelectors';
import { SkeletonProduct } from '../../components/Loader/SkeletonProduct/SkeletonProduct';
import { setFilterCategory, setFilterName, setFilterNew, setFilterPrice, setFilterSale, setFilterType } from '../../Redux/filter/filterSlice';

const BuildingMaterialsPage = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const products = useSelector(getProducts);
  const isLoading = useSelector(getIsLoadingProducts);
  const filteredProducts = products.filter(el => el.category === "buildingmaterials")

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    return () => {
      dispatch(setFilterName(''));
      dispatch(setFilterCategory('')); 
      dispatch(setFilterType('')); 
      dispatch(setFilterPrice('')); 
      dispatch(setFilterSale(false)); 
      dispatch(setFilterNew(false)); 
    };
  }, []);

  return (
    <Section>
      <Container>
        <div className="min-h-screen">
          <Title
            title={t('buildingMaterials')}
            description={t('landscapingDescription')}
          />

          <Filter
            nameFilter={true}
            filterType={true}
            filterPrice={true}
            filterNew={true}
            filterSale={true}
          />
          <div className="mt-4 md:mt-8">
            {!isLoading ? (
              <ProductList products={filteredProducts} />
            ) : (
              <SkeletonProduct />
            )}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default BuildingMaterialsPage;
