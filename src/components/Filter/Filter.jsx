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
  getFilterSale
} from '../../Redux/filter/filterSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate  } from 'react-router-dom';

export const Filter = ({
  nameFilter = false,
  filterType = false,
  filterCategory = false,
  filterPrice = false,
  filterNew = false,
  filterSale = false,
  value
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

  const [isCheckedSale, setCheckedSale] = useState(value === 'sale' ? true : false);

  useEffect(() => {
    applyFiltersFromPathname();
  }, [pathname]);

  const applyFiltersFromPathname = () => {
    if (pathname.includes('memorials')) {
      dispatch(setFilterCategory('memorials'));
    } else if (pathname.includes('landscaping')) {
      dispatch(setFilterCategory('landscaping'));
    } else if (pathname.includes('relatedproducts')) {
      dispatch(setFilterCategory('relatedProducts'));
    }

    // Дополнительные условия для типа, цены и других фильтров
    if (pathname.includes('availability')) {
      dispatch(setFilterType('availability'));
    } else if (pathname.includes('vertical')) {
      dispatch(setFilterType('vertical'));
    } else if (pathname.includes('horizontal')) {
      dispatch(setFilterType('horizontal'));
    } else if (pathname.includes('small')) {
      dispatch(setFilterType('small'));
    } else if (pathname.includes('antiSettlementSlabs')) {
      dispatch(setFilterType('antiSettlementSlabs'));
    } else if (pathname.includes('pavingTiles')) {
      dispatch(setFilterType('pavingTiles'));
    } else if (pathname.includes('graniteTiles')) {
      dispatch(setFilterType('graniteTiles'));
    } else if (pathname.includes('fencing')) {
      dispatch(setFilterType('fencing'));
    } else if (pathname.includes('tablesAndBenches')) {
      dispatch(setFilterType('tablesAndBenches'));
    } else if (pathname.includes('vasesAndLamps')) {
      dispatch(setFilterType('vasesAndLamps'));
    } else if (pathname.includes('cubesAndSpheres')) {
      dispatch(setFilterType('cubesAndSpheres'));
    } else if (pathname.includes('glassPhotos')) {
      dispatch(setFilterType('glassPhotos'));
    } else if (pathname.includes('plaques')) {
      dispatch(setFilterType('plaques'));
    } else if (pathname.includes('embeddedParts')) {
      dispatch(setFilterType('embeddedParts'))
    } else if (pathname.includes('all')) {
      dispatch(setFilterType(''))}


    // Пример для других фильтров
    // if (pathname.includes('minprice')) {
    //   dispatch(setFilterPrice('min'));
    // } else if (pathname.includes('maxprice')) {
    //   dispatch(setFilterPrice('max'));
    // }
  };

  const handleFilter = ({ currentTarget }) => {
    dispatch(setFilterName(currentTarget.value));
  };

  const handleFilterType = ({ currentTarget }) => {
    dispatch(setFilterType(currentTarget.value));
    navigate(`/${category.toLowerCase()}/${currentTarget.value.toLowerCase()}`)
  };

  const handleFilterCategory = ({ currentTarget }) => {
    dispatch(setFilterCategory(currentTarget.value));
    if(currentTarget.value.toLowerCase() === "products") return navigate(`/products`)
    navigate(`/${currentTarget.value.toLowerCase()}/all`)
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
    <div className="w-full flex flex-col lg:flex-row mb-4 gap-4 items-center justify-center">
      <div className="flex gap-4 flex-wrap">
        {nameFilter && (
          <div className="flex gap-1 bg-gray-50 border-[1px] px-2 text-gray-800 border-gray-300 hover:outline-none focus:outline-none rounded-lg mx-auto py-2">
            <label className="flex justify-center items-center" style={{ marginRight: '14px' }} htmlFor="filter">
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
        <div className="flex gap-4 mx-auto">
          {filterCategory && (
            <div className="flex justify-center items-center">
              <label className="sr-only" style={{ marginRight: '14px' }} htmlFor="filterCategory">
                Категория
              </label>
              <select
                id="filterCategory"
                onChange={handleFilterCategory}
                className="smOnly:w-[120px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block md:w-full p-2.5"
                value={category}
              >
                <option value="products">Всі категорії</option>
                <option value="memorials">{t('monuments')}</option>
                <option value="landscaping">{t('landscaping')}</option>
                <option value="relatedproducts">{t('related_products')}</option>
              </select>
            </div>
          )}
          {((filterType && category === 'memorials')) && (
            <div className="flex justify-center items-center">
              <label className="sr-only" style={{ marginRight: '14px' }} htmlFor="filterType">
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
          {(filterType && category === 'landscaping') && (
            <div className="flex justify-center items-center">
              <label className="sr-only" style={{ marginRight: '14px' }} htmlFor="filterType">
                Тип
              </label>
              <select
                id="filterType"
                onChange={handleFilterType}
                className="smOnly:min-w-[100px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                value={type}
              >
                <option value="all">Всі типи</option>
                <option value="antiSettlementSlabs">{t('anti_settlement_slabs')}</option>
                <option value="pavingTiles">{t('paving_tiles')}</option>
                <option value="graniteTiles">{t('granite_tiles')}</option>
                <option value="fencing">{t('fencing')}</option>
                <option value="tablesAndBenches">{t('tables_and_benches')}</option>
                <option value="vasesAndLamps">{t('vases_and_lamps')}</option>
                <option value="cubesAndSpheres">{t('cubes_and_spheres')}</option>
              </select>
            </div>
          )}
          {(filterType && category === 'relatedProducts') && (
            <div className="flex justify-center items-center">
              <label className="sr-only" style={{ marginRight: '14px' }} htmlFor="filterType">
                Тип
              </label>
              <select
                id="filterType"
                onChange={handleFilterType}
                className="smOnly:min-w-[100px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                value={type}
              >
                <option value="all">Всі типи</option>
                <option value="glassPhotos">{t('glass_photos')}</option>
                <option value="plaques">{t('plaques')}</option>
                <option value="embeddedParts">{t('embedded_parts')}</option>
              </select>
            </div>
          )}
          {filterPrice && (
            <div className="flex justify-center items-center">
              <label className="sr-only" style={{ marginRight: '14px' }} htmlFor="filterPrice">
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
          {filterNew && (
            <div className="flex justify-center items-center">
              <input
                id="filterNew"
                type="checkbox"
                checked={isNew}
                onChange={handleFilterNew}
                className="form-checkbox h-5 w-5 text-indigo-600 rounded-lg"
              />
              <label htmlFor="filterNew" className="ml-2 text-gray-700">
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
              <label htmlFor="filterSale" className="ml-2 text-gray-700">
                Розпродаж
              </label>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
