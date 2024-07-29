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

export const ProductList = ({ products }) => {
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;
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

  console.log(products);

  const filteredProducts = (product) => {
    if (!products || products.length <= 0) return product;

    const price = filterPrice.replace(/\D/g, '');

    return product.filter((el) => {
      let categoryMatch;
      const nameMatch =
        el.name.ru.toLowerCase().includes(filterName.toLowerCase()) ||
        el.name.ua.toLowerCase().includes(filterName.toLowerCase());

      if (filterCategory === t('monuments')) {
        const types = [
          t('availability'),
          t('vertical'),
          t('horizontal'),
          t('small'),
        ];
        categoryMatch = types.some((category) =>
          el.category.toLowerCase().includes(category.toLowerCase())
        );
      } else if (filterCategory === t('landscaping')) {
        const types = [
          t('antiSettlementSlabs'),
          t('pavingTiles'),
          t('graniteTiles'),
          t('fencing'),
          t('tablesAndBenches'),
          t('vasesAndLamps'),
          t('cubesAndSpheres'),
        ];
        categoryMatch = types.some((category) =>
          el.category.toLowerCase().includes(category.toLowerCase())
        );
      } else if (filterCategory === t('relatedProducts')) {
        const types = [t('glassPhotos'), t('plaques'), t('embeddedParts')];
        categoryMatch = types.some((category) =>
          el.category.toLowerCase().includes(category.toLowerCase())
        );
      } else {
        categoryMatch =
          filterCategory === t('all_categories') ||
          el.category.toLowerCase().includes(filterCategory.toLowerCase());
      }

      const pricerMatch =
        filterType === t('all_types') ||
        el.type.toLowerCase().includes(filterType.toLowerCase());
      const discountMatch = !filterSale || el.discount > 0;
      const priceMatch = filterPrice === '' || +el.price < price;

      return (
        nameMatch && categoryMatch && pricerMatch && discountMatch && priceMatch
      );
    });
  };

  const paginatedProducts = (products) =>
    filteredProducts(products).slice(
      (currentPage - 1) * limit,
      currentPage * limit
    );

  const handleClickPage = (target) => {
    setCurrentPage(target.selected + 1);
  };

  return (
    <>
      {paginatedProducts(products) && paginatedProducts(products).length > 0 ? (
        <div className="mx-auto">
          <div className="grid grid-cols-2 gap-x-8 gap-y-4 md:grid-cols-3 lg:grid-cols-5">
            {paginatedProducts(products).map((product, index) => (
              <ProductCard
                key={product._id}
                id={product._id}
                image={product.mainPhoto}
                name={product.name}
                description={product.description}
                price={product.price}
                discount={product.discount}
                category={product.category}
                type={product.type}
              />
            ))}
          </div>
          {Math.ceil(filteredProducts(products).length / limit) > 1 && (
            <Pagination
              handleClickPage={handleClickPage}
              totalPages={Math.ceil(filteredProducts(products).length / limit)}
            />
          )}
        </div>
      ) : (
        <div className="text-center h-screen align-middle">
          {t('not_found')}
        </div>
      )}
    </>
  );
};
