import React, { useState } from 'react';
import Svg from '../Svg/Svg';
import { setFilterCategory, setFilterColor, setFilterNew, setFilterPrice, setFilterSale } from '../../Redux/filter/filterSlice';

export const Filter = ({nameFilter=false, filterColor=false, filterCategory=false, filterPrice=false, filterNew=false, filterSale=false, value}) => {
  const [isCheckedSale, setCheckedSale] = useState(value === "sale" ? true : false)
  const products = [1,3,4]

  const handleFilter = ({ currentTarget }) => {
    dispatch(setFilterName(currentTarget.value));
  };

  const handleFilterColor = ({ currentTarget }) => {
    dispatch(setFilterColor(currentTarget.value));
  };

  const handleFilterCategory = ({ currentTarget }) => {
    dispatch(setFilterCategory(currentTarget.value));
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
      {filterColor && <div className="flex justify-center items-center">
      <label className='sr-only' style={{ marginRight: '14px' }} htmlFor="filterColor">
       Цвет
       </label>
       <select id="filterColor" onChange={handleFilterColor}
 class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
         <option selected>Все цвета</option>
         {products.map(el => <option>{el}</option>)}
     </select>
      </div>}
      {filterCategory && <div className="flex justify-center items-center">
      <label className='sr-only' style={{ marginRight: '14px' }} htmlFor="filterCategory">
       Категория
       </label>
       <select id="filterCategory" onChange={handleFilterCategory} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
         <option selected={true}>Все категории</option>
         <option selected={value === "main" ? true : false}>Основные ткани</option>
         <option selected={value === "accessories" ? true : false}>Аксессуары</option>
         {products.map(el => <option>{el}</option>
)}
     </select>
      </div>}
      {filterPrice && <div className="flex justify-center items-center">
      <label className='sr-only' style={{ marginRight: '14px' }} htmlFor="filterPrice">
       Цена
       </label>
       <select id="filterPrice" onChange={handleFilterPrice} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " 
       >
         <option value="10000000" selected>Все цены</option>
         <option value="100">До 100</option>
         <option value="200">До 200</option>
         <option value="300">До 300</option>
         <option value="1000">До 1000</option>
         <option value="2500">До 2500</option>
         <option value="100000">более 2500</option>
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
