import React from 'react'
import { Filter } from '../../components/Filter/Filter'
import { ProductList } from '../../components/ProductList/ProductList'
import { useLocation } from 'react-router-dom';

const MemorialsPage = () => {
  
const value = new URLSearchParams(location.search).get('value');
  return (
    <div className="">
           <Filter nameFilter={true} filterColor={true} filterCategory={true} filterPrice={true} filterNew={true} filterSale={true} value={value}/>
     <ProductList/>
    </div>
  )
}

export default MemorialsPage