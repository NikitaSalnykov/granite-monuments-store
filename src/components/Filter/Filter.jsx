import React, { useState } from 'react';
import Svg from '../Svg/Svg';
import { setFilterCategory, setFilterType, setFilterName, setFilterNew, setFilterPrice, setFilterSale, getFilterType, getFilterCategory } from '../../Redux/filter/filterSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

export const Filter = ({nameFilter=false, filterType=false, filterCategory=false, filterPrice=false, filterNew=false, filterSale=false, value}) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const category = useSelector(getFilterCategory);

  const [isCheckedSale, setCheckedSale] = useState(value === "sale" ? true : false)
  const products = [1,3,4]

  const handleFilter = ({ currentTarget }) => {
    dispatch(setFilterName(currentTarget.value));
  };

  const handleFilterType = ({ currentTarget }) => {
    dispatch(setFilterType(currentTarget.value));
  };

  const handleFilterCategory = ({ currentTarget }) => {
    dispatch(setFilterCategory(currentTarget.value));
    console.log(currentTarget.value);
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
    setCheckedSale(!isCheckedSale)
    dispatch(setFilterSale(!isCheckedSale));
  };

  return (
<div className="w-full flex flex-col lg:flex-row mb-4 gap-4 items-center justify-center">
<div className="flex gap-4 flex-wrap ">
{nameFilter && <div className='flex gap-1 bg-gray-50 border-[1px] px-2 text-gray-800 border-gray-300 hover:outline-none focus:outline-none rounded-lg mx-auto py-2'>
      <label className='flex justify-center items-center' style={{ marginRight: '14px' }} htmlFor="filter">
      <Svg id={'icon-search'} size={22} stroke={'black'}/>
      </label>
      <input
        id="filter"
        type="text"
        name="input"
        required
        onChange={handleFilter}
        variant="standard"
        className='w-full hover:outline-none focus:outline-none  bg-gray-50 '
      />
    </div>}
      <div className="flex gap-4 mx-auto">
      {filterCategory && <div className="flex justify-center items-center">
      <label className='sr-only' style={{ marginRight: '14px' }} htmlFor="filterCategory">
       Категория
       </label>
       <select id="filterCategory" onChange={handleFilterCategory} class="smOnly:w-[120px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block md:w-full p-2.5 ">
         <option className=' smOnly:mr-10'  selected={true}>Всі категорії</option>
         <option value={'memorials'}>{t('monuments')}</option>
         <option value={'landscaping'}>{t('landscaping')}</option>
         <option value={'relatedProducts'}>{t('related_products')}</option>
     </select>
      </div>}

      {filterType && category === 'memorials' && <div className="flex justify-center items-center">
      <label className='sr-only' style={{ marginRight: '14px' }} htmlFor="filterType">
       Цвет
       </label>
       <select id="filterType" onChange={handleFilterType}
 class="smOnly:min-w-[100px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
         <option selected>Всі типи</option>
         <option value={'availability'}>{t('availability')}</option>
         <option value={'vertical'}>{t('vertical')}</option>
         <option value={'horizontal'}>{t('horizontal')}</option>
         <option value={'small'}>{t('small')}</option>
     </select>
      </div>}

      {filterType && category === 'landscaping' && <div className="flex justify-center items-center">
      <label className='sr-only' style={{ marginRight: '14px' }} htmlFor="filterType">
       Цвет
       </label>
       <select id="filterType" onChange={handleFilterType}
 class="smOnly:min-w-[100px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
         <option selected>Всі типи</option>
         <option value={'antiSettlementSlabs'}>{t('anti_settlement_slabs')}</option>
         <option value={'pavingTiles'}>{t('paving_tiles')}</option>
         <option value={'graniteTiles'}>{t('granite_tiles')}</option>
         <option value={'fencing'}>{t('fencing')}</option>
         <option value={'tablesAndBenches'}>{t('tables_and_benches')}</option>
         <option value={'vasesAndLamps'}>{t('vases_and_lamps')}</option>
         <option value={'cubesAndSpheres'}>{t('cubes_and_spheres')}</option>
     </select>
      </div>}

      {filterType && category === 'relatedProducts' && <div className="flex justify-center items-center">
      <label className='sr-only' style={{ marginRight: '14px' }} htmlFor="filterType">
       Цвет
       </label>
       <select id="filterType" onChange={handleFilterType}
 class="smOnly:min-w-[100px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
         <option selected>Всі типи</option>
         <option>{t('glass_photos')}</option>
         <option>{t('plaques')}</option>
         <option>{t('embedded_parts')}</option>
     </select>
      </div>}

      {filterPrice && <div className="flex justify-center items-center">
      <label className='sr-only' style={{ marginRight: '14px' }} htmlFor="filterPrice">
       Цена
       </label>
       <select id="filterPrice" onChange={handleFilterPrice} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " 
       >
         <option value="10000000" selected>Всі ціни</option>
         <option value="100">Від дешевих до дорогих</option>
         <option value="200">Від дорогих до дешевих</option>
     </select>
      </div>}
      </div>
      
</div>
<div className="flex items-start gap-6">
                {filterSale && <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="salesProducts"
                      type="checkbox"
                      checked={isCheckedSale}
                      className="bg-gray-50 border border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded "
                      onChange={handleFilterSale}
                    />
                  </div>
                  <div className="text-sm ml-1">
                    <label
                      htmlFor="salesProducts"
                      className="font-medium text-gray-900 "
                    >
                      Со скидкой
                    </label>
                  </div>
                </div> }
                {filterNew && <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="newProducts"
                      type="checkbox"
                      className="bg-gray-50 border border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded "
                      onChange={handleFilterNew}
                    />
                  </div>
                  <div className="text-sm ml-1">
                    <label
                      htmlFor="newProducts"
                      className="font-medium text-gray-900 "
                    >
                      Новые поступления
                    </label>
                  </div>
                </div>}
              </div>
</div>
  );
};
