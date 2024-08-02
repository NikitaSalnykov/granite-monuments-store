import React, { useEffect, useState } from 'react';
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
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Pagination } from '../Pagination/Pagination';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  setFilterCategory,
  setFilterType,
  setFilterName,
  setFilterNew,
  setFilterPrice,
  setFilterSale,
} from '../../Redux/filter/filterSlice';

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
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);

  const limit = 10;
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const name = params.get('name');
  const category = params.get('category');
  const type = params.get('type');
  const price = params.get('price');
  const sale = params.get('sale');
  const newFilter = params.get('new');
  const page = params.get('page');
  const queryParams = new URLSearchParams();


  useEffect(() => {
    if (name) dispatch(setFilterName(name));
    if (category) {
      dispatch(setFilterCategory(category));
    }
    if (type) dispatch(setFilterType(type));
    if (price) dispatch(setFilterPrice(price));
    if (sale) dispatch(setFilterSale(sale));
    if (newFilter) dispatch(setFilterNew(newFilter));
    if (page) setCurrentPage(Number(page));
    if (category === '') {
      dispatch(setFilterType(''));
      dispatch(setFilterCategory(''));
    }

    if (location.pathname.includes('buildingMaterials')) {
      dispatch(setFilterCategory(''));
      dispatch(setFilterType(''));
    }
  }, [location.search, dispatch]);

  useEffect(() => {
    if (filterName) queryParams.set('name', filterName);
    if (filterType && filterCategory !== '')
      queryParams.set('type', filterType);
    if (filterCategory) {
      queryParams.set('category', filterCategory);
    }
    if (filterPrice) queryParams.set('price', filterPrice);
    if (filterNew) queryParams.set('new', filterNew);
    if (filterSale) {
      queryParams.set('sale', filterSale);
    }
    if (currentPage) queryParams.set('page', currentPage);

    navigate(`${location.pathname}?${queryParams.toString()}`);
  }, [
    filterName,
    filterCategory,
    filterType,
    filterPrice,
    filterNew,
    filterSale,
    currentPage,
    navigate,
    location.pathname,
  ]);

  useEffect(() => {
    dispatch(setFilterName(''));
    dispatch(setFilterPrice(''));
    dispatch(setFilterSale(false));
    dispatch(setFilterNew(false));
  }, [filterCategory, filterType, currentPage, navigate, location.pathname]);

  


  const filteredProducts = (products) => {
    if (!products || products.length <= 0) return products;

    const price = filterPrice.replace(/\D/g, '');

    return products
      .filter((el) => {
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

        const typeMatch =
          filterType === t('all_types') ||
          el.type.toLowerCase().includes(filterType.toLowerCase());

        return nameMatch && categoryMatch && typeMatch;
      })
      .sort((a, b) => {
        // Сортировка по скидке
        if (filterSale && a.discount > 0 && b.discount === 0) return -1;
        if (filterSale && a.discount === 0 && b.discount > 0) return 1;

        // Сортировка по цене
        if (filterPrice === 'min') {
          return a.price - b.price;
        }
        if (filterPrice === 'max') {
          return b.price - a.price;
        }
        // Сортировка по доступности
        if (!a.availability && b.availability) return 1;
        if (a.availability && !b.availability) return -1;
        return 0; // Если фильтрация по цене не задана
      });
  };

  const newProducts = (products) => {
    if (!filterNew) {
      return filteredProducts(products);
    }

    const productsWithTimestamps = products.map((el) => ({
      timestamp: new Date(el.createdAt).getTime(),
      product: el,
    }));

    const sortedProducts = productsWithTimestamps.sort(
      (a, b) => b.timestamp - a.timestamp
    );
    const sortedProductObjects = sortedProducts.map((item) => item.product);
    return filteredProducts(sortedProductObjects);
  };

  const paginatedProducts = (products) =>
    newProducts(products).slice((currentPage - 1) * limit, currentPage * limit);

  const handleClickPage = (target) => {
    setCurrentPage(target.selected + 1);
  };

  return (
    <>
      {paginatedProducts(products) && paginatedProducts(products).length > 0 ? (
        <div className="mx-auto">
          <div className="grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-3 lg:grid-cols-5">
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
                availability={product.availability}
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
