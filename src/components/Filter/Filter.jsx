import React, { useState, useEffect } from 'react';
import Svg from '../Svg/Svg';
import {
  setFilterCategory,
  setFilterType,
  setFilterName,
  setFilterNew,
  setFilterPrice,
  setFilterSale,
  getFilterCategory,
  getFilterType,
  getFilterName,
  getFilterNew,
  getFilterPrice,
  getFilterSale,
} from '../../Redux/filter/filterSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';

export const Filter = ({
  nameFilter = false,
  filterType = false,
  filterCategory = false,
  filterPrice = false,
  filterNew = false,
  filterSale = false,
  value,
}) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const category = useSelector(getFilterCategory);
  const type = useSelector(getFilterType);
  const name = useSelector(getFilterName);
  const isNew = useSelector(getFilterNew);
  const price = useSelector(getFilterPrice);
  const sale = useSelector(getFilterSale);
  let navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;

  const [isCheckedSale, setCheckedSale] = useState(
    value === 'sale' ? true : false
  );

  useEffect(() => {
    applyFiltersFromPathname();
  }, [pathname]);

  const applyFiltersFromPathname = () => {
    if (pathname.toLocaleLowerCase().includes('monuments')) {
      dispatch(setFilterCategory('monuments'));
    } else if (pathname.toLocaleLowerCase().includes('landscaping')) {
      dispatch(setFilterCategory('landscaping'));
    } else if (pathname.toLocaleLowerCase().includes('relatedproducts')) {
      dispatch(setFilterCategory('relatedProducts'));
    }

    // Дополнительные условия для типа, цены и других фильтров
    if (pathname.toLocaleLowerCase().includes('availability')) {
      dispatch(setFilterType('availability'));
    } else if (pathname.toLocaleLowerCase().includes('vertical')) {
      dispatch(setFilterType('vertical'));
    } else if (pathname.toLocaleLowerCase().includes('horizontal')) {
      dispatch(setFilterType('horizontal'));
    } else if (pathname.toLocaleLowerCase().includes('small')) {
      dispatch(setFilterType('small'));
    } else if (pathname.toLocaleLowerCase().includes('antiSettlementSlabs')) {
      dispatch(setFilterType('antiSettlementSlabs'));
    } else if (pathname.toLocaleLowerCase().includes('pavingTiles')) {
      dispatch(setFilterType('pavingTiles'));
    } else if (pathname.toLocaleLowerCase().includes('graniteTiles')) {
      dispatch(setFilterType('graniteTiles'));
    } else if (pathname.toLocaleLowerCase().includes('fencing')) {
      dispatch(setFilterType('fencing'));
    } else if (pathname.toLocaleLowerCase().includes('tablesAndBenches')) {
      dispatch(setFilterType('tablesAndBenches'));
    } else if (pathname.toLocaleLowerCase().includes('vasesAndLamps')) {
      dispatch(setFilterType('vasesAndLamps'));
    } else if (pathname.toLocaleLowerCase().includes('cubesAndSpheres')) {
      dispatch(setFilterType('cubesAndSpheres'));
    } else if (pathname.toLocaleLowerCase().includes('glassPhotos')) {
      dispatch(setFilterType('glassPhotos'));
    } else if (pathname.toLocaleLowerCase().includes('plaques')) {
      dispatch(setFilterType('plaques'));
    } else if (pathname.toLocaleLowerCase().includes('embeddedParts')) {
      dispatch(setFilterType('embeddedParts'));
    } else if (pathname.toLocaleLowerCase().includes('all')) {
      dispatch(setFilterType(''));
    }

    // Пример для других фильтров
    // if (pathname.toLocaleLowerCase().includes('minprice')) {
    //   dispatch(setFilterPrice('min'));
    // } else if (pathname.toLocaleLowerCase().includes('maxprice')) {
    //   dispatch(setFilterPrice('max'));
    // }
  };

  const handleFilter = ({ currentTarget }) => {
    dispatch(setFilterName(currentTarget.value));
  };

  const handleFilterType = ({ currentTarget }) => {
    dispatch(setFilterType(currentTarget.value));
    navigate(`/${category.toLowerCase()}/${currentTarget.value.toLowerCase()}`);
  };

  const handleFilterCategory = ({ currentTarget }) => {
    dispatch(setFilterCategory(currentTarget.value));
    if (currentTarget.value.toLowerCase() === 'products')
      return navigate(`/products`);
    navigate(`/${currentTarget.value.toLowerCase()}/all`);
  };

  const handleFilterPrice = ({ currentTarget }) => {
    dispatch(setFilterPrice(currentTarget.value));
  };

  const handleFilterNew = (e) => {
    const isChecked = e.currentTarget.checked;
    dispatch(setFilterNew(isChecked));
  };

  const handleFilterSale = (e) => {
    const isChecked = e.currentTarget.checked;
    setCheckedSale(isChecked);
    dispatch(setFilterSale(isChecked));
  };

  return (
    <div className="w-full flex flex-col lg:flex-row gap-4 items-center justify-center">
      <div className="flex gap-4 flex-wrap">
        {nameFilter && (
          <div className="flex gap-1 bg-gray-50 border-[1px] px-2 text-gray-800 border-gray-300 hover:outline-none focus:outline-none rounded-lg mx-auto py-2">
            <label
              className="flex justify-center items-center"
              style={{ marginRight: '14px' }}
              htmlFor="filter"
            >
              <Svg id={'icon-search'} size={22} stroke={'black'} />
            </label>
            <input
              id="filter"
              type="text"
              name="input"
              required
              value={name}
              onChange={handleFilter}
              variant="standard"
              className="w-full hover:outline-none focus:outline-none bg-gray-50"
            />
          </div>
        )}
        <div className="flex gap-4 mx-auto flex-wrap justify-center items-center">
          {filterCategory && (
            <div className="flex justify-center items-center max-w-[100px] lg:max-w-[200px]">
              <label
                className="sr-only"
                style={{ marginRight: '14px' }}
                htmlFor="filterCategory"
              >
                Категория
              </label>
              <select
                id="filterCategory"
                onChange={handleFilterCategory}
                className="smOnly:w-[120px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block md:w-full p-2.5"
                value={category}
              >
                <option value="products">Всі категорії</option>
                <option value="monuments">{t('monuments')}</option>
                <option value="landscaping">{t('landscaping')}</option>
                <option value="relatedproducts">{t('relatedProducts')}</option>
              </select>
            </div>
          )}
          {filterType && category === 'monuments' && (
            <div className="flex justify-center items-center max-w-[100px] lg:max-w-[200px]">
              <label
                className="sr-only"
                style={{ marginRight: '14px' }}
                htmlFor="filterType"
              >
                Тип
              </label>
              <select
                id="filterType"
                onChange={handleFilterType}
                className="smOnly:min-w-[100px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                value={type}
              >
                <option value="all">Всі типи</option>
                <option value="availability">{t('availability')}</option>
                <option value="vertical">{t('vertical')}</option>
                <option value="horizontal">{t('horizontal')}</option>
                <option value="small">{t('small')}</option>
              </select>
            </div>
          )}
          {filterType && category === 'landscaping' && (
            <div className="flex justify-center items-center max-w-[100px] lg:max-w-[200px]">
              <label
                className="sr-only"
                style={{ marginRight: '14px' }}
                htmlFor="filterType"
              >
                Тип
              </label>
              <select
                id="filterType"
                onChange={handleFilterType}
                className="smOnly:min-w-[100px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                value={type}
              >
                <option value="all">Всі типи</option>
                <option value="antiSettlementSlabs">
                  {t('antiSettlementSlabs')}
                </option>
                <option value="pavingTiles">{t('pavingTiles')}</option>
                <option value="graniteTiles">{t('graniteTiles')}</option>
                <option value="fencing">{t('fencing')}</option>
                <option value="tablesAndBenches">
                  {t('tablesAndBenches')}
                </option>
                <option value="vasesAndLamps">{t('vasesAndLamps')}</option>
                <option value="cubesAndSpheres">{t('cubesAndSpheres')}</option>
              </select>
            </div>
          )}
          {filterType && category === 'relatedProducts' && (
            <div className="flex justify-center items-center max-w-[100px] lg:max-w-[200px]">
              <label
                className="sr-only"
                style={{ marginRight: '14px' }}
                htmlFor="filterType"
              >
                Тип
              </label>
              <select
                id="filterType"
                onChange={handleFilterType}
                className="smOnly:min-w-[100px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                value={type}
              >
                <option value="all">Всі типи</option>
                <option value="glassPhotos">{t('glassPhotos')}</option>
                <option value="plaques">{t('plaques')}</option>
                <option value="embeddedParts">{t('embeddedParts')}</option>
              </select>
            </div>
          )}
          {filterPrice && (
            <div className="flex justify-center items-center max-w-[100px]">
              <label
                className="sr-only"
                style={{ marginRight: '14px' }}
                htmlFor="filterPrice"
              >
                Ціна
              </label>
              <select
                id="filterPrice"
                onChange={handleFilterPrice}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                value={price}
              >
                <option value="">Всі ціни</option>
                <option value="min">Від дешевих до дорогих</option>
                <option value="max">Від дорогих до дешевих</option>
              </select>
            </div>
          )}
          {(filterNew || filterSale) && (
            <div className=" flex gap-4 justify-center items-center">
              {filterNew && (
                <div className="flex justify-center items-center">
                  <input
                    id="filterNew"
                    type="checkbox"
                    checked={isNew}
                    onChange={handleFilterNew}
                    className="form-checkbox h-5 w-5 text-indigo-600 rounded-lg"
                  />
                  <label
                    htmlFor="filterNew"
                    className="ml-2 text-gray-700 text-sm md:text-md"
                  >
                    Новинка
                  </label>
                </div>
              )}
              {filterSale && (
                <div className="flex justify-center items-center">
                  <input
                    id="filterSale"
                    type="checkbox"
                    checked={isCheckedSale}
                    onChange={handleFilterSale}
                    className="form-checkbox h-5 w-5 text-indigo-600 rounded-lg"
                  />
                  <label
                    htmlFor="filterSale"
                    className="ml-2 text-gray-700 text-sm md:text-md"
                  >
                    Розпродаж
                  </label>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
