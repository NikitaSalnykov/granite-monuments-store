import React, { useState } from 'react';
import image from '../../images/example.webp';
import { ProductCard } from '../ProductCard/ProductCard';
import {
  getFilterCategory,
  getFilterType,
  getFilterName,
  getFilterNew,
  getFilterPrice,
  getFilterSale,
} from '../../Redux/filter/filterSlice';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Pagination } from '../Pagination/Pagination';

export const ProductList = ({products}) => {

  const { t } = useTranslation();

  const filterName = useSelector(getFilterName);
  const filterCategory = useSelector(getFilterCategory);
  const filterPrice = useSelector(getFilterPrice);
  const filterType = useSelector(getFilterType);
  const filterSale = useSelector(getFilterSale);
  const filterNew = useSelector(getFilterNew);

  const [currentPage, setCurrentPage] = useState(1);
  const limit = 8;

  // const newProducts = (products) => {

  //   if (!filterNew) {
  //     return filteredProducts(products)
  //   }

  //   const productsWithTimestamps = products.map((el) => ({
  //     timestamp: new Date(el.createdAt).getTime(),
  //     product: el,
  //   }));

  //   const sortedProducts = productsWithTimestamps.sort(
  //     (a, b) => b.timestamp - a.timestamp
  //   );
  //   const sortedProductObjects = sortedProducts.map((item) => item.product);
  //   return filteredProducts(sortedProductObjects);
  // };

  const filteredProducts = (product) => {
   
    if (!products) return product;
   
    const price = filterPrice.replace(/\D/g, '')
    
    return product.filter((el) => {
      console.log(el);
      let categoryMatch
      const nameMatch = el.title.toLowerCase().includes(filterName.toLowerCase());
     
      if(filterCategory === t('monuments')) {
      const fabricsCategories  = [t('availability'), t('vertical'), t('horizontal'), t('small')]
        categoryMatch = fabricsCategories.some(category => el.category.toLowerCase().includes(category.toLowerCase()));
    } else if (filterCategory === t('landscaping')) {
        const fabricsCategories  = [t('anti_settlement_slabs'), t('paving_tiles'), t('granite_tiles'),t('fencing'),t('tables_and_benches'),t('vases_and_lamps'),t('cubes_and_spheres')]
        categoryMatch = fabricsCategories.some(category => el.category.toLowerCase().includes(category.toLowerCase()));
      } else if (filterCategory === t('related_products')) {
        const fabricsCategories  = [t('glass_photos'), t('plaques'), t('embedded_parts')]
        categoryMatch = fabricsCategories.some(category => el.category.toLowerCase().includes(category.toLowerCase()));
      } else {
         categoryMatch = filterCategory === 'Всі категорії' || el.category.toLowerCase().includes(filterCategory.toLowerCase());
      }

      const colorMatch = filterType === 'Всі типи' || el.type.toLowerCase().includes(filterType.toLowerCase());
      const discountMatch = !filterSale || el.discount > 0
      const priceMatch = filterPrice === '' || +el.price < price

      return nameMatch && categoryMatch && colorMatch && discountMatch && priceMatch ;
    });
  };

  const paginatedProducts = (products) =>
  filteredProducts(products).slice((currentPage - 1) * limit, currentPage * limit);


  const handleClickPage = (target) => {
    setCurrentPage(target.selected + 1);
  };  

  return (
<>
{paginatedProducts(products) &&  <div className="mx-auto">
      <div className="grid grid-cols-2 gap-x-8 gap-y-4 md:grid-cols-4">
        {paginatedProducts(products).map((product, index) => (
          <ProductCard id={product.id} image={product.image} title={product.title} description={product.description} price={product.price} discount={product.discount} category={product.category} type={product.type}/>
        ))}
      </div>
      {Math.ceil(filteredProducts(products).length / limit) > 1 && (
              <Pagination
                handleClickPage={handleClickPage}
                totalPages={Math.ceil(filteredProducts(products).length / limit)}
              />
            )}
    </div>
        }</>
  );
};
